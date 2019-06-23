import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {select, selectItems} from "../../../../common/utils";


const styles = theme => ({});

export class Depo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            depoPay: undefined
        }
        this.updateDepoPay = (e) => {this.setState({depoPay: e.target.value})}
    }

    render() {
        return <div>
            <Grid container>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label='Прошу открыть депосчет'/>
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label="Ранее открытый депосчет"/>
                </Grid>
                <Grid item xs={4}>
                    <TextField  fullWidth label="По договору"/>
                </Grid>
                <Grid item xs={6}>
                    {select("Оплата депозитарных услуг", this.state.depoPay,this.updateDepoPay,selectItems([
                        'безакцептное списание',
                        'оплата счетов'
                    ]), true)}
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <TextField  fullWidth multiline label="Дополнительные условия"/>
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label='Спецдепозитарий'/>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <TextField  fullWidth  label="Наименование спецдепозитария"/>
                </Grid>
                <Grid item xs={4} >
                    <TextField  fullWidth  label="Депосчет спецдепозитария"/>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: '20px'}}>
                    <TextField  fullWidth  label="по договору"/>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: '20px'}}>
                    <TextField  fullWidth  label="Торговый раздел спецдепозитария"/>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        newInvestorDialogOpen: state.main.newInvestorDialogOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Depo));