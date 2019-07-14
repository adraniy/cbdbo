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
import createReport from 'docx-templates';
import axios from 'axios'
import moment from "moment"
import {readFile1} from "../../index";
//import * as questionnaire from "../../doc/questionnaire.docx"
const styles = theme => ({});

const downloadURL = (data, fileName) => {
    const a = document.createElement('a');
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
};

const saveDataToFile = (data, fileName, mimeType) => {
    const blob = new Blob([data], {type: mimeType});
    const url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName, mimeType);
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
    }, 1000);
};

const readFileIntoArrayBuffer = fd =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsArrayBuffer(fd);
    });

export class InvestorPanel extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.print = () => {
            axios.get('questionnaire.docx', {
                responseType: 'blob',
                timeout: 30000,
            }).then((f) => {
                readFileIntoArrayBuffer(f.data).then((template) => {
                    const report = createReport({
                        template,
                        data: {
                            pName: this.props.pName,
                            psName: this.props.psName,
                            pfName: this.props.pfName,
                            dateOfBirth: this.props.dateOfBirth ? this.props.dateOfBirth.format("YYYY-MM-DD") : "",
                            placeOfBirth: this.props.placeOfBirth,
                            sex: this.props.sex,

                            position: this.props.position,
                            bases: this.props.bases,
                            period: this.props.period,

                            docType: this.props.docType,
                            series: this.props.series,
                            number: this.props.number,
                            code: this.props.code,
                            dateOfIssue: this.props.dateOfIssue ? this.props.dateOfIssue.format("YYYY-MM-DD") : "",
                            validUntil: this.props.validUntil ? this.props.validUntil.format("YYYY-MM-DD") : "" ,
                            byWhom: this.props.byWhom,
                            citizenship: this.props.citizenship,
                            isRussianTaxResident: this.props.isRussianTaxResident,

                            country: this.props.country,
                            index: this.props.index,
                            useIndex: this.props.useIndex,
                            region: this.props.region,
                            area: this.props.area,
                            city: this.props.city,
                            humanSettlement: this.props.humanSettlement,
                            street: this.props.street,
                            house: this.props.house,
                            housing: this.props.housing,
                            apartment: this.props.apartment
                        },
                    }).then((r) => {
                        saveDataToFile(
                            r,
                            'report.docx',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                        );
                    });
                })
            })


        }
    }

    render() {
        return <div>
            <div>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><AddIcon/> Создать экземпляр</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button variant={"text"} onClick={doNothing()}><Save/>Сохранить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Refresh/>Обновить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Edit/>Редактировать</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Close/>Удалить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Error/>На контроль</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Error/>На контроль ЦА</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><LocalPostOffice/>Вернуть
                        исполнителю</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><LocalPostOffice/>Отправить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button disabled variant={"text"} onClick={doNothing()}><Print/>Печать пакета</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button onClick={this.print}> <Print/> Печать <ArrowDropDownIcon/></Button>
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
        newInvestorDialogOpen: state.main.newInvestorDialogOpen,
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InvestorPanel));