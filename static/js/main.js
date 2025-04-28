// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
        }
    });
    
    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });
  
    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });
    
    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }      

    // show the big header image  
    main.initImgs();
  },
  
  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

          // 2fc73a3a967e97599c9763d05e564189
    // set an initial image
    var imgInfo = main.getImgInfo();
    var src = imgInfo.src;
    var desc = imgInfo.desc;
      main.setImg(src, desc);
    
    // For better UX, prefetch the next image so that it will already be loaded when we want to show it
      var getNextImg = function() {
      var imgInfo = main.getImgInfo();
      var src = imgInfo.src;
      var desc = imgInfo.desc;      
      
    var prefetchImg = new Image();
      prefetchImg.src = src;
    // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`
    
      setTimeout(function(){
                  var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
        $(".intro-header.big-img").prepend(img);
        setTimeout(function(){ img.css("opacity", "1"); }, 50);
      
      // after the animation of fading in the new image is done, prefetch the next one
        //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
      setTimeout(function() {
        main.setImg(src, desc);
      img.remove();
        getNextImg();
      }, 1000); 
        //});   
      }, 6000);
      };
    
    // If there are multiple images, cycle through them
    if (main.numImgs > 1) {
        getNextImg();
    }
    }
  },
  
  getImgInfo : function() {
    var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
  var desc = main.bigImgEl.attr("data-img-desc-" + randNum);
  
  return {
    src : src,
    desc : desc
  }
  },
  
  setImg : function(src, desc) {
  $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
  if (typeof desc !== typeof undefined && desc !== false) {
    $(".img-desc").text(desc).show();
  } else {
    $(".img-desc").hide();  
  }
  },

  formatWithCommas : function (number) {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  calculateSeverance : function () {
    const salary = parseFloat(document.getElementById('salary').value);
    const start_date = document.getElementById('start_date').value;
    const end_date = document.getElementById('end_date').value;
    const reason = document.getElementById('reason').value;
    const resultDiv = document.getElementById('result');
    let severancePay = 0;

    if (isNaN(salary) || salary < 0 || !start_date || !end_date) {
        resultDiv.innerHTML = `<p style="color: red;" data-i18n="validation_error">Please enter valid data.</p>`;
        translateElement(resultDiv);
        return;
    }

    const startDateObj = new Date(start_date);
    const endDateObj = new Date(end_date);

    // Calculate the difference in milliseconds
    const timeDiff = endDateObj.getTime() - startDateObj.getTime();
    // Calculate the difference in days
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    // Calculate years with decimal
    const years = daysDiff / 365;

    if (reason === 'unjustified') {
        const threeMonthsSalary = 3 * salary;
        const twentyDaysPerYear = (20 / 30) * salary;
        const dailySalary = salary / 30;
        const minimum_wage = 278.8;
        const dailySalaryForSeniorityPremium = Math.min(dailySalary, (minimum_wage * 2));

        const seniorityPremium = (years > 0) ? 12 * dailySalaryForSeniorityPremium * years : 0;

        severancePay = threeMonthsSalary + (twentyDaysPerYear * years) + seniorityPremium;
        resultDiv.innerHTML = `<h2><span data-i18n="unjustified_title">Severance Pay (Unjustified Dismissal)</span></h2>
                               <p><strong><span data-i18n="three_months_salary">3 Months Salary</span>:</strong> MXN ${main.formatWithCommas(threeMonthsSalary)}</p>
                               <p><strong><span data-i18n="twenty_days_per_year">20 Days per Year</span>:</strong> MXN ${main.formatWithCommas(twentyDaysPerYear * years)}</p>
                               <p><strong><span data-i18n="seniority_premium">Seniority Premium (if applicable)</span>:</strong> MXN ${main.formatWithCommas(seniorityPremium)}</p>
                               <p><strong><span data-i18n="total_severance">Total Estimated Severance Pay</span>:</strong> MXN ${main.formatWithCommas(severancePay)}</p>
                               <p><small data-i18n="disclaimer">This is an estimate and might not include all applicable factors. Consult with a legal professional for precise calculations.</small></p>`;
    } else if (reason === 'justified') {
        const seniorityPremium = (years >= 15) ? 12 * salary * years : 0;

        if (years >= 15) {
            severancePay = seniorityPremium;
            resultDiv.innerHTML = `<h2><span data-i18n="justified_title_long">Seniority Premium (Justified Dismissal - 15+ Years)</span></h2>
                                   <p><strong><span data-i18n="seniority_premium">Seniority Premium</span>:</strong> MXN ${main.formatWithCommas(seniorityPremium)}</p>
                                   <p><small data-i18n="justified_long_disclaimer">This applies for dismissals after 15 years of service. Consult the Mexican Federal Labor Law for details.</small></p>`;
        } else {
            resultDiv.innerHTML = `<h2><span data-i18n="justified_title_short">Seniority Premium (Justified Dismissal)</span></h2>
                                   <p data-i18n="justified_short_disclaimer">No severance pay is typically required for justified dismissal under ${years.toFixed(2)} years of service, only the proportional parts of earned benefits.</p>
                                   <p><small data-i18n="justified_general_disclaimer">Consult the Mexican Federal Labor Law for detailed information.</small></p>`;
        }
    }
    //translateElement(resultDiv);
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);