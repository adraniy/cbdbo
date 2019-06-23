import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import InvestorTab from "./tabs/investorTab";
import StatementTab from "./tabs/statements/statementTab";
import QuestionnaireTab from "./tabs/questionnaireTab";
import DetailsTab from "./tabs/detailsTab";
import TailingsTab from "./tabs/tailingsTab";
import FatcaTab from "./tabs/fatcaTab";
import DuTab from "./tabs/duTab";
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import InvestorPanel from "../inverstorPanel";

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
});

export class Investor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        }
    }

    render() {
        const classes = this.props.classes;
        return <div>
            <MuiAppBar position="static">
                <Toolbar style={{minHeight: '48px'}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"
                                onClick={() => this.setState({openDrawer: !this.state.openDrawer})}>
                        <MenuIcon/>
                    </IconButton>

                    <Tabs value={this.props.newInvestorTab} onChange={this.props.actions.investorDialogTab}>
                        <Tab label="Инвестор"/>
                        <Tab label="Заявление"/>
                        <Tab label="Анкета"/>
                        <Tab label="Дополнительные реквизиты"/>
                        <Tab label="Остатки"/>
                        <Tab label="FATCA/CRS"/>
                        <Tab label="ДУ"/>
                    </Tabs>
                </Toolbar>
            </MuiAppBar>
            <div style={{padding: '20px'}}>
                {this.props.newInvestorTab === 0 && <InvestorTab/>}
                {this.props.newInvestorTab === 1 && <StatementTab/>}
                {this.props.newInvestorTab === 2 && <QuestionnaireTab/>}
                {this.props.newInvestorTab === 3 && <DetailsTab/>}
                {this.props.newInvestorTab === 4 && <TailingsTab/>}
                {this.props.newInvestorTab === 5 && <FatcaTab/>}
                {this.props.newInvestorTab === 6 && <DuTab/>}
            </div>
            <Drawer anchor="top" open={this.state.openDrawer} onClose={() => this.setState({openDrawer: false})}>
                <InvestorPanel/>
            </Drawer>
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