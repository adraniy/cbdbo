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
                        <TextField required label={'ИНН'} value={this.props.inn}
                                   onChange={this.props.actions.setQtCdInn}/>
                        <TextField required label={'КПП'} value={this.props.kpp}
                                   onChange={this.props.actions.setQtCdKpp}/>
                        <TextField label={'БИК'} value={this.props.bik}
                                   onChange={this.props.actions.setQtCdBik}/>
                        <TextField label={'ОКПО'} value={this.props.okpo}
                                   onChange={this.props.actions.setQtCdOkpo}/>
                    </FormControl>
                    <FormControl style={{paddingLeft: '20px'}}>
                        <TextField label={'ОКАТО'} value={this.props.okato}
                                   onChange={this.props.actions.setQtCdOkato}/>
                        <TextField required label={'ОГРН'} value={this.props.ogrn}
                                   onChange={this.props.actions.setQtCdOgrn}/>
                        <TextField required label={'ОКВЕД'} value={this.props.okved}
                                   onChange={this.props.actions.setQtCdOkved}/>
                        {select('Юристикция')}
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <FormControlLabel control={<Checkbox color={"primary"} checked={this.props.creditInstitution}
                                                                     onChange={this.props.actions.setQtCdCreditInstitution}/>}
                                                  label={'Кредитная организация'}/>
                            </FormControl>
                        </Grid>
                        {select('ОПФ')}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth> <TextField multiline rows={3} label={'Дополнителная информация'}
                                                       value={this.props.additional}
                                                       onChange={this.props.actions.setQtCdAdditional}/></FormControl>
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
        inn: state.main.qtCommonData.inn,
        kpp: state.main.qtCommonData.kpp,
        bik: state.main.qtCommonData.bik,
        okpo: state.main.qtCommonData.okpo,
        okato: state.main.qtCommonData.okato,
        ogrn: state.main.qtCommonData.ogrn,
        okved: state.main.qtCommonData.okved,


        creditInstitution: state.main.qtCommonData.creditInstitution,
        unlimited: state.main.qtCommonData.unlimited,
        additional: state.main.qtCommonData.additional
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommonData));