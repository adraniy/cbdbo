import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Duo} from "@material-ui/icons";
import {select, text} from "../../../common/utils";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";


const styles = theme => ({});


export class DuTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl  fullWidth >
                    {select('Тип актива')}
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: "20px"}}>
                    <FormControl  fullWidth >
                        {text('ИНН фонда')}
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl  fullWidth>
                    {text('Данные об инвестиционном портфеле')}
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: "20px"}}>
                    <FormControl  fullWidth >
                    {text('Номер правил ПИФ')}
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{paddingLeft: "20px"}}>
                    <FormControl fullWidth>
                        <FormControlLabel
                            control={<Checkbox color={"primary"}  checked={false}/>}
                            label={'Признак группы'}/> </FormControl>
                </Grid>
                <Typography style={{marginTop:'20px'}} variant="h6">Учредители/Выгодопреобретатели</Typography>
                <Grid item xs={12} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >Тип лица</TableCell>
                                <TableCell >ФИО/Наименование</TableCell>
                                <TableCell >Тип Д.У.П.</TableCell>
                                <TableCell >Серия Д.У.П.</TableCell>
                                <TableCell >Номер</TableCell>
                                <TableCell >ИНН</TableCell>
                                <TableCell >ОГРН</TableCell>
                                <TableCell >ОГРН(дата)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <IconButton > <Add /></IconButton>
                    <IconButton > <Remove /></IconButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DuTab));