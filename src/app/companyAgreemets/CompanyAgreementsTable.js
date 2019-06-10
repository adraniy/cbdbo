import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export default class CompanyAgreementsTable extends React.Component{
    render() {
        return <div>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Номер</TableCell>
                        <TableCell align="right">Код инвестора</TableCell>
                        <TableCell align="right">Дата договора</TableCell>
                        <TableCell align="right">Наименвание</TableCell>
                        <TableCell align="right">Служебная информация</TableCell>
                        <TableCell align="right">Статус документа</TableCell>
                        <TableCell align="right">Канал привлечения / сеть продаж</TableCell>
                        <TableCell align="right">Менеджер ПГР</TableCell>
                        <TableCell align="right">Менеджер РБ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </div>
    }
}