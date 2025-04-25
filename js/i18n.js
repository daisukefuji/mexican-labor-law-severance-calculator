const translations = {
    en: {
        title: "Mexico Severance Pay Calculator",
        salary_label: "Monthly Salary (MXN):",
        start_date_label: "Start Date:",
        end_date_label: "Expected End Date:",
        employment_period: "Employment Period:",
        reason_label: "Reason for Termination:",
        unjustified_reason: "Unjustified Dismissal",
        justified_reason: "Justified Dismissal",
        calculate_button: "Calculate",
        validation_error: "Please enter valid data.",
        unjustified_title: "Severance Pay (Unjustified Dismissal)",
        three_months_salary: "3 Months Salary (Indemnización)",
        twenty_days_per_year: "20 Days per Year if applicable (Separación Unica)",
        seniority_premium: "Seniority Premium (Prima de antiguedad)",
        total_severance: "Total Estimated Severance Pay",
        disclaimer: "This is an estimate and might not include all applicable factors. Consult with a legal professional for precise calculations.",
        justified_title_long: "Seniority Premium (Justified Dismissal - 15+ Years)",
        justified_long_disclaimer: "This applies for dismissals after 15 years of service. Consult the Mexican Federal Labor Law for details.",
        justified_title_short: "Seniority Premium (Justified Dismissal)",
        justified_short_disclaimer: "No severance pay is typically required for justified dismissal under {{years}} years of service, only the proportional parts of earned benefits.",
        justified_general_disclaimer: "Consult the Mexican Federal Labor Law for detailed information."
    },
    es: {
        title: "Calculadora de Indemnización por Despido en México",
        salary_label: "Salario Mensual (MXN):",
        start_date_label: "Fecha de Inicio:",
        end_date_label: "Fecha de Fin Esperada:",
        employment_period: "Periodo de Empleo:", // New label
        reason_label: "Razón de Terminación:",
        unjustified_reason: "Despido Injustificado",
        justified_reason: "Despido Justificado",
        calculate_button: "Calcular",
        validation_error: "Por favor, introduce datos válidos.",
        unjustified_title: "Indemnización por Despido Injustificado",
        three_months_salary: "3 Meses de Salario (Indemnización)",
        twenty_days_per_year: "20 Días por Año, si aplica (Separación Unica)",
        seniority_premium: "Prima de Antigüedad (Prima de antigued)",
        total_severance: "Pago Total Estimado de Indemnización",
        disclaimer: "Esta es una estimación y podría no incluir todos los factores aplicables. Consulta con un profesional legal para cálculos precisos.",
        justified_title_long: "Prima de Antigüedad (Despido Justificado - Más de 15 Años)",
        justified_long_disclaimer: "Esto aplica para despidos después de 15 años de servicio. Consulta la Ley Federal del Trabajo Mexicana para más detalles.",
        justified_title_short: "Prima de Antigüedad (Despido Justificado)",
        justified_short_disclaimer: "Normalmente no se requiere indemnización por despido justificado con menos de {{years}} años de servicio, solo las partes proporcionales de los beneficios devengados.",
        justified_general_disclaimer: "Consulta la Ley Federal del Trabajo Mexicana para obtener información detallada."
    },
    ja: {
        title: "メキシコ解雇補償金計算ツール",
        salary_label: "月給（MXN）：",
        start_date_label: "開始日:",
        end_date_label: "終了予定日:",
        employment_period: "雇用期間:", // New label
        reason_label: "解雇理由：",
        unjustified_reason: "不当解雇",
        justified_reason: "正当解雇",
        calculate_button: "計算",
        validation_error: "有効なデータを入力してください。",
        unjustified_title: "解雇補償金（不当解雇）",
        three_months_salary: "3ヶ月分の給与 (Indemnización)",
        twenty_days_per_year: "年間20日分 (Separación Unica) ※該当する場合",
        seniority_premium: "勤続年数手当 (Prima de antiguedad)",
        total_severance: "推定解雇補償金合計",
        disclaimer: "これは概算であり、有給休暇手当の未払い分 (Prima de vacaciones retenida)、年末手当 (Aguinaldo)等の要素が含まれておりません。正確な計算については、法律の専門家にご相談ください。",
        justified_title_long: "勤続年数手当（正当解雇 - 15年以上）",
        justified_long_disclaimer: "これは15年以上の勤続年数での解雇に適用されます。詳細については、メキシコ連邦労働法をご参照ください。",
        justified_title_short: "勤続年数手当（正当解雇）",
        justified_short_disclaimer: "{{years}}年未満の勤続年数での正当解雇の場合、通常、解雇補償金は不要で、未払いの給与や手当の比例分のみが支払われます。",
        justified_general_disclaimer: "詳細については、メキシコ連邦労働法をご参照ください。"
    }
};

let currentLanguage = 'en'; // Default fallback language

function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.substring(0, 2);
}

function formatNumberWithCommas(number) {
    return number.toLocaleString('en-US');
}

function loadTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            //  Replace only if '{{years}}' is present and replace it with empty string
            if (translations[lang][key].includes('{{years}}')) {
                element.textContent = translations[lang][key].replace('{{years}}', '');
            } else {
                element.textContent = translations[lang][key];
            }
        } else if (translations['en'] && translations['en'][key]) {
            //  Replace only if '{{years}}' is present and replace it with empty string
            if (translations['en'][key].includes('{{years}}')) {
                element.textContent = translations['en'][key].replace('{{years}}', '');
            } else {
                element.textContent = translations['en'][key];
            }
        }
    });
    currentLanguage = lang;
}

function translateElement(element) {
    const elements = element.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            //  Replace only if '{{years}}' is present and replace it with empty string
            if (translations[currentLanguage][key].includes('{{years}}')) {
                el.textContent = translations[currentLanguage][key].replace('{{years}}', '');
            } else {
                el.textContent = translations[currentLanguage][key];
            }
        } else if (translations['en'] && translations['en'][key]) {
            //  Replace only if '{{years}}' is present and replace it with empty string
            if (translations['en'][key].includes('{{years}}')) {
                el.textContent = translations['en'][key].replace('{{years}}', '');
            } else {
                el.textContent = translations['en'][key];
            }
        }
    });
}

function changeLanguage(lang) {
    loadTranslations(lang);
}

// Set initial language based on browser preference
const browserPreferredLanguage = getBrowserLanguage();
if (translations[browserPreferredLanguage]) {
    loadTranslations(browserPreferredLanguage);
} else {
    loadTranslations('en');
}