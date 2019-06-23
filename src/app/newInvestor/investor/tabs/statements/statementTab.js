import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import {withStyles} from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid/index";
import FormControl from "@material-ui/core/FormControl/index";
import TextField from "@material-ui/core/TextField/index";
import {datePicker, select, text} from "../../../../common/utils";
import Tabs from "@material-ui/core/Tabs/index";
import Tab from "@material-ui/core/Tab/index";
import Paper from "@material-ui/core/Paper/index";
import Sites from "./sites";
import Depo from "./depo";


const styles = theme => ({});


export class StatementTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            selectedDate1: new Date()
        };
        this.handleDateChange = (selectedDate) => this.setState({selectedDate});
        this.handleDateChange1 = (selectedDate1) => this.setState({selectedDate1});
    }

    render() {
        return <div>
            <Grid container>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <TextField label="Ранее поданная анкета"/>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField disabled label="Полный код заявления"/>
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: '20px'}}>
                    {datePicker("Дата заявления", this.state.selectedDate, this.handleDateChange)}
                    <Grid container>
                        <Grid item xs={6}>
                            {select("Экземпляр заявления")}
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: '20px'}}>
                            {datePicker("От", this.state.selectedDate1, this.handleDateChange1)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: '20px'}}>
                    <Grid container>
                        <Grid item xs={12}>
                            {text("На контроле")}
                            <FormControl style={{paddingLeft: '20px'}}>
                                {datePicker(" ", null)}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            {text("На контроле ЦА")}
                            <FormControl style={{paddingLeft: '20px'}}>
                                {datePicker(" ", null)}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            {text("Отправлено")}
                            <FormControl style={{paddingLeft: '20px'}}>
                                {datePicker(" ", null)}
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        {text("Изменение Банком")}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl style={{paddingLeft: '20px'}}>
                        {datePicker(" ", null)}
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Tabs value={this.props.statementInnerTab} onChange={this.props.actions.statementInnerTab}>
                        <Tab label="Площадки"/>
                        <Tab label="Депо"/>
                    </Tabs>
                        {this.props.statementInnerTab === 0 && <Sites/>}
                        {this.props.statementInnerTab === 1 && <Depo/>}
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        statementInnerTab: state.main.statementInnerTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StatementTab));