import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {datePicker, select, selectItems} from "../../../common/utils";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";


const styles = theme => ({});

export class RepresentativeInfoTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={4}>
                    <FormControl style={{width: '450px'}}>
                        <TextField label={'Фамилия'} value={this.props.psName}
                                   onChange={this.props.actions.setQtCdPsName}/>
                        <TextField label={'Имя'} value={this.props.pName}
                                   onChange={this.props.actions.setQtCdPName}/>
                        <TextField label={'Отчество'} value={this.props.pfName}
                                   onChange={this.props.actions.setQtCdPfName
                                   }/>
                        <Grid container>
                            <Grid item xs={6}>
                                {datePicker('Дата рождения', this.props.period, this.props.actions.setQtCdPeriod)}
                            </Grid>
                            <Grid item xs={6} style={{paddingLeft: '20px', marginRight: '-20px'}}>
                                {select("Пол", this.props.sex, this.props.actions.setQtCdPfName, selectItems(['М', 'Ж']), true, true)}
                            </Grid>
                        </Grid>
                        <TextField required multiline rows={2} label={'Место рождения'} />
                        <TextField label={'Должность'} value={this.props.position}
                                   onChange={this.props.actions.setQtCdPosition}/>
                        <TextField label={'Основание представителя'} value={this.props.bases}
                                   onChange={this.props.actions.setQtCdBases}/>
                        {datePicker('Срок полномочий', this.props.period, this.props.actions.setQtCdPeriod)}
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{width: '450px', paddingLeft: '20px'}} >
                    <FormControl >
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
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox checked={false}/>}
                                label='Налоговый резидент РФ'/>
                        </FormControl>
                        <FormControl>
                            <Button color={"primary"}> Проверка по клиентам</Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: '20px'}}>
                    <FormControl style={{width: '450px'}}>
                        {select("Страна", this.props.sex, this.props.actions.setQtCdPfName, selectItems(['М', 'Ж']), true, true)}
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField label={'Индекс'} />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={false}/>}
                                    label='Учитывать индекс'/>
                            </Grid>
                        </Grid>
                        <TextField label={'Регион'} />
                        <TextField label={'Район'} />
                        <TextField label={'Город'} />
                        <TextField label={'Населенный пункт'} />
                        <TextField label={'Улица'} />
                        <Grid container>
                            <Grid item xs={4}>
                                <TextField label={'Дом'} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label={'Корпус'} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label={'Квартира'} />
                            </Grid>
                        </Grid>

                    </FormControl>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        pName: state.main.qtCommonData.pName,
        psName: state.main.qtCommonData.psName,
        pfName: state.main.qtCommonData.pfName,
        bases: state.main.qtCommonData.bases,
        period: state.main.qtCommonData.period,
        position: state.main.qtCommonData.position,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RepresentativeInfoTab));