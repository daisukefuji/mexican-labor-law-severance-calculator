# Mexican Labor Law Severance Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a web-based calculator designed to estimate the severance pay amounts an employee might be entitled to under the **Mexican Federal Labor Law (Ley Federal del Trabajo)**. It takes into account factors such as monthly salary, years of service, and the reason for termination (justified or unjustified dismissal).

**Try it out live at [https://daisukefuji.github.io/mexican-labor-law-severance-calculator/](https://daisukefuji.github.io/mexican-labor-law-severance-calculator/)**

## Features

* Calculates estimated severance pay for both justified and unjustified dismissals.
* Includes the seniority premium calculation where applicable.
* Supports multiple languages:
  * English
  * Español
  * 日本語 (Japanese)
* Detects the user's preferred browser language and defaults to English if the language is not supported.
* Provides clear results with formatted numbers (with thousands separators and two decimal places).
* User-friendly interface built with Hugo, HTML, CSS, and JavaScript.

## How to Use

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/daisukefuji/mexican-labor-law-severance-calculator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd mexican-labor-law-severance-calculator
    ```

3. Install [Hugo](https://gohugo.io/getting-started/installing/) if you haven't already.

4. Start the local development server:
    ```bash
    hugo server --ignoreCache --disableFastRender
    ```
    * Access the local site at [http://localhost:1313](http://localhost:1313).
    * `--ignoreCache` ensures you're not seeing outdated cached content.
    * `--disableFastRender` forces Hugo to fully render each time, which helps during theme/template development.

5. To generate a static site for production (output to `public/` directory):
    ```bash
    hugo
    ```
    * After running this command, the complete static site will be available inside the `public/` folder.
    * You can deploy the contents of the `public/` folder to GitHub Pages or any static hosting service.

## Input Instructions

1. Open the site locally or access the live link.
2. Enter the required information:
   * **Monthly Salary (MXN):** The employee's gross monthly salary in Mexican Pesos.
   * **Years of Service:** The total number of years the employee has worked for the company (partial years allowed).
   * **Reason for Termination:** Choose between justified or unjustified dismissal.

3. Click the "Calculate" button to see the estimated severance pay.

4. Switch languages using the language selector at the top right.

## Basis of Calculation (Mexican Labor Law)

The calculations in this tool are based on the following articles of the **Mexican Federal Labor Law (Ley Federal del Trabajo)**:

* **Article 48:** Compensation for unjustified dismissal, including three months of salary plus twenty days of salary for each year of service.
* **Article 162:** Seniority premium (*prima de antigüedad*), payable after 15 years of service, equivalent to twelve days of salary for each year.

Official reference:  
[Ley Federal del Trabajo (Official Link)](https://www.gob.mx/stps/acciones-y-programas/ley-federal-del-trabajo-actualizada)

## Disclaimer

This calculator provides an **estimate** based on a simplified interpretation of Mexican labor laws. Actual severance pay may vary depending on contracts, individual circumstances, or legal interpretation. **Consult a legal professional for accurate advice.**

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature or bugfix branch.
3. Make and commit your changes.
4. Push to your branch.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

## Acknowledgements

* Based on the [Mexican Federal Labor Law (Ley Federal del Trabajo)](https://www.gob.mx/stps/acciones-y-programas/ley-federal-del-trabajo-actualizada).
