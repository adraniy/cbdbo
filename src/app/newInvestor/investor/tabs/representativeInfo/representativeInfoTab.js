import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from './redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {datePicker, select, selectItems} from "../../../../common/utils";
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
                                   onChange={this.props.actions.psName}/>
                        <TextField label={'Имя'} value={this.props.pName}
                                   onChange={this.props.actions.pName}/>
                        <TextField label={'Отчество'} value={this.props.pfName}
                                   onChange={this.props.actions.pfName}/>
                        <Grid container>
                            <Grid item xs={6}>
                                {datePicker('Дата рождения', this.props.dateOfBirth, this.props.actions.dateOfBirth)}
                            </Grid>
                            <Grid item xs={6} style={{paddingLeft: '20px', marginRight: '-20px'}}>
                                {select("Пол", this.props.sex, this.props.actions.sex, selectItems(['М', 'Ж']), true, true)}
                            </Grid>
                        </Grid>
                        <TextField value={this.props.placeOfBirth} onChange={this.props.actions.placeOfBirth} multiline
                                   rows={2} label={'Место рождения'}/>
                        <TextField label={'Должность'} value={this.props.position}
                                   onChange={this.props.actions.position}/>
                        <TextField label={'Основание представителя'} value={this.props.bases}
                                   onChange={this.props.actions.bases}/>
                        {datePicker('Срок полномочий', this.props.period, this.props.actions.period)}
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{width: '450px', paddingLeft: '20px'}}>
                    <FormControl>
                        {select("Тип документа", this.props.docType, this.props.actions.docType, selectItems(['Паспорт гражданина РФ', 'Водительское удостоверение']))}
                    </FormControl>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField value={this.props.series} onChange={this.props.actions.series} label={'Серия'}/>
                            <TextField value={this.props.number} onChange={this.props.actions.number} label={'Номер'}/>
                            <TextField value={this.props.code} onChange={this.props.actions.code}
                                       label={'Код подразделения'}/>
                            {datePicker('Дата выдачи', this.props.dateOfIssue, this.props.actions.dateOfIssue)}
                            {datePicker('Действителен до', this.props.validUntil, this.props.actions.validUntil)}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField multiline rows={11} value={this.props.byWhom}
                                       onChange={this.props.actions.byWhom} label={'Кем выдан'}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {select("Гражданство", this.props.citizenship, this.props.actions.citizenship, selectItems(['России', '-']))}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox checked={this.props.isRussianTaxResident}
                                                   onChange={this.props.actions.isRussianTaxResident}/>}
                                label='Налоговый резидент РФ'/>
                        </FormControl>
                        <FormControl>
                            <Button color={"primary"}> Проверка по клиентам</Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: '20px'}}>
                    <FormControl style={{width: '450px'}}>
                        {select("Страна", this.props.country, this.props.actions.country, selectItems(['Россия', 'США']), true, true)}
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField label={'Индекс'} value={this.props.index}
                                           onChange={this.props.actions.index}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={this.props.useIndex}
                                                       onChange={this.props.actions.useIndex}/>}
                                    label='Учитывать индекс'/>
                            </Grid>
                        </Grid>
                        <TextField label={'Регион'} value={this.props.region} onChange={this.props.actions.region}/>
                        <TextField label={'Район'} value={this.props.area} onChange={this.props.actions.area}/>
                        <TextField label={'Город'} value={this.props.city} onChange={this.props.actions.city}/>
                        <TextField label={'Населенный пункт'} value={this.props.humanSettlement}
                                   onChange={this.props.actions.humanSettlement}/>
                        <TextField label={'Улица'} value={this.props.street} onChange={this.props.actions.street}/>
                        <Grid container>
                            <Grid item xs={4}>
                                <TextField label={'Дом'} value={this.props.house} onChange={this.props.actions.house}/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label={'Корпус'} value={this.props.housing}
                                           onChange={this.props.actions.housing}/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label={'Квартира'} value={this.props.apartment}
                                           onChange={this.props.actions.apartment}/>
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
        pName: state.representative.pName,
        psName: state.representative.psName,
        pfName: state.representative.pfName,
        dateOfBirth: state.representative.dateOfBirth,
        placeOfBirth: state.representative.placeOfBirth,
        sex: state.representative.sex,

        position: state.representative.position,
        bases: state.representative.bases,
        period: state.representative.period,

        docType: state.representative.docType,
        series: state.representative.series,
        number: state.representative.number,
        code: state.representative.code,
        dateOfIssue: state.representative.dateOfIssue,
        validUntil: state.representative.validUntil,
        byWhom: state.representative.byWhom,
        citizenship: state.representative.citizenship,
        isRussianTaxResident: state.representative.isRussianTaxResident,

        country: state.representative.country,
        index: state.representative.index,
        useIndex: state.representative.useIndex,
        region: state.representative.region,
        area: state.representative.area,
        city: state.representative.city,
        humanSettlement: state.representative.humanSettlement,
        street: state.representative.street,
        house: state.representative.house,
        housing: state.representative.housing,
        apartment: state.representative.apartment,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RepresentativeInfoTab));