import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add"
import ViewAgenda from "@material-ui/icons/ViewAgenda"
import Refresh from "@material-ui/icons/Refresh"
import Filter from "@material-ui/icons/FilterList"
import Popover from "@material-ui/core/Popover";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import Close from "@material-ui/icons/Close";


export class CompanyAgreementsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            showAll: false,
        };
        this.handleClick = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.setState({
                anchorEl: event.currentTarget
            });
        };
        this.handleClose = () => this.setState({anchorEl: null});

    }

    render() {
        const open = Boolean(this.state.anchorEl);
        return <div style={{paddingTop: '10px'}}>
                <FormControl disabled  style={{paddingLeft: "10px"}}>
                    <Select
                        value={"Юридическое лицо"}
                        onChange={() => {
                        }}>
                        <MenuItem disabled value={"Юридическое лицо"}>Юридическое лицо</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Select
                        value={"Мой фильтр"}
                        onChange={() => {
                        }}>
                        <MenuItem value={"Мой фильтр"}>Мой фильтр</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button variant={"text"} onClick={this.props.actions.toggleInvestorDialog}><AddIcon
                        color={"primary"} /> Новый инвестор</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><ViewAgenda/> Просмотреть</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><Refresh/> Обновить</Button>
                </FormControl>
                <FormControl style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><Filter/> Фильтровать</Button>
                </FormControl>
                <FormControl  style={{paddingLeft: "10px"}}>
                    <Button onClick={this.handleClick}> <Close
                        style={{color: 'red'}}/> Закрыть <ArrowDropDownIcon/></Button>
                </FormControl>
            <FormControl style={{paddingLeft: "10px"}}>
                <TextField label="Код инвестора"/>
            </FormControl>
            <FormControl style={{paddingLeft: "10px"}}>
                <TextField label="Наименование"/>
            </FormControl>
            <FormControl style={{paddingLeft: "10px"}}>
                <TextField label="E-Mail"/>
            </FormControl>
            <FormControl style={{paddingLeft: "10px"}}>
                <TextField label="Счет на FORTS"/>
            </FormControl>
                <Popover
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    <MenuItem disabled onClick={() => {
                    }}>
                        Инициатива банка
                    </MenuItem>
                    <MenuItem onClick={() => {
                    }}>
                        Инициатива клиента
                    </MenuItem>
                </Popover>
            </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CompanyAgreementsPanel);