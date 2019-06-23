import React from "react";
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import {select, selectItems, simpleSelect} from "../../../../common/utils";
import TextField from "@material-ui/core/TextField";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import {withStyles} from "@material-ui/styles";
import {connect} from "react-redux";


const styles = theme => ({});

export const siteActions = {
    undefined: 'Не определено',
    declare: 'Заявляю',
    confirm: 'Подтверждаю',
    refuse: 'Отказываюсь'
};

export const siteActionItems = selectItems(Object.keys(siteActions).map((k) => siteActions[k]));

export class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [
                {site: 'ТС ММВБ', disabled: true, action: siteActions.undefined, depoAcc: null, cashAcc: null},
                {site: 'ТС ФР МБ', disabled: false, action: siteActions.undefined, depoAcc: null, cashAcc: null},
                {site: 'ТС ВР МБ', disabled: false, action: siteActions.undefined, depoAcc: null, cashAcc: null},
                {site: 'ТС ФБ СПБ', disabled: true, action: null, depoAcc: null, cashAcc: null},
                {site: 'РосНефть', disabled: true, action: null, depoAcc: null, cashAcc: null},
                {site: 'ТС СР МБ', disabled: false, action: siteActions.undefined, depoAcc: null, cashAcc: null},
                {site: 'ТС ОТС', disabled: false, action: siteActions.undefined, depoAcc: null, cashAcc: null},
            ]
        };
    }

    render() {
        return <div>
            <Grid container>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label='Допущен к работе ЦБ и котировальному списку "И"'/>
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label="Поручения на ОТС РЕПО овернат"/>
                </Grid>
                <Grid item xs={4}>
                    <Button>Редактировать</Button>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            {select("Тарифный план", null, null, null, true)}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth multiline label="Тарифные опции" rows={3}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container style={{paddingLeft: '20px'}}>
                        <Grid item xs={12}>
                            <div style={{height: '48px'}}>
                                <TextField disabled fullWidth label="Основной 306 счет"/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth multiline label="Дополнительные опции" rows={3}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Площадка</TableCell>
                                <TableCell>Действие</TableCell>
                                <TableCell>Депо счет</TableCell>
                                <TableCell>Денежый счет</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.sites.map((s) => {
                                return <TableRow key={s.site} style={{opacity: s.disabled ? '0.6' : '1'}}>
                                    <TableCell>{s.site}</TableCell>
                                    <TableCell>
                                        {simpleSelect(s.action, (e) => {
                                            let newSites = this.state.sites.map((ns) => {
                                                if (ns.site === s.site) {
                                                    return {...ns, action: e.target.value}
                                                } else return ns;
                                            });
                                            this.setState({sites: newSites});
                                        }, siteActionItems, s.disabled)}
                                    </TableCell>
                                    <TableCell><TextField margin={"dense"} className={'noLabel'} disabled={s.disabled} fullWidth label=" " value={s.depoAcc || undefined}/>
                                    </TableCell>
                                    <TableCell><TextField margin={"dense"} className={'noLabel'} disabled={s.disabled} fullWidth label=" " value={s.cashAcc|| undefined}/></TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Grid>


            </Grid>
        </div>
    }
}

const
    mapStateToProps = function (state) {
        return {
            newInvestorDialogOpen: state.main.newInvestorDialogOpen
        }
    };

const
    mapDispatchToProps = (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sites));