let initial = {
    investor: {},
    newInvestorDialogOpen: false,
    managersDialogOpen: false,
    managerDialogOpen: false,
    newInvestorTab: 0,
    statementInnerTab: 0,
    newManagerTab: 0,
    investorTab: {
        category: null,
        code: "",
        managerPGR: null,
        dep: null,
        depCode: null,
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
    },
    duTab: {
        type: "",
        innFond: "",
        portfolioData: "",
        numberPif: "",
        group: false
    },
    questionnaireInnerTab: 0,
    questionnaireTab: {
        date: new Date(),
        instanceDate: new Date(),
        code: ""
    },
    qtCommonData: {
        name: "",
        shortName: "",
        nameEn: "",
        shortNameEn: "",
        inn: "",
        kpp: "",
        bik: "",
        okpo: "",
        okato: "",
        ogrn: "",
        okved: "",
        pName: "",
        psName: "",
        pfName: "",
        bases: "",
        period: "",
        unlimited: false,
        creditInstitution: false,
        additional: "",
        position: ""
    },
    mQtCommonData: {
        inn: "",
        name: "",
        sName: "",
        fName: "",
        useQtValues: true
    }
};

export const UPDATE_INVESTOR = 'UPDATE_INVESTOR';
export const SET_INVESTOR_DIALOG_OPEN = 'SET_INVESTOR_DIALOG_OPEN';
export const SET_INVESTOR_DIALOG_TAB = 'SET_INVESTOR_DIALOG_TAB';
export const SET_STATEMENT_INNER_TAB = 'SET_STATEMENT_INNER_TAB';

export const SET_NI_INVESTOR_CATEGORY = 'SET_NI_INVESTOR_CATEGORY';
export const SET_NI_MANAGER_PGR = 'SET_NI_MANAGER_PGR';
export const SET_NI_DEP = 'SET_NI_DEP';

export const SET_GIIN = 'SET_GIIN';
export const SET_FOREIGN_FINANCIAL_INSTITUTION = 'SET_FOREIGN_FINANCIAL_INSTITUTION';
export const SELECT_FOREIGN_FINANCIAL_INSTITUTION = 'SELECT_FOREIGN_FINANCIAL_INSTITUTION';
export const SELECT_IS_FINANCIAL_INSTITUTION = 'SELECT_IS_FINANCIAL_INSTITUTION';
export const SELECT_TAX_RESIDENT = 'SELECT_TAX_RESIDENT';
export const SET_DU_TYPE = 'SET_DU_TYPE';
export const SET_DU_FOND_INN = 'SET_DU_FOND_INN';
export const SET_DU_PORTFOLIO_DATA = 'SET_DU_PORTFOLIO_DATA';
export const SET_DU_NUMBER_PIF = 'SET_DU_NUMBER_PIF';
export const SET_DU_GROUP = 'SET_DU_GROUP';
export const SET_QT_DATE = 'SET_QT_DATE';
export const SET_QT_INSTANCE_DATE = 'SET_QT_INSTANCE_DATE';
export const SET_QT_CODE = 'SET_QT_CODE';
export const SET_QT_INNER_TAB = 'SET_QT_INNER_TAB';
export const SET_QT_CD_NAME = 'SET_QT_CD_NAME';
export const SET_QT_CD_SHORT_NAME = 'SET_QT_CD_SHORT_NAME';
export const SET_QT_CD_NAME_EN = 'SET_QT_CD_NAME_EN';
export const SET_QT_CD_SHORT_NAME_EN = 'SET_QT_CD_SHORT_NAME_EN';
export const SET_QT_CD_INN = 'SET_QT_CD_INN';
export const SET_QT_CD_KPP = 'SET_QT_CD_KPP';
export const SET_QT_CD_BIK = 'SET_QT_CD_BIK';
export const SET_QT_CD_OKPO = 'SET_QT_CD_OKPO';
export const SET_QT_CD_OKATO = 'SET_QT_CD_OKATO';
export const SET_QT_CD_OGRN = 'SET_QT_CD_OGRN';
export const SET_QT_CD_OKVED = 'SET_QT_CD_OKVED';
export const SET_QT_CD_PNAME = 'SET_QT_CD_PNAME';
export const SET_QT_CD_PSNAME = 'SET_QT_CD_PSNAME';
export const SET_QT_CD_PFNAME = 'SET_QT_CD_PFNAME';
export const SET_QT_CD_BASES = 'SET_QT_CD_BASES';
export const SET_QT_CD_PERIOD = 'SET_QT_CD_PERIOD';
export const SET_QT_CD_UNLIMITED = 'SET_QT_CD_UNLIMITED';
export const SET_QT_CD_CREDIT_INSTITUTION = 'SET_QT_CD_CREDIT_INSTITUTION';
export const SET_QT_CD_ADDITIONAL = 'SET_QT_CD_ADDITIONAL';
export const SET_QT_CD_POSITION = 'SET_QT_CD_POSITION';
export const SET_MANAGERS_DIALOG_OPEN = 'SET_MANAGERS_DIALOG_OPEN';
export const SET_MANAGER_DIALOG_OPEN = 'SET_MANAGER_DIALOG_OPEN';
export const SET_MANAGER_DIALOG_TAB = 'SET_MANAGER_DIALOG_TAB';

export const SET_MQT_CD_NAME = 'SET_MQT_CD_NAME';
export const SET_MQT_CD_SNAME = 'SET_MQT_CD_SNAME';
export const SET_MQT_CD_FNAME = 'SET_MQT_CD_FNAME';
export const SET_MQT_CD_INN = 'SET_MQT_CD_INN';
export const SET_MQT_USE_QT_VALUES = 'SET_MQT_USE_QT_VALUES';

export function main(state = initial, action) {
    switch (action.type) {
        case UPDATE_INVESTOR:
            return {
                ...state, investor: action.data
            };
        case SET_MQT_CD_NAME:
            return {
                ...state, mQtCommonData: {...state.mQtCommonData, name: action.data}
            };
        case SET_MQT_CD_INN:
            return {
                ...state, mQtCommonData: {...state.mQtCommonData, inn: action.data}
            };
        case SET_MQT_USE_QT_VALUES:
            return {
                ...state, mQtCommonData: {...state.mQtCommonData, useQtValues: action.data}
            };
        case SET_MQT_CD_SNAME:
            return {
                ...state, mQtCommonData: {...state.mQtCommonData, sName: action.data}
            };
        case SET_MQT_CD_FNAME:
            return {
                ...state, mQtCommonData: {...state.mQtCommonData, fName: action.data}
            };
        case SET_QT_CD_NAME:
            return {
                ...state, qtCommonData: {...state.qtCommonData, name: action.data}
            };
        case SET_QT_CD_ADDITIONAL:
            return {
                ...state, qtCommonData: {...state.qtCommonData, additional: action.data}
            };
        case SET_QT_CD_POSITION:
            return {
                ...state, qtCommonData: {...state.qtCommonData, position: action.data}
            };
        case SET_QT_CD_UNLIMITED:
            return {
                ...state, qtCommonData: {...state.qtCommonData, unlimited: action.data}
            };
        case SET_QT_CD_CREDIT_INSTITUTION:
            return {
                ...state, qtCommonData: {...state.qtCommonData, creditInstitution: action.data}
            };
        case SET_QT_CD_PERIOD:
            return {
                ...state, qtCommonData: {...state.qtCommonData, period: action.data}
            };
        case SET_QT_CD_BASES:
            return {
                ...state, qtCommonData: {...state.qtCommonData, bases: action.data}
            };
        case SET_QT_CD_PNAME:
            return {
                ...state, qtCommonData: {...state.qtCommonData, pName: action.data}
            };
        case SET_QT_CD_PSNAME:
            return {
                ...state, qtCommonData: {...state.qtCommonData, psName: action.data}
            };
        case SET_QT_CD_PFNAME:
            return {
                ...state, qtCommonData: {...state.qtCommonData, pfName: action.data}
            };
        case SET_QT_CD_OKATO:
            return {
                ...state, qtCommonData: {...state.qtCommonData, okato: action.data}
            };
        case SET_QT_CD_OGRN:
            return {
                ...state, qtCommonData: {...state.qtCommonData, ogrn: action.data}
            };
        case SET_QT_CD_OKVED:
            return {
                ...state, qtCommonData: {...state.qtCommonData, okved: action.data}
            };
        case SET_QT_CD_BIK:
            return {
                ...state, qtCommonData: {...state.qtCommonData, bik: action.data}
            };
        case SET_QT_CD_OKPO:
            return {
                ...state, qtCommonData: {...state.qtCommonData, okpo: action.data}
            };
        case SET_QT_CD_INN:
            return {
                ...state, qtCommonData: {...state.qtCommonData, inn: action.data}
            };
        case SET_QT_CD_KPP:
            return {
                ...state, qtCommonData: {...state.qtCommonData, kpp: action.data}
            };
        case SET_QT_CD_SHORT_NAME:
            return {
                ...state, qtCommonData: {...state.qtCommonData, shortName: action.data}
            };
        case SET_QT_CD_NAME_EN:
            return {
                ...state, qtCommonData: {...state.qtCommonData, nameEn: action.data}
            };
        case SET_QT_CD_SHORT_NAME_EN:
            return {
                ...state, qtCommonData: {...state.qtCommonData, shortNameEn: action.data}
            };
        case SET_QT_CODE:
            return {
                ...state, questionnaireTab: {...state.questionnaireTab, code: action.data}
            };
        case SET_QT_INSTANCE_DATE:
            return {
                ...state, questionnaireTab: {...state.questionnaireTab, instanceDate: action.data}
            };
        case SET_QT_DATE:
            return {
                ...state, questionnaireTab: {...state.questionnaireTab, date: action.data}
            };
        case SET_DU_GROUP:
            return {
                ...state, duTab: {...state.duTab, group: action.data}
            };
        case SET_DU_NUMBER_PIF:
            return {
                ...state, duTab: {...state.duTab, numberPif: action.data}
            };
        case SET_DU_PORTFOLIO_DATA:
            return {
                ...state, duTab: {...state.duTab, portfolioData: action.data}
            };
        case SET_DU_FOND_INN:
            return {
                ...state, duTab: {...state.duTab, innFond: action.data}
            };
        case SET_DU_TYPE:
            return {
                ...state, duTab: {...state.duTab, type: action.data}
            };
        case SET_NI_INVESTOR_CATEGORY:
            return {
                ...state, investorTab: {...state.investorTab, category: action.data, code: action.data.code}
            };
        case SET_NI_MANAGER_PGR:
            return {
                ...state, investorTab: {...state.investorTab, managerPGR: action.data}
            };
        case SET_NI_DEP:
            return {
                ...state, investorTab: {...state.investorTab, dep: action.data, depCode: '5200'}
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
        case SET_QT_INNER_TAB:
            return {
                ...state, questionnaireInnerTab: action.data
            };
        case SET_STATEMENT_INNER_TAB:
            return {
                ...state, statementInnerTab: action.data
            };
        case SET_INVESTOR_DIALOG_TAB:
            return {
                ...state, newInvestorTab: action.data
            };
        case SET_MANAGER_DIALOG_TAB:
            return {
                ...state, newManagerTab: action.data
            };
        case SET_INVESTOR_DIALOG_OPEN:
            return {
                ...state, newInvestorDialogOpen: action.data
            };
        case SET_MANAGERS_DIALOG_OPEN:
            return {
                ...state, managersDialogOpen: action.data
            };
        case SET_MANAGER_DIALOG_OPEN:
            return {
                ...state, managerDialogOpen: action.data
            };
        default:
            return state
    }
};
