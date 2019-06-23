import {
    SET_INVESTOR_CATEGORY,
    SET_INVESTOR_DIALOG_OPEN,
    SET_INVESTOR_DIALOG_TAB,
    SET_STATEMENT_INNER_TAB
} from "./mainReducer";

export function toggleInvestorDialog() {
    return (dispatch, getState) => {
        dispatch({type: SET_INVESTOR_DIALOG_OPEN, data: !getState().main.newInvestorDialogOpen});
    }
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