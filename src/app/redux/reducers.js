import {combineReducers} from 'redux';

import {main} from "./mainReducer";
import {representative} from "../newInvestor/investor/tabs/representativeInfo/redux/mainReducer";

export default combineReducers({
    main,
    representative
});