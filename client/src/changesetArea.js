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
    <Table
        multiSelectable={true}
        fixedHeader={true}
        height={"400px"}
        onRowSelection={props.handleSelection}
    >
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
                <TableRow key={index} selected={props.selectedRows.indexOf(index) !== -1}>
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