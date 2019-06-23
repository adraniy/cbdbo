let initial = {
    investor: {},
    newInvestorDialogOpen: false,
    newInvestorTab: 0,
    statementInnerTab: 0,
    investorTab: {
        category: null
    },
    fatcaTab: {
        GIIN: "",
        foreignFinancialInstitutionSelected: "",
        foreignFinancialInstitution: [
            {
                label: 'Да, иностранный финансовый институт, учавствующий в применении FATCA (Participating FFI)',
                value: '1'
            },
            {
                label: 'Да, зарегистрированный иностранный финансовый институт, признанный соблюдающим требования FATCA (Registered deemed-compliant FFI)',
                value: '2'
            },
            {
                label: 'Да, спонсируемая инвестиционная компани закрытого типа (Sponsored, closely held investment vehicles FFI)',
                value: '3',
                innerText: {
                    label: 'Наименование/ Sponsored entity', value: ''
                }
            }, {
                label: 'Да, спонсируемая инвестиционная компания и контролируемая иностранная компани(Sponsored, closely held investment vehicles FFI)',
                innerText: {
                    label: 'Наименование/ Sponsored entity', value: ''
                },
                value: '4'
            }, {
                label: 'Да, прочие (Other)', innerText: {
                    label: 'Статус FFI', value: ''
                },
                value: '5'
            }, {
                label: 'Да, но не имеет GIIN. Иностранный финансовый институт, учавствующий в применении FATCA (Participating FFI)',
                value: '6'
            }, {
                label: 'Да, но не имеет GIIN. Зарегистрированный иностранный финансовый институт, признанный соблюдающим требования FATCA (Registered deemed-compliant FFI)',
                value: '7'
            },
            {
                label: 'Нет, нефинансовая организация, без существенных собственников из США (NFFE without substantial US owners)',
                value: '8'
            },
            {
                label: 'Нет, нефинансовая организация, напрямую предоставляющя отчетность в налоговую службу США (Direct reporting NFFE)',
                value: '9'
            },
            {
                label: 'Нет, спонсируемая нефинансовая организация, напрямую предоставляющя отчетность в налоговую службу США (Sponsored direct reporting NFFE)',
                value: '10'
            }
        ],
        taxResident: "",
        taxCountries: [],
        isFinancialInstitutionSelected: '',
        isFinancialInstitution: [
            {
                label: 'Да, является инвестиционной организацией и находится под управлением Финансового института',
                value: '1'
            },
            {
                label: 'Да, по иным основаниям',
                value: '2'
            },
            {
                label: 'Нет, является правительственным учрежденеием',
                value: '3'
            }, {
                label: 'Нет, является международной организацией',
                value: '4'
            }, {
                label: 'Нет, является Активной нефинансовой организацией (Active NFFE)',
                value: '5'
            }, {
                label: 'Нет, является пассивной нефинансовой организацией (Passive NFFE) и не имеет в наличии контролирующих лиц/бенефициарных владельцев, которые являются налоговыми резидентами иностранного государства (не РФ)',
                value: '6'
            }
        ]
    }
};

export const UPDATE_INVESTOR = 'UPDATE_INVESTOR';
export const SET_INVESTOR_DIALOG_OPEN = 'SET_INVESTOR_DIALOG_OPEN';
export const SET_INVESTOR_DIALOG_TAB = 'SET_INVESTOR_DIALOG_TAB';
export const SET_STATEMENT_INNER_TAB = 'SET_STATEMENT_INNER_TAB';
export const SET_INVESTOR_CATEGORY = 'SET_INVESTOR_CATEGORY';
export const SET_GIIN = 'SET_GIIN';
export const SET_FOREIGN_FINANCIAL_INSTITUTION = 'SET_FOREIGN_FINANCIAL_INSTITUTION';
export const SELECT_FOREIGN_FINANCIAL_INSTITUTION = 'SELECT_FOREIGN_FINANCIAL_INSTITUTION';
export const SELECT_IS_FINANCIAL_INSTITUTION = 'SELECT_IS_FINANCIAL_INSTITUTION';
export const SELECT_TAX_RESIDENT = 'SELECT_TAX_RESIDENT';

export function main(state = initial, action) {
    switch (action.type) {
        case UPDATE_INVESTOR:
            return {
                ...state, investor: action.data
            };
        case SET_INVESTOR_CATEGORY:
            return {
                ...state, investorTab: {...state.investorTab, category: action.data}
            };
        case SELECT_TAX_RESIDENT:
            return {
                ...state, fatcaTab: {...state.fatcaTab, taxResident: action.data}
            };
        case SET_GIIN:
            return {
                ...state, fatcaTab: {...state.fatcaTab, GIIN: action.data}
            };
        case SET_FOREIGN_FINANCIAL_INSTITUTION:
            return {
                ...state, fatcaTab: {...state.fatcaTab, foreignFinancialInstitution: action.data}
            };
        case SELECT_IS_FINANCIAL_INSTITUTION:
            return {
                ...state, fatcaTab: {...state.fatcaTab, isFinancialInstitutionSelected: action.data}
            };
        case SELECT_FOREIGN_FINANCIAL_INSTITUTION:
            return {
                ...state, fatcaTab: {...state.fatcaTab, foreignFinancialInstitutionSelected: action.data}
            };
        case SET_STATEMENT_INNER_TAB:
            return {
                ...state, statementInnerTab: action.data
            };
        case SET_INVESTOR_DIALOG_TAB:
            return {
                ...state, newInvestorTab: action.data
            };
        case SET_INVESTOR_DIALOG_OPEN:
            return {
                ...state, newInvestorDialogOpen: action.data
            };
        default:
            return state
    }
};
