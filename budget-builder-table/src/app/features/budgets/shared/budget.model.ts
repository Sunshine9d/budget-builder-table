export interface Budget {
    id: number;
    name: string;
    amount: number;
}

export const BudgetMonth = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};


const budgetObj = {
    months: [
        {
            month: 'January',
            sub: [
                {
                    type: 'Income',
                    sub: [
                        {
                            key: 'generalIncome',
                            sub: [
                                {
                                    key: 'generalIncome',
                                    label: 'General Income',
                                    value: 100,
                                },
                                {
                                    key: 'sales',
                                    label: 'Sales',
                                    value: 200,
                                },
                                {
                                    key: 'commission',
                                    label: 'Commission',
                                    value: 0,
                                },
                            ],
                            total: 300,
                        },
                        {
                            key: 'otherIncome',
                            sub: [
                                {
                                    key: 'otherIncome',
                                    label: 'Other Income',
                                    value: null,
                                },
                                {
                                    key: 'training',
                                    label: 'Training',
                                    value: 500,
                                },
                                {
                                    key: 'consulting',
                                    label: 'Consulting',
                                    value: 500,
                                },
                            ],
                            total: 1000,
                        },
                    ],
                    total: 1300,
                },
                {
                    type: 'Expenses',
                    sub: [
                        {
                            key: 'operationalExpenses',
                            sub: [
                                {
                                    key: 'operationalExpenses',
                                    label: 'Operational Expenses',
                                    value: 50,
                                },
                                {
                                    key: 'Management Fees',
                                    label: 'Management Fees',
                                    value: 100,
                                },
                                {
                                    key: 'Cloud Hosting',
                                    label: 'Cloud Hosting',
                                    value: 200,
                                },
                            ],
                            total: 300,
                        },
                        {
                            key: 'salaries&Wages',
                            sub: [
                                {
                                    key: 'salaries&Wages',
                                    label: 'Salaries & Wages',
                                    value: null,
                                },
                                {
                                    key: 'Full Time Dev Salaries',
                                    label: 'Full Time Dev Salaries',
                                    value: 100,
                                },
                                {
                                    key: 'Part Time Dev Salaries',
                                    label: 'Part Time Dev Salaries',
                                    value: 80,
                                },
                                {
                                    key: 'Remote Salaries',
                                    label: 'Remote Salaries',
                                    value: 20,
                                },
                            ],
                            total: 200,
                        },
                    ],
                    total: 500,
                },
            ],
        },
        {
            month: 'February',
            sub: [
                {
                    type: 'Income',
                    sub: [
                        {
                            key: 'generalIncome',
                            sub: [
                                {
                                    key: 'generalIncome',
                                    label: 'General Income',
                                    value: 100,
                                },
                                {
                                    key: 'sales',
                                    label: 'Sales',
                                    value: 200,
                                },
                                {
                                    key: 'commission',
                                    label: 'Commission',
                                    value: 0,
                                },
                            ],
                            total: 300,
                        },
                        {
                            key: 'otherIncome',
                            sub: [
                                {
                                    key: 'otherIncome',
                                    label: 'Other Income',
                                    value: null,
                                },
                                {
                                    key: 'training',
                                    label: 'Training',
                                    value: 500,
                                },
                                {
                                    key: 'consulting',
                                    label: 'Consulting',
                                    value: 500,
                                },
                            ],
                            total: 1000,
                        },
                    ],
                    total: 1300,
                },
                {
                    type: 'Expenses',
                    sub: [
                        {
                            key: 'operationalExpenses',
                            sub: [
                                {
                                    key: 'operationalExpenses',
                                    label: 'Operational Expenses',
                                    value: 50,
                                },
                                {
                                    key: 'Management Fees',
                                    label: 'Management Fees',
                                    value: 100,
                                },
                                {
                                    key: 'Cloud Hosting',
                                    label: 'Cloud Hosting',
                                    value: 200,
                                },
                            ],
                            total: 300,
                        },
                        {
                            key: 'salaries&Wages',
                            sub: [
                                {
                                    key: 'salaries&Wages',
                                    label: 'Salaries & Wages',
                                    value: null,
                                },
                                {
                                    key: 'Full Time Dev Salaries',
                                    label: 'Full Time Dev Salaries',
                                    value: 100,
                                },
                                {
                                    key: 'Part Time Dev Salaries',
                                    label: 'Part Time Dev Salaries',
                                    value: 80,
                                },
                                {
                                    key: 'Remote Salaries',
                                    label: 'Remote Salaries',
                                    value: 20,
                                },
                            ],
                            total: 200,
                        },
                    ],
                    total: 500,
                },
            ],
        },
    ],
    profitOrLoss: 0,
    openingBalance: 0,
    closingBalance: 0,
};
