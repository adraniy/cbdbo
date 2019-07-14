let initial = {
    pName: "",
    psName: "",
    pfName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    sex: "",

    position: "",
    bases: "",
    period: "",

    docType: "",
    series: "",
    number: "",
    code: "",
    dateOfIssue: "",
    validUntil: "",
    byWhom: "",
    citizenship: "",
    isRussianTaxResident: true,

    country: "",
    index: "",
    useIndex: false,
    region: "",
    area: "",
    city: "",
    humanSettlement: "",
    street: "",
    house: "",
    housing: "",
    apartment: "",
};

export const RI_SET_PNAME = 'RI_SET_PNAME';
export const RI_SET_PSNAME = 'RI_SET_PSNAME';
export const RI_SET_PFNAME = 'RI_SET_PFNAME';
export const RI_SET_DATE_OF_BIRTH = 'RI_SET_DATE_OF_BIRTH';
export const RI_SET_PLACE_OF_BIRTH = 'RI_SET_PLACE_OF_BIRTH';
export const RI_SET_SEX = 'RI_SET_SEX';
export const RI_SET_POSITION = 'RI_SET_POSITION';
export const RI_SET_BASES = 'RI_SET_BASES';
export const RI_SET_PERIOD = 'RI_SET_PERIOD';
export const RI_SET_DOC_TYPE = 'RI_SET_DOC_TYPE';
export const RI_SET_SERIES = 'RI_SET_SERIES';
export const RI_SET_NUMBER = 'RI_SET_NUMBER';
export const RI_SET_CODE = 'RI_SET_CODE';
export const RI_SET_DATE_OF_ISSUE = 'RI_SET_DATE_OF_ISSUE';
export const RI_SET_VALID_UNTIL = 'RI_SET_VALID_UNTIL';
export const RI_SET_BY_WHOM = 'RI_SET_BY_WHOM';
export const RI_SET_CITIZENSHIP = 'RI_SET_CITIZENSHIP';
export const RI_SET_IS_RUSSIAN_TAX_RESIDENT = 'RI_SET_IS_RUSSIAN_TAX_RESIDENT';
export const RI_SET_COUNTRY = 'RI_SET_COUNTRY';
export const RI_SET_INDEX = 'RI_SET_INDEX';
export const RI_SET_USE_INDEX = 'RI_SET_USE_INDEX';
export const RI_SET_REGION = 'RI_SET_REGION';
export const RI_SET_AREA = 'RI_SET_AREA';
export const RI_SET_CITY = 'RI_SET_CITY';
export const RI_SET_HUMAN_SETTLEMENT = 'RI_SET_HUMAN_SETTLEMENT';
export const RI_SET_STREET = 'RI_SET_STREET';
export const RI_SET_HOUSE = 'RI_SET_HOUSE';
export const RI_SET_HOUSING = 'RI_SET_HOUSING';
export const RI_SET_APARTMENT = 'RI_SET_APARTMENT';

export function representative(state = initial, action) {
    switch (action.type) {
        case RI_SET_PNAME:
            return {
                ...state, pName: action.data
            };
        case RI_SET_PSNAME:
            return {
                ...state, psName: action.data
            };
        case RI_SET_PFNAME:
            return {
                ...state, pfName: action.data
            };
        case RI_SET_DATE_OF_BIRTH:
            return {
                ...state, dateOfBirth: action.data
            }; case RI_SET_PLACE_OF_BIRTH:
            return {
                ...state, placeOfBirth: action.data
            };
        case RI_SET_SEX:
            return {
                ...state, sex: action.data
            };
        case RI_SET_POSITION:
            return {
                ...state, position: action.data
            };
        case RI_SET_BASES:
            return {
                ...state, bases: action.data
            };
        case RI_SET_PERIOD:
            return {
                ...state, period: action.data
            };
        case RI_SET_DOC_TYPE:
            return {
                ...state, docType: action.data
            };
        case RI_SET_SERIES:
            return {
                ...state, series: action.data
            };
        case RI_SET_NUMBER:
            return {
                ...state, number: action.data
            };
        case RI_SET_CODE:
            return {
                ...state, code: action.data
            };
        case RI_SET_DATE_OF_ISSUE:
            return {
                ...state, dateOfIssue: action.data
            };
        case RI_SET_VALID_UNTIL:
            return {
                ...state, validUntil: action.data
            };
        case RI_SET_BY_WHOM:
            return {
                ...state, byWhom: action.data
            };
        case RI_SET_CITIZENSHIP:
            return {
                ...state, citizenship: action.data
            };
        case RI_SET_IS_RUSSIAN_TAX_RESIDENT:
            return {
                ...state, isRussianTaxResident: action.data
            };
        case RI_SET_COUNTRY:
            return {
                ...state, country: action.data
            };
        case RI_SET_INDEX:
            return {
                ...state, index: action.data
            };
        case RI_SET_USE_INDEX:
            return {
                ...state, useIndex: action.data
            };
        case RI_SET_REGION:
            return {
                ...state, region: action.data
            };
        case RI_SET_AREA:
            return {
                ...state, area: action.data
            };
        case RI_SET_CITY:
            return {
                ...state, city: action.data
            };
        case RI_SET_HUMAN_SETTLEMENT:
            return {
                ...state, humanSettlement: action.data
            };
        case RI_SET_STREET:
            return {
                ...state, street: action.data
            };
        case RI_SET_HOUSE:
            return {
                ...state, house: action.data
            };
        case RI_SET_HOUSING:
            return {
                ...state, housing: action.data
            };
        case RI_SET_APARTMENT:
            return {
                ...state, apartment: action.data
            };
        default:
            return state
    }
};
