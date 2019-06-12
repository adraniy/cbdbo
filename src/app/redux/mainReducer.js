let initial = {
    investor:{

    },
    newInvestorDialogOpen: false
};

export const UPDATE_INVESTOR = 'UPDATE_INVESTOR';
export const SET_INVESTOR_DIALOG_OPEN = 'SET_INVESTOR_DIALOG_OPEN';

export function main(state = initial, action) {
    switch (action.type) {
        case UPDATE_INVESTOR:
            return {
                ...state, investor: action.data
            }
        case SET_INVESTOR_DIALOG_OPEN:
            return {
                ...state, newInvestorDialogOpen: action.data
            }
        default:
            return state
    }
};
