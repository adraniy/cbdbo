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
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const styles = theme => ({});

const categories = [
    "Банки (код инвестора 1хххх)",
    "Некомерческие организации (код инвестора 2хххх)",
    "Страховые и инвестиционные компании (код инвестора 3хххх)",
    "Государственные органы, государственные и муниципальные предприятия (код инвестора 5хххх)",
    "Прочие инвесторы (код инвестора 6хххх)",
    "Негосударственные пенсионные фонды (код инвестора 9хххх)",
    "Управляющие компании и договоры ДУ (код инвестора 88ххх)",
    "Фонд (код инвестора 86ххх)",
    "Клиент ИДУ с внешним хранением ЦБ (код инвестора 87ххх)",
    "Клиент ИДУ с хранением ЦБ в депозитарии Сбербанка(код инвестора 89ххх)",
    "Собственные счета УК (код инвестора 85ххх)",
];

export class InvestorTab extends React.Component {

    renderCategory() {
        let items = selectItems(categories);
        return <FormControl fullWidth required>
            <InputLabel>Категория инвестора</InputLabel>
            <Select value={this.props.investorTab.category || ""}
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
                    <TextField label="Код инвестора"/>
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
                    <Grid  container>
                    <FormControl fullWidth>
                        <label>Список торговых систем:</label>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{width: '20px'}}>Номер</TableCell>
                                    <TableCell >ID</TableCell>
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
                            <FormControl fullWidth><TextField label="Доп. параметр риска на ВР МБ" /></FormControl>
                        </Grid>
                        <Grid item xs={6} style={{padding: '5px 10px'}}>
                            <FormControl fullWidth><TextField label="Доп. параметр риска на ФР МБ" value={'0 уровень риска'}/></FormControl>
                            <FormControl fullWidth><TextField label="Статус кавлифицированного онвестора" /></FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} >
                    <FormControl fullWidth><TextField label="Риск профиль"/></FormControl>
                    <FormControl fullWidth><TextField label="Рекомендованные продукты" /></FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Менеджер Брокерского подразделения (ПГР)</InputLabel>
                        <Select value={""}></Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Менеджер Розничного блока</InputLabel>
                        <Select value={""}></Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                    <FormControl fullWidth><TextField label="Наименование подразделения" /></FormControl>
                    <FormControl fullWidth><TextField label="Код" /></FormControl>
                    <FormControl fullWidth><TextField label="Наличие служебной информации по договору" /></FormControl>
                    <FormControl fullWidth><TextField multiline label="Служебная информации по договору" /></FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                    <FormControl fullWidth><Button>Выбрать подразделение</Button></FormControl>
                </Grid>
                <Grid item xs={3} style={{padding: '0px 10px'}}>
                        <FormControlLabel
                            control={<Checkbox disabled checked={false}  />}
                            label="По акции банка"/>
                        <Button>Проверить</Button>
                    <FormControlLabel
                        control={<Checkbox disabled checked={false}  />}
                        label="Отправка извещения по EMail"/>
                    <FormControlLabel
                        control={<Checkbox checked={false}  />}
                        label="Получение извещения в офисе"/>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        investorTab: state.main.investorTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InvestorTab));