import {
    SET_INVESTOR_CATEGORY,
    SET_INVESTOR_DIALOG_OPEN,
    SET_INVESTOR_DIALOG_TAB,
    SET_STATEMENT_INNER_TAB,
    SET_GIIN,
    SET_FOREIGN_FINANCIAL_INSTITUTION,
    SELECT_FOREIGN_FINANCIAL_INSTITUTION,
    SELECT_IS_FINANCIAL_INSTITUTION,
    SELECT_TAX_RESIDENT

} from "./mainReducer";

export function toggleInvestorDialog() {
    return (dispatch, getState) => {
        dispatch({type: SET_INVESTOR_DIALOG_OPEN, data: !getState().main.newInvestorDialogOpen});
    }
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
    return {type: SET_FOREIGN_FINANCIAL_INSTITUTION, data:v};
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