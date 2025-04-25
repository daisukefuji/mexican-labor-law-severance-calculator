function formatWithCommas(number) {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculateSeverance() {
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
                               <p><strong><span data-i18n="three_months_salary">3 Months Salary</span>:</strong> MXN ${formatWithCommas(threeMonthsSalary)}</p>
                               <p><strong><span data-i18n="twenty_days_per_year">20 Days per Year</span>:</strong> MXN ${formatWithCommas(twentyDaysPerYear * years)}</p>
                               <p><strong><span data-i18n="seniority_premium">Seniority Premium (if applicable)</span>:</strong> MXN ${formatWithCommas(seniorityPremium)}</p>
                               <p><strong><span data-i18n="total_severance">Total Estimated Severance Pay</span>:</strong> MXN ${formatWithCommas(severancePay)}</p>
                               <p><small data-i18n="disclaimer">This is an estimate and might not include all applicable factors. Consult with a legal professional for precise calculations.</small></p>`;
    } else if (reason === 'justified') {
        const seniorityPremium = (years >= 15) ? 12 * salary * years : 0;

        if (years >= 15) {
            severancePay = seniorityPremium;
            resultDiv.innerHTML = `<h2><span data-i18n="justified_title_long">Seniority Premium (Justified Dismissal - 15+ Years)</span></h2>
                                   <p><strong><span data-i18n="seniority_premium">Seniority Premium</span>:</strong> MXN ${formatWithCommas(seniorityPremium)}</p>
                                   <p><small data-i18n="justified_long_disclaimer">This applies for dismissals after 15 years of service. Consult the Mexican Federal Labor Law for details.</small></p>`;
        } else {
            resultDiv.innerHTML = `<h2><span data-i18n="justified_title_short">Seniority Premium (Justified Dismissal)</span></h2>
                                   <p data-i18n="justified_short_disclaimer">No severance pay is typically required for justified dismissal under ${years.toFixed(2)} years of service, only the proportional parts of earned benefits.</p>
                                   <p><small data-i18n="justified_general_disclaimer">Consult the Mexican Federal Labor Law for detailed information.</small></p>`;
        }
    }
    translateElement(resultDiv);
}

// Set default end date to today
window.onload = function () {
    const endDateInput = document.getElementById('end_date');
    if (endDateInput) {
        const today = new Date();
        const todayFormatted = today.toISOString().split('T')[0]; // Get YYYY-MM-DD
        endDateInput.value = todayFormatted;
    }
};