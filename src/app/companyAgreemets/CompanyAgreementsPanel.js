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
import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import Close from "@material-ui/icons/Close";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Edit from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";


export default class CompanyAgreementsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            showAll: false
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
        return <div>
            <div>
                <FormControl disabled margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Select
                        value={"Юридическое лицо"}
                        onChange={() => {
                        }}>
                        <MenuItem disabled value={"Юридическое лицо"}>Юридическое лицо</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Select
                        value={"Мой фильтр"}
                        onChange={() => {
                        }}>
                        <MenuItem value={"Мой фильтр"}>Мой фильтр</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><AddIcon style={{color: 'green'}}/> Новый инвестор</Button>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><ViewAgenda/> Просмотреть</Button>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><Refresh/> Обновить</Button>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Button variant={"text"}><Filter/> Фильтровать</Button>
                </FormControl>
                <FormControl margin={"normal"} style={{paddingLeft: "10px"}}>
                    <Button onClick={this.handleClick}> <Close
                        style={{color: 'red'}}/> Закрыть <ArrowDropDownIcon/></Button>
                </FormControl>
                {!this.state.showAll ? <FormControl  style={{paddingLeft: "10px"}}>
                <IconButton style={{marginTop: '10px'}} onClick={() => this.setState({showAll: true})}><UnfoldMore/></IconButton>
                </FormControl> : null}
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
            {this.state.showAll ? <div>
                    <div>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <FormatListBulleted/> Распорядители </Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <FormatListBulleted/> Изменения </Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <FormatListBulleted/> Доверенные лица </Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <FormatListBulleted/>Степень риска </Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <FormatListBulleted/>Служебные отметки</Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <Edit/>Карточки и заявки по телефону <ArrowDropDownIcon/> </Button>
                        </FormControl>
                        <FormControl style={{paddingLeft: "10px"}}>
                            <Button> <Edit/>Подключение услуг/сервисов<ArrowDropDownIcon/></Button>
                        </FormControl>
                    </div>
                    <div>
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
                        <IconButton style={{marginTop: '10px'}} onClick={() => this.setState({showAll: false})}><UnfoldLess/></IconButton>
                    </div>

                </div>
                : null}
        </div>
    }
}