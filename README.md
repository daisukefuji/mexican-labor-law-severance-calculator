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
* User-friendly interface built with HTML, CSS, and JavaScript.

## How to Use

1.  Clone this repository to your local machine:
    ```bash
    git clone https://github.com/daisukefuji/mexican-labor-law-severance-calculator.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd mexican-labor-law-severance-calculator
    ```

3.  Open the `index.html` file in your web browser (or visit the live link above).

4.  Enter the required information:
    * **Monthly Salary (MXN):** The employee's gross monthly salary in Mexican Pesos.
    * **Years of Service:** The total number of years the employee has worked for the company (can include decimal values for partial years).
    * **Reason for Termination:** Select whether the dismissal was justified or unjustified.

5.  Click the "Calculate" button to see the estimated severance pay.

6.  Use the language buttons at the top right to switch between English, Spanish, and Japanese.

## Basis of Calculation (Mexican Labor Law)

The calculations in this tool are based on the following articles of the **Mexican Federal Labor Law (Ley Federal del Trabajo)**:

* **Article 48:** Stipulates the compensation for unjustified dismissal, including three months of salary and twenty days of salary for each year of service.
* **Article 162:** Outlines the seniority premium (*prima de antigüedad*) which is paid in cases of justified dismissal after 15 years of service, equivalent to twelve days of salary for each year of service.

You can find the official text of the **Mexican Federal Labor Law (Ley Federal del Trabajo)** here:

[Ley Federal del Trabajo (Official Link)](https://www.gob.mx/stps/acciones-y-programas/ley-federal-del-trabajo-actualizada)

## Disclaimer

Please note that this calculator provides an **estimation** based on a simplified interpretation of the Mexican Federal Labor Law. Actual severance pay amounts can vary depending on specific circumstances, individual contracts, and legal interpretations. **Consult with a legal professional for precise calculations and legal advice.**

## Contributing

Contributions to this project are welcome! If you have suggestions, bug reports, or would like to add new features (like support for other aspects of Mexican labor law), please feel free to:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes.
5.  Push to the branch.
6.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more information.

## Acknowledgements

* This calculator is based on the articles of the [Mexican Federal Labor Law (Ley Federal del Trabajo)](https://www.gob.mx/stps/acciones-y-programas/ley-federal-del-trabajo-actualizada).

