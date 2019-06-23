import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {datePicker, select} from "../../../../common/utils";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const styles = theme => ({});

export class CommonData extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField multiline rows={3} label={'Полное наименование'} value={this.props.name}
                                   onChange={this.props.actions.setQtCdName}/>
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <FormControl fullWidth>
                        <TextField multiline rows={3} label={'Полное наименование (англ)'} value={this.props.nameEn}
                                   onChange={this.props.actions.setQtCdNameEn}/>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField label={'Краткое наименование'} value={this.props.shortName}
                                   onChange={this.props.actions.setQtCdShortName}/>
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <FormControl fullWidth>
                        <TextField label={'Краткое наименование (англ)'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <TextField required label={'ИНН'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        <TextField required label={'КПП'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        <TextField label={'БИК'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        <TextField label={'ОКПО'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                    </FormControl>
                    <FormControl style={{paddingLeft: '20px'}}>
                        <TextField label={'ОКАТО'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        <TextField required label={'ОГРН'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        <TextField required label={'ОКВЕД'} value={this.props.shortNameEn}
                                   onChange={this.props.actions.setQtCdShortNameEn}/>
                        {select('Юристикция')}
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <FormControl>
                                <TextField label={'Фамилия представителя'} value={this.props.shortNameEn}
                                           onChange={this.props.actions.setQtCdShortNameEn}/>
                                <TextField label={'Имя представителя'} value={this.props.shortNameEn}
                                           onChange={this.props.actions.setQtCdShortNameEn}/>
                                <TextField label={'Отчество представителя'} value={this.props.shortNameEn}
                                           onChange={this.props.actions.setQtCdShortNameEn}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField label={'Основание представителя'} value={this.props.shortNameEn}
                                           onChange={this.props.actions.setQtCdShortNameEn}/>
                                {datePicker('Срок полномочий')}
                                <FormControlLabel control={<Checkbox color={"primary"}
                                                                     onChange={() => {
                                                                     }}
                                                                     checked={false}/>}
                                                  label={'Бессрочно'}/>
                                                  <FormControlLabel control={<Checkbox color={"primary"}
                                                                     onChange={() => {
                                                                     }}
                                                                     checked={false}/>}
                                                  label={'Кредитная организация'}/>
                            </FormControl>
                        </Grid>
                        {select('ОПФ')}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>  <TextField multiline rows={3} label={'Дополнителная информация'} value={this.props.shortNameEn}
                                                        onChange={this.props.actions.setQtCdShortNameEn}/></FormControl>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        name: state.main.qtCommonData.name,
        shortName: state.main.qtCommonData.shortName,
        nameEn: state.main.qtCommonData.nameEn,
        shortNameEn: state.main.qtCommonData.shortNameEn,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommonData));