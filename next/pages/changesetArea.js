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
                <TableHeaderColumn style={{width: '10%'}}>ID</TableHeaderColumn>
                <TableHeaderColumn>Submitter</TableHeaderColumn>
                <TableHeaderColumn style={{width: '10%'}}>Date</TableHeaderColumn>
                <TableHeaderColumn style={{width: '60%'}}>Comment</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
            deselectOnClickaway={false}
            showRowHover={true}
        >
            {props.changesets.map((row, index) => (
                <TableRow key={index} selected={props.selectedRows.indexOf(index) !== -1}>
                    <TableRowColumn style={{width: '10%'}}>{row.id}</TableRowColumn>
                    <TableRowColumn>{row.submitter}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>{row.date}</TableRowColumn>
                    <TableRowColumn style={{width: '60%'}}>{row.comment}</TableRowColumn>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default ChangesetArea;