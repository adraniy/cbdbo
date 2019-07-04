import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export function doNothing() {
}

export function selectItem(str, key, value) {
    return <MenuItem key={key ? str[key] : str} value={value ? str[value] : str}>{key ? str[key] : str}</MenuItem>
}

export function selectItems(items, key, value) {
    return items.map((i) => selectItem(i, key, value));
}

export function datePicker(label, value, onChange, fullWidth) {
    return <FormControl fullWidth={fullWidth}>
        <DatePicker
            label={label}
            clearable
            format="DD.MM.YYYY"
            value={value || null}
            onChange={onChange}/>
    </FormControl>
}

export function text(label, value, onChange, fullWidth) {
    return <FormControl fullWidth={fullWidth}><TextField label={label} value={value} onChange={onChange}/></FormControl>
}

export function select(label, value, onChange, items, required, noFullWidth) {
    return <FormControl fullWidth={!noFullWidth} style={{minWidth: '195px'}} required={required}>
        <InputLabel>{label}</InputLabel>
        <Select value={value || ""}
                onChange={onChange || (() => {
                })}>
            {items || []}
        </Select>
    </FormControl>
}

export function simpleSelect(value, onChange, items, disabled) {
    return <FormControl fullWidth disabled={disabled}>
        <Select value={value || ""}
                onChange={onChange || (() => {
                })}>
            {items || []}
        </Select>
    </FormControl>
}
