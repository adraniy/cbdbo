import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export function doNothing(){}

export function selectItem(str){
    return <MenuItem key={str} value={str}>{str}</MenuItem>
}

export function selectItems(items){
    return items.map((i) => selectItem(i));
}

export function datePicker(label, value, onChange, fullWidth){
    return <FormControl fullWidth={fullWidth} >
        <DatePicker
        label={label}
        clearable
        format="DD.MM.YYYY"
        value={value || null}
        onChange={onChange}/>
    </FormControl>
}

export function text(label){
    return <TextField label={label}/>
}

export function select(label, value, onChange, items, required){
    return <FormControl fullWidth  required={required}>
        <InputLabel>{label}</InputLabel>
        <Select value={value || ""}
                onChange={onChange || (()=> {})}>
            {items || []}
        </Select>
    </FormControl>
}

export function simpleSelect(value, onChange, items, disabled){
    return <FormControl fullWidth  disabled={disabled} >
        <Select value={value || ""}
                onChange={onChange || (()=> {})}>
            {items || []}
        </Select>
    </FormControl>
}
