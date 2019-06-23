import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {datePicker} from "../../../common/utils";


const styles = theme => ({});

export class DetailsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodsOfApplication: [
                {label: "Через уполномоченных представителей", checked: false},
                {label: "По телефону", checked: false},
                {label: 'Посредством АС "Фокус" с использованием ЭЦП', checked: false},
                {label: 'Посредством АС "Фокус" с использованием КА', checked: false},
                {label: 'Посредством системы интернет-трейдинга с использованием КА', checked: false},
                {
                    label: 'Посредством системы интернет-трейдинга с использованием двухвакторной аутентификации',
                    checked: false
                },
            ],
            methodsOfTransmission: {
                byRepresentative: false,
                byLetter: false,
                byAgreement: false,
                number: "",
                date: undefined
            },
            methodOfReceivingReports: {
                byRepresentative: false
            },
            methodsOfReporting: {
                byRepresentative: false,
                byLetter: false,
                byAgreement: false,
                number: "",
                date: undefined
            },
            methodToGenerateIncome: {
                byCashAcc: false,
                byBrokAcc: false,
                byCashAccFromQues: false
            }
        };
        this.changeMethodToGenerateIncome = (field, value) => {
            this.setState({methodToGenerateIncome: {...this.state.methodToGenerateIncome, [field]: value}})
        };

        this.changeMethodsOfTransmission = (field, value) => {
            this.setState({methodsOfTransmission: {...this.state.methodsOfTransmission, [field]: value}})
        };
        this.changeMethodsOfReporting = (field, value) => {
            this.setState({methodsOfReporting: {...this.state.methodsOfReporting, [field]: value}})
        };
        this.changeMethodOfReceivingReports = (event) => {
            this.setState({
                methodOfReceivingReports: {
                    ...this.state.methodOfReceivingReports,
                    byRepresentative: event.target.checked
                }
            })
        };

        this.checkMethodsOfApplication = (changed) => (event) => {
            let newMethodsOfApplication = this.state.methodsOfApplication.map((m) => {
                return (changed === m) ? {...m, checked: event.target.checked} : m
            });
            this.setState({methodsOfApplication: newMethodsOfApplication});
        }
    }

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Способ передачи Заявок и распоряжений Инвестора:
                    </Typography>
                    <div style={{padding: '10px'}}>
                        {this.state.methodsOfApplication.map((m, i) => {
                            return <FormControl fullWidth key={i}> <FormControlLabel
                                control={<Checkbox color={"primary"} onChange={this.checkMethodsOfApplication(m)}
                                                   checked={m.checked}/>}
                                label={m.label}/></FormControl>
                        })}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6"> Способ передачи поручений и иных документов в рамках условий
                        Депозитария</Typography>
                    <div style={{padding: '10px'}}>
                        <FormControl fullWidth> <FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodsOfTransmission('byRepresentative', event.target.checked)}
                                               checked={this.state.methodsOfTransmission.byRepresentative}/>}
                            label={'Через уполномоченых представтелей'}/></FormControl>
                        <FormControl fullWidth> <FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodsOfTransmission('byLetter', event.target.checked)}
                                               checked={this.state.methodsOfTransmission.byLetter}/>}
                            label={'Заказным письмом с уведомлением'}/></FormControl>
                        <Grid container>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <FormControlLabel
                                        control={<Checkbox color={"primary"}
                                                           onChange={(event) => this.changeMethodsOfTransmission('byAgreement', event.target.checked)}
                                                           checked={this.state.methodsOfTransmission.byAgreement}/>}
                                        label={'В соответствии с соглашением'}/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} style={{paddingLeft: '20px'}}>
                                <TextField fullWidth label="№" value={this.state.methodsOfTransmission.number}
                                           onChange={(event) => this.changeMethodsOfTransmission('number', event.target.value)}/>
                            </Grid>
                            <Grid item xs={4} style={{paddingLeft: '20px'}}>
                                {datePicker('От', this.state.methodsOfTransmission.date,
                                    (date) => this.changeMethodsOfTransmission('date', date))}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6"> Способ получения отчетов брокера</Typography>
                    <div style={{padding: '10px'}}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Checkbox color={"primary"} onChange={this.changeMethodOfReceivingReports}
                                                   checked={this.state.methodOfReceivingReports.byRepresentative}/>}
                                label={'Через уполномоченых представтелей'}/>
                        </FormControl>
                    </div>
                    <Typography variant="h6">Способ получения доходов</Typography>
                    <div style={{padding: '10px'}}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Checkbox color={"primary"}
                                                   onChange={(event) => this.changeMethodToGenerateIncome('byCashAcc', event.target.checked)}
                                                   checked={this.state.methodToGenerateIncome.byCashAcc}/>}
                                label={'Переводом на денежный счет (актуально до 27.03.2014)'}/> </FormControl>
                        <FormControl fullWidth><FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodToGenerateIncome('byBrokAcc', event.target.checked)}
                                               checked={this.state.methodToGenerateIncome.byBrokAcc}/>}
                            label={'Переводом на брокерский счет'}/></FormControl>
                        <FormControl fullWidth> <FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodToGenerateIncome('byCashAccFromQues', event.target.checked)}
                                               checked={this.state.methodToGenerateIncome.byCashAccFromQues}/>}
                            label={'Переводом на денежный счет указанный в анкете'}/></FormControl>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Способ выдачи отчетов и иных документов в рамках условий
                        Депозитария</Typography>
                    <div style={{padding: '10px'}}>
                        <FormControl fullWidth> <FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodsOfReporting('byRepresentative', event.target.checked)}
                                               checked={this.state.methodsOfReporting.byRepresentative}/>}
                            label={'Через уполномоченых представтелей'}/></FormControl>
                        <FormControl fullWidth> <FormControlLabel
                            control={<Checkbox color={"primary"}
                                               onChange={(event) => this.changeMethodsOfReporting('byLetter', event.target.checked)}
                                               checked={this.state.methodsOfReporting.byLetter}/>}
                            label={'Заказным письмом с уведомлением'}/></FormControl>
                        <Grid container>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <FormControlLabel
                                        control={<Checkbox color={"primary"}
                                                           onChange={(event) => this.changeMethodsOfReporting('byAgreement', event.target.checked)}
                                                           checked={this.state.methodsOfReporting.byAgreement}/>}
                                        label={'В соответствии с соглашением'}/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} style={{paddingLeft: '20px'}}>
                                <TextField fullWidth label="№" value={this.state.methodsOfReporting.number}
                                           onChange={(event) => this.changeMethodsOfReporting('number', event.target.value)}/>
                            </Grid>
                            <Grid item xs={4} style={{paddingLeft: '20px'}}>
                                {datePicker('От', this.state.methodsOfReporting.date,
                                    (date) => this.changeMethodsOfReporting('date', date))}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        investorTab: state.main.investorTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DetailsTab));