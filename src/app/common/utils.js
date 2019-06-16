import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export function doNothing(){}

export function selectItem(str){
    return <MenuItem key={str} value={str}>{str}</MenuItem>
}

export function selectItems(items){
    return items.map((i) => selectItem(i));
}