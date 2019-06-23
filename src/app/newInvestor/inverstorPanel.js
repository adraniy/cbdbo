import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add"
import Save from "@material-ui/icons/Save"
import Refresh from "@material-ui/icons/Refresh"
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Error from "@material-ui/icons/Error";
import LocalPostOffice from "@material-ui/icons/LocalPostOffice";
import Print from "@material-ui/icons/Print";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";

import FormControl from "@material-ui/core/FormControl";
import {doNothing} from "../common/utils";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";


const styles = theme => ({});

export class InvestorPanel extends React.Component {

    render() {
        return <div style={{marginLeft: '-20px'}}>
            <div>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><AddIcon/> Создать экземпляр</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button variant={"text"} onClick={doNothing()}><Save/>Сохранить</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Refresh/>Обновить</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Edit/>Редактировать</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Close/>Удалить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Error/>На контроль</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Error/>На контроль ЦА</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><LocalPostOffice/>Вернуть исполнителю</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><LocalPostOffice/>Отправить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Print/>Печать пакета</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button disabled onClick={doNothing}> <Print/> Печать <ArrowDropDownIcon/></Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><FormatListBulleted/>Сканированные документы</Button>
                </FormControl>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InvestorPanel));