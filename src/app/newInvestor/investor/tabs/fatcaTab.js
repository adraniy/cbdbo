import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {text} from "../../../common/utils";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    group: {
        margin: theme.spacing(1, 0),
    }
});


export class FatcaTab extends React.Component {
    constructor(props) {
        super(props);
        this.updateInnerText = (iValue) => (innerTextValue) => {
            let newForeignFinancialInstitution = this.props.foreignFinancialInstitution.map((i) => {
                return i.value === iValue ? {...i, innerText: {...i.innerText, value: innerTextValue}} : i
            });
            this.props.actions.setForeignFinancialInstitution(newForeignFinancialInstitution);
        }
    }

    render() {
        let classes = this.props.classes;
        return <div>
            <Grid container>
                <FormControl fullWidth> <Typography style={{marginTop: '20px'}} variant="h6">Идентификация по
                    требованиям FATCA:</Typography></FormControl>
                <Grid item xs={6}> {text('GIIN', this.props.GIIN, this.props.actions.setGIIN, true)}</Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Является ли инвестор иностранным финансовым институтом</FormLabel>
                        <RadioGroup className={classes.group}
                                    value={this.props.foreignFinancialInstitutionSelected}
                                    onChange={this.props.actions.selectForeignFinancialInstitution}>
                            {
                                this.props.foreignFinancialInstitution.map((i) => {
                                    return <div key={i.value}>
                                        <FormControlLabel value={i.value}
                                                          control={<Radio color={"primary"}/>} label={i.label}/>
                                        {i.innerText ? <FormControl fullWidth>
                                                <TextField
                                                    disabled={i.value !== this.props.foreignFinancialInstitutionSelected}
                                                    label={i.innerText.label}
                                                    value={i.innerText.value}
                                                    onChange={(e) => this.updateInnerText(i.value)(e.target.value)}/>
                                            </FormControl>
                                            : null}
                                    </div>
                                })}
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth> <Typography style={{marginTop: '20px'}} variant="h6">Идентификация по
                        налоговому резидентству:</Typography></FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Сведения о наличии статуса налогового резидентав иностранном
                            государстве</FormLabel>
                        <RadioGroup
                            className={classes.group}
                            value={this.props.taxResident}
                            onChange={this.props.actions.taxResidentChanged}>
                            <FormControlLabel value={'1'} control={<Radio color={"primary"}/>}
                                              label={'Налоговый резидент только РФ'}/>
                            <FormControlLabel value={'2'} control={<Radio color={"primary"}/>}
                                              label={'Налоговый резидент в иностранном государстве'}/>
                        </RadioGroup>
                        {this.props.taxResident !== '2' ? null : <div>
                            <FormControl fullWidth> <Typography  variant="h6">Другие страны налогового резидента:</Typography></FormControl>
                            <Grid item xs={12} >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell >Страна</TableCell>
                                            <TableCell >ИНН</TableCell>
                                            <TableCell >Причина отсутствия ИНН</TableCell>
                                            <TableCell >Комментрий</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <IconButton > <Add /></IconButton>
                                <IconButton > <Remove /></IconButton>
                            </Grid>
                        </div>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Является ли юридическое лицо финансовым институтом для целей установления сведений о налоговом резидентстве</FormLabel>
                        <RadioGroup className={classes.group}
                                    value={this.props.isFinancialInstitutionSelected}
                                    onChange={this.props.actions.selectIsFinancialInstitution}>
                            {
                                this.props.isFinancialInstitution.map((i) => {
                                    return <div key={i.value}>
                                        <FormControlLabel value={i.value}
                                                          control={<Radio color={"primary"}/>} label={i.label}/>
                                    </div>
                                })}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        GIIN: state.main.fatcaTab.GIIN,
        foreignFinancialInstitution: state.main.fatcaTab.foreignFinancialInstitution,
        foreignFinancialInstitutionSelected: state.main.fatcaTab.foreignFinancialInstitutionSelected,
        taxResident: state.main.fatcaTab.taxResident,
        taxCountries: state.main.fatcaTab.taxCountries,
        isFinancialInstitution: state.main.fatcaTab.isFinancialInstitution,
        isFinancialInstitutionSelected: state.main.fatcaTab.isFinancialInstitutionSelected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FatcaTab));