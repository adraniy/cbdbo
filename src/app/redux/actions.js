import {SET_INVESTOR_DIALOG_OPEN} from "./mainReducer";

export function toggleInvestorDialog() {
    return (dispatch, getState) => {
        dispatch({type: SET_INVESTOR_DIALOG_OPEN, data: !getState().main.newInvestorDialogOpen});
    }
}