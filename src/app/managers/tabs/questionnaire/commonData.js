import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {datePicker, doNothing, select, selectItems} from "../../../common/utils";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";


const styles = theme => ({});

export class CommonData extends React.Component {

    render() {
        let changeName = this.props.useQtValues ? this.props.actions.setQtCdPName : this.props.actions.setMQtCdPName;
        let changeSName = this.props.useQtValues ? this.props.actions.setQtCdPsName : this.props.actions.setMQtCdPsName;
        let changeFName = this.props.useQtValues ? this.props.actions.setQtCdPfName : this.props.actions.setMQtCdPfName;
        let changeInn = this.props.useQtValues ? this.props.actions.setQtCdInn : this.props.actions.setMQtCdInn;
        return <div>
            <Grid container>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField required label={'Фамилия'} value={this.props.sName}
                                   onChange={changeSName}/>
                        <TextField required label={'Имя'} value={this.props.name}
                                   onChange={changeName}/>
                        <TextField label={'Отчество'} value={this.props.fName}
                                   onChange={changeFName}/>
                        <TextField required multiline rows={3} label={'Место рождения'} />
                    </FormControl>
                    <Grid container>
                        <Grid item xs={6}>
                            {datePicker('Дата рождения', this.props.period, this.props.actions.setQtCdPeriod)}
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: '20px'}}>
                            {select("Пол", this.props.sex, this.props.actions.setQtCdPfName, selectItems(['М', 'Ж']), true, true)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{paddingLeft: '20px'}}>
                    <FormControl fullWidth>
                        <TextField label={'ИНН'} value={this.props.inn} onChange={changeInn}/>
                        <TextField label={'СНИЛС'}/>
                        <TextField label={'Должность'} />
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        {select("Тип документа", this.props.sex, this.props.actions.setQtCdPfName, selectItems(['Паспорт гражданина РФ', 'Водительское удостоверение']))}
                    </FormControl>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField required label={'Серия'} />
                            <TextField required label={'Номер'}/>
                            <TextField required label={'Код подразделения'} />
                            {datePicker('Дата выдачи')}
                            {datePicker('Действителен до')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField multiline rows={11} label={'Кем выдан'} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {select("Гражданство", this.props.sex, this.props.actions.setQtCdPfName, selectItems(['России', '-']))}
                    </Grid><Grid item xs={12}>
                    <FormControl>
                        <FormControlLabel
                            control={<Checkbox checked={false}/>}
                            label='Нологовый резидент РФ'/>
                    </FormControl>
                    <FormControl>
                        <Button color={"primary"}> Проверка по клиентам</Button>
                    </FormControl>
                </Grid>
                </Grid>
            </Grid>
            <FormControlLabel control={<Checkbox checked={this.props.useQtValues}
                                                 onChange={this.props.actions.setMQtCdUseQtValues}/>}
                              label='Значения из "Анкеты"'/>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        name: state.main.mQtCommonData.useQtValues ? state.main.qtCommonData.pName : state.main.mQtCommonData.name,
        sName: state.main.mQtCommonData.useQtValues ? state.main.qtCommonData.psName : state.main.mQtCommonData.sName,
        fName: state.main.mQtCommonData.useQtValues ? state.main.qtCommonData.pfName : state.main.mQtCommonData.fName,
        inn: state.main.mQtCommonData.useQtValues ? state.main.qtCommonData.inn : state.main.mQtCommonData.inn,
        useQtValues: state.main.mQtCommonData.useQtValues
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommonData));