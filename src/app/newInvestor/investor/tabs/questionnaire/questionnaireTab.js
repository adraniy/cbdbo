import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import {withStyles} from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid/index";
import {datePicker, select, text} from "../../../../common/utils";
import Tabs from "@material-ui/core/Tabs/index";
import Tab from "@material-ui/core/Tab/index";
import CommonData from "./commonData";
import RegistrationData from "./registrationData";
import Address from "./address";
import PostAddress from "./postAddress";
import Accounts from "./accounts";
import Connections from "./connections";
import ClientInfo from "./clientInfo";

const styles = theme => ({});

export class QuestionnaireTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={3}>
                    {datePicker('Дата заявления', this.props.date, this.props.actions.setQtDate)}
                </Grid>
                <Grid item xs={3} style={{paddingLeft: '20px'}}>
                    {select('Экземпляр анкеты', null, null, null, null, true)}
                </Grid>
                <Grid item xs={3} style={{paddingLeft: '20px'}}>
                    {datePicker('От', this.props.instanceDate, this.props.actions.setQtInstanceDate)}
                </Grid>
                <Grid item xs={3} style={{paddingLeft: '20px'}}>
                    {text('Полный код анкеты', this.props.code, this.props.actions.setQtCode)}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{margin: '10px 0px'}}>
                    <Tabs value={this.props.questionnaireInnerTab} onChange={this.props.actions.qtInnerTab}>
                        <Tab label="Общие сведения"/>
                        <Tab label="Регистрационные данные"/>
                        <Tab label="Адрес местонахождения"/>
                        <Tab label="Почтовый адрес"/>
                        <Tab label="Счета"/>
                        <Tab label="Виды связи"/>
                        <Tab label="Информационные сведения о клиенте"/>
                    </Tabs>
                    <hr style={{margin: '0'}}/>
                    <div style={{marginTop: '10px'}}>
                        {this.props.questionnaireInnerTab === 0 && <CommonData/>}
                        {this.props.questionnaireInnerTab === 1 && <RegistrationData/>}
                        {this.props.questionnaireInnerTab === 2 && <Address/>}
                        {this.props.questionnaireInnerTab === 3 && <PostAddress/>}
                        {this.props.questionnaireInnerTab === 4 && <Accounts/>}
                        {this.props.questionnaireInnerTab === 5 && <Connections/>}
                        {this.props.questionnaireInnerTab === 6 && <ClientInfo/>}
                    </div>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        date: state.main.questionnaireTab.date,
        code: state.main.questionnaireTab.code,
        instanceDate: state.main.questionnaireTab.instanceDate,
        questionnaireInnerTab: state.main.questionnaireInnerTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuestionnaireTab));