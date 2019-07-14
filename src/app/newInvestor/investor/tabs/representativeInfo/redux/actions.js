import {
    RI_SET_PNAME,
    RI_SET_PSNAME,
    RI_SET_PFNAME,
    RI_SET_DATE_OF_BIRTH,
    RI_SET_SEX,
    RI_SET_POSITION,
    RI_SET_BASES,
    RI_SET_PERIOD,
    RI_SET_DOC_TYPE,
    RI_SET_SERIES,
    RI_SET_NUMBER,
    RI_SET_CODE,
    RI_SET_DATE_OF_ISSUE,
    RI_SET_VALID_UNTIL,
    RI_SET_BY_WHOM,
    RI_SET_CITIZENSHIP,
    RI_SET_IS_RUSSIAN_TAX_RESIDENT,
    RI_SET_COUNTRY,
    RI_SET_INDEX,
    RI_SET_USE_INDEX,
    RI_SET_REGION,
    RI_SET_AREA,
    RI_SET_CITY,
    RI_SET_HUMAN_SETTLEMENT,
    RI_SET_STREET,
    RI_SET_HOUSE,
    RI_SET_HOUSING,
    RI_SET_APARTMENT, RI_SET_PLACE_OF_BIRTH,
} from "./mainReducer";


export function pName(e) {
    return {type: RI_SET_PNAME, data: e.target.value};
}

export function psName(e) {
    return {type: RI_SET_PSNAME, data: e.target.value};
}

export function pfName(e) {
    return {type: RI_SET_PFNAME, data: e.target.value};
}

export function placeOfBirth(e) {
    return {type: RI_SET_PLACE_OF_BIRTH, data: e.target.value};
}

export function dateOfBirth(e) {
    return {type: RI_SET_DATE_OF_BIRTH, data: e};
}

export function sex(e) {
    return {type: RI_SET_SEX, data: e.target.value};
}

export function position(e) {
    return {type: RI_SET_POSITION, data: e.target.value};
}

export function bases(e) {
    return {type: RI_SET_BASES, data: e.target.value};
}

export function period(e) {
    return {type: RI_SET_PERIOD, data: e};
}

export function docType(e) {
    return {type: RI_SET_DOC_TYPE, data: e.target.value};
}

export function series(e) {
    return {type: RI_SET_SERIES, data: e.target.value};
}

export function number(e) {
    return {type: RI_SET_NUMBER, data: e.target.value};
}

export function code(e) {
    return {type: RI_SET_CODE, data: e.target.value};
}

export function dateOfIssue(e) {
    return {type: RI_SET_DATE_OF_ISSUE, data: e};
}

export function validUntil(e) {
    return {type: RI_SET_VALID_UNTIL, data: e};
}

export function byWhom(e) {
    return {type: RI_SET_BY_WHOM, data: e.target.value};
}

export function citizenship(e) {
    return {type: RI_SET_CITIZENSHIP, data: e.target.value};
}

export function isRussianTaxResident(e) {
    return {type: RI_SET_IS_RUSSIAN_TAX_RESIDENT, data: e.target.checked};
}

export function country(e) {
    return {type: RI_SET_COUNTRY, data: e.target.value};
}

export function index(e) {
    return {type: RI_SET_INDEX, data: e.target.value};
}

export function useIndex(e) {
    return {type: RI_SET_USE_INDEX, data: e.target.checked};
}

export function region(e) {
    return {type: RI_SET_REGION, data: e.target.value};
}

export function area(e) {
    return {type: RI_SET_AREA, data: e.target.value};
}

export function city(e) {
    return {type: RI_SET_CITY, data: e.target.value};
}

export function humanSettlement(e) {
    return {type: RI_SET_HUMAN_SETTLEMENT, data: e.target.value};
}

export function street(e) {
    return {type: RI_SET_STREET, data: e.target.value};
}

export function house(e) {
    return {type: RI_SET_HOUSE, data: e.target.value};
}

export function housing(e) {
    return {type: RI_SET_HOUSING, data: e.target.value};
}

export function apartment(e) {
    return {type: RI_SET_APARTMENT, data: e.target.value};
}