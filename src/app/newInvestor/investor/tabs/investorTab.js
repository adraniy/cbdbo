import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {selectItems} from "../../../common/utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ContactSupport from "@material-ui/icons/ContactSupport";
import IconButton from "@material-ui/core/IconButton";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const styles = theme => ({});

const managers = [
    "Иванов Иван Иванович",
    "Петров Иван Иванович",
    "Сидоров Иван Иванович",
];

const categories = [
    {name: "Банки (код инвестора 1хххх)", code: "1111A"},
    {name: "Некомерческие организации (код инвестора 2хххх)", code: "2222A"},
    {name: "Страховые и инвестиционные компании (код инвестора 3хххх)", code: "3333A"},
    {name: "Государственные органы, государственные и муниципальные предприятия (код инвестора 5хххх)", code: "5555A"},
    {name: "Прочие инвесторы (код инвестора 6хххх)", code: "6666A"},
    {name: "Негосударственные пенсионные фонды (код инвестора 9хххх)", code: "9999A"},
    {name: "Управляющие компании и договоры ДУ (код инвестора 88ххх)", code: "8888A"},
    {name: "Фонд (код инвестора 86ххх)", code: "8666A"},
    {name: "Клиент ИДУ с внешним хранением ЦБ (код инвестора 87ххх)", code: "8777A"},
    {name: "Клиент ИДУ с хранением ЦБ в депозитарии Сбербанка(код инвестора 89ххх)", code: "8999A"},
    {name: "Собственные счета УК (код инвестора 85ххх)", code: "8555A"}
];

export class InvestorTab extends React.Component {

    renderCategory() {
        let items = selectItems(categories, 'name');
        return <FormControl fullWidth required className={'path'}>
            <InputLabel>Категория инвестора</InputLabel>
            <Select value={this.props.category || ""}
                    onChange={this.props.actions.changeCategory}>
                {items}
            </Select>
        </FormControl>
    }

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}>                   {this.renderCategory()}</Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <FormControl required style={{paddingLeft: "10px", flexDirection: 'row'}}>
                        <TextField className={'path'} label="Код инвестора" value={this.props.code}/>
                        <Button color="primary"> Получить код</Button>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl>
                        <TextField label="Степень риска"/>
                        <TextField label="Дата установки риска"/>
                        <TextField multiline label="Обоснование"/>
                        <TextField label="Должность"/>
                        <TextField label="ФИО оператора"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Статус документа"/>
                    <TextField label="Статус отправки"/>
                    <div>
                        <FormControl style={{flexDirection: 'row', alignItems: 'center'}}>
                            <label>Последние ошибки отправки</label>
                            <IconButton> <ContactSupport/> </IconButton>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={6} style={{padding: '0px 42px'}}>
                    <Grid container>
                        <FormControl fullWidth>
                            <label>Список торговых систем:</label>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{width: '20px'}}>Номер</TableCell>
                                        <TableCell>ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell></TableCell><TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </FormControl>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} style={{padding: '5px 10px'}}>
                            <FormControl fullWidth><TextField label="Категория инвестора" value={'КОУР'}/></FormControl>
                            <FormControl fullWidth><TextField label="Доп. параметр риска на ВР МБ"/></FormControl>
                        </Grid>
                        <Grid item xs={6} style={{padding: '5px 10px'}}>
                            <FormControl fullWidth><TextField label="Доп. параметр риска на ФР МБ"
                                                              value={'0 уровень риска'}/></FormControl>
                            <FormControl fullWidth><TextField
                                label="Статус кавлифицированного онвестора"/></FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth><TextField label="Риск профиль"/></FormControl>
                    <FormControl fullWidth><TextField label="Рекомендованные продукты"/></FormControl>
                    <FormControl fullWidth className={'path'}>
                        <InputLabel>Менеджер Брокерского подразделения (ПГР)</InputLabel>
                        <Select value={this.props.managerPGR}
                                onChange={this.props.actions.managerPGR}>{selectItems(managers)}</Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Менеджер Розничного блока</InputLabel>
                        <Select value={""}></Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                    <FormControl className={'path'} fullWidth>
                        <InputLabel>Наименование подразделения</InputLabel>
                        <Select value={this.props.dep}
                            onChange={this.props.actions.dep}>{selectItems(['Юго-Западный Банк ПАО Сбербанк'])}</Select>
                    </FormControl>
                    <FormControl className={'path'} fullWidth><TextField label="Код"
                                                                         value={this.props.depCode}/></FormControl>
                    <FormControl fullWidth><TextField label="Наличие служебной информации по договору"/></FormControl>
                    <FormControl fullWidth><TextField multiline label="Служебная информации по договору"/></FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                    <FormControl fullWidth><Button>Выбрать подразделение</Button></FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                    <FormControlLabel
                        control={<Checkbox disabled checked={false}/>}
                        label="По акции банка"/>
                    <Button color={"primary"}>Проверить</Button>
                    <FormControlLabel
                        control={<Checkbox disabled checked={false}/>}
                        label="Отправка извещения по EMail"/>
                    <FormControlLabel
                        control={<Checkbox checked={false}/>}
                        label="Получение извещения в офисе"/>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        investorTab: state.main.investorTab,
        category: state.main.investorTab.category,
        code: state.main.investorTab.code,
        managerPGR: state.main.investorTab.managerPGR,
        depCode: state.main.investorTab.depCode,
        dep: state.main.investorTab.dep,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InvestorTab));