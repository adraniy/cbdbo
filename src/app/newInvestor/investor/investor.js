import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import InvestorTab from "./tabs/investorTab";
import StatementTab from "./tabs/statementTab";


const styles = theme => ({});

export class Investor extends React.Component {

    render() {
        return <div>
            <Tabs value={this.props.newInvestorTab} onChange={this.props.actions.investorDialogTab}>
                <Tab label="Инвестор"/>
                <Tab label="Заявление"/>
                <Tab label="Анкета"/>
                <Tab label="Дополнительные реквизиты"/>
                <Tab label="Остатки"/>
                <Tab label="FATCA/CRS"/>
                <Tab label="ДУ"/>
            </Tabs>
            {this.props.newInvestorTab === 0 && <InvestorTab />}
            {this.props.newInvestorTab === 1 && <StatementTab />}
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        newInvestorTab: state.main.newInvestorTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Investor));