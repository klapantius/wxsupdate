import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const ChangesetArea = (props) => (
    <Table multiSelectable = {true} >
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Submitter</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Comment</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {props.changesets.map((row, index) => (
                <TableRow key={index}>
                    <TableRowColumn>{row.id}</TableRowColumn>
                    <TableRowColumn>{row.submitter}</TableRowColumn>
                    <TableRowColumn>{row.date}</TableRowColumn>
                    <TableRowColumn>{row.comment}</TableRowColumn>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default ChangesetArea;