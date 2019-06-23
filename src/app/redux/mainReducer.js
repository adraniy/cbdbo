let initial = {
    investor: {},
    newInvestorDialogOpen: false,
    newInvestorTab: 0,
    statementInnerTab: 0,
    investorTab: {
        category: null
    }
};

export const UPDATE_INVESTOR = 'UPDATE_INVESTOR';
export const SET_INVESTOR_DIALOG_OPEN = 'SET_INVESTOR_DIALOG_OPEN';
export const SET_INVESTOR_DIALOG_TAB = 'SET_INVESTOR_DIALOG_TAB';
export const SET_STATEMENT_INNER_TAB = 'SET_STATEMENT_INNER_TAB';
export const SET_INVESTOR_CATEGORY = 'SET_INVESTOR_CATEGORY';

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
