import {
    SELECT_FOREIGN_FINANCIAL_INSTITUTION,
    SELECT_IS_FINANCIAL_INSTITUTION,
    SELECT_TAX_RESIDENT,
    SET_DU_FOND_INN,
    SET_DU_GROUP,
    SET_DU_NUMBER_PIF,
    SET_DU_PORTFOLIO_DATA,
    SET_DU_TYPE,
    SET_FOREIGN_FINANCIAL_INSTITUTION,
    SET_GIIN,
    SET_INVESTOR_CATEGORY,
    SET_INVESTOR_DIALOG_OPEN,
    SET_INVESTOR_DIALOG_TAB, SET_QT_CD_ADDITIONAL,
    SET_QT_CD_BASES,
    SET_QT_CD_BIK, SET_QT_CD_CREDIT_INSTITUTION,
    SET_QT_CD_INN,
    SET_QT_CD_KPP,
    SET_QT_CD_NAME,
    SET_QT_CD_NAME_EN,
    SET_QT_CD_OGRN,
    SET_QT_CD_OKATO,
    SET_QT_CD_OKPO,
    SET_QT_CD_OKVED,
    SET_QT_CD_PERIOD,
    SET_QT_CD_PFNAME,
    SET_QT_CD_PNAME,
    SET_QT_CD_PSNAME,
    SET_QT_CD_SHORT_NAME,
    SET_QT_CD_SHORT_NAME_EN, SET_QT_CD_UNLIMITED,
    SET_QT_CODE,
    SET_QT_DATE,
    SET_QT_INNER_TAB,
    SET_QT_INSTANCE_DATE,
    SET_STATEMENT_INNER_TAB
} from "./mainReducer";


export function qtInnerTab(e, v) {
    return {type: SET_QT_INNER_TAB, data: v};
}

export function toggleInvestorDialog() {
    return (dispatch, getState) => {
        dispatch({type: SET_INVESTOR_DIALOG_OPEN, data: !getState().main.newInvestorDialogOpen});
    }
}

export function setQtCdName(e) {
    return {type: SET_QT_CD_NAME, data: e.target.value};
}

export function setQtCdUnlimited(e) {
    return {type: SET_QT_CD_UNLIMITED, data: e.target.checked};
}

export function setQtCdCreditInstitution(e) {
    return {type: SET_QT_CD_CREDIT_INSTITUTION, data: e.target.checked};
}

export function setQtCdAdditional(e) {
    return {type: SET_QT_CD_ADDITIONAL, data: e.target.value};
}

export function setQtCdPeriod(e) {
    return {type: SET_QT_CD_PERIOD, data: e};
}

export function setQtCdBases(e) {
    return {type: SET_QT_CD_BASES, data: e.target.value};
}

export function setQtCdPName(e) {
    return {type: SET_QT_CD_PNAME, data: e.target.value};
}

export function setQtCdPsName(e) {
    return {type: SET_QT_CD_PSNAME, data: e.target.value};
}

export function setQtCdPfName(e) {
    return {type: SET_QT_CD_PFNAME, data: e.target.value};
}

export function setQtCdOkato(e) {
    return {type: SET_QT_CD_OKATO, data: e.target.value};
}

export function setQtCdOgrn(e) {
    return {type: SET_QT_CD_OGRN, data: e.target.value};
}

export function setQtCdOkved(e) {
    return {type: SET_QT_CD_OKVED, data: e.target.value};
}

export function setQtCdInn(e) {
    return {type: SET_QT_CD_INN, data: e.target.value};
}

export function setQtCdBik(e) {
    return {type: SET_QT_CD_BIK, data: e.target.value};
}

export function setQtCdOkpo(e) {
    return {type: SET_QT_CD_OKPO, data: e.target.value};
}

export function setQtCdKpp(e) {
    return {type: SET_QT_CD_KPP, data: e.target.value};
}

export function setQtCdShortName(e) {
    return {type: SET_QT_CD_SHORT_NAME, data: e.target.value};
}

export function setQtCdNameEn(e) {
    return {type: SET_QT_CD_NAME_EN, data: e.target.value};
}

export function setQtCdShortNameEn(e) {
    return {type: SET_QT_CD_SHORT_NAME_EN, data: e.target.value};
}

export function setQtCode(e) {
    return {type: SET_QT_CODE, data: e.target.value};
}

export function setQtInstanceDate(e) {
    return {type: SET_QT_INSTANCE_DATE, data: e};
}

export function setQtDate(e) {
    return {type: SET_QT_DATE, data: e};
}

export function setDuGroup(e) {
    return {type: SET_DU_GROUP, data: e.target.checked};
}

export function setDuNumberPif(e) {
    return {type: SET_DU_NUMBER_PIF, data: e.target.value};
}

export function setDuType(e) {
    return {type: SET_DU_TYPE, data: e.target.value};
}

export function setDuFondInn(e) {
    return {type: SET_DU_FOND_INN, data: e.target.value};
}

export function setDuPortfolioData(e) {
    return {type: SET_DU_PORTFOLIO_DATA, data: e.target.value};
}

export function taxResidentChanged(e) {
    return {type: SELECT_TAX_RESIDENT, data: e.target.value};
}

export function selectForeignFinancialInstitution(e) {
    return {type: SELECT_FOREIGN_FINANCIAL_INSTITUTION, data: e.target.value};
}

export function selectIsFinancialInstitution(e) {
    return {type: SELECT_IS_FINANCIAL_INSTITUTION, data: e.target.value};
}

export function setForeignFinancialInstitution(v) {
    return {type: SET_FOREIGN_FINANCIAL_INSTITUTION, data: v};
}

export function setGIIN(e) {
    return {type: SET_GIIN, data: e.target.value};
}

export function investorDialogTab(e, v) {
    return {type: SET_INVESTOR_DIALOG_TAB, data: v};
}

export function statementInnerTab(e, v) {
    return {type: SET_STATEMENT_INNER_TAB, data: v};
}

export function changeCategory(event) {
    return {type: SET_INVESTOR_CATEGORY, data: event.target.value};
}