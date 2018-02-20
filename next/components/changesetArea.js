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
                <TableHeaderColumn style={{padding: '1px',  width: '8%' }}>ID</TableHeaderColumn>
                <TableHeaderColumn style={{padding: '1px'}}>Submitter</TableHeaderColumn>
                <TableHeaderColumn style={{padding: '1px',  width: '15%' }}>Date</TableHeaderColumn>
                <TableHeaderColumn style={{padding: '1px',  width: '55%' }}>Comment</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
            deselectOnClickaway={false}
            showRowHover={true}
        >
            {props.changesets.map((row, index) => (
                <TableRow key={index} selected={props.selectedRows.indexOf(index) !== -1}>
                    <TableRowColumn style={{padding: '1px', width: '8%'}}>{row.id}</TableRowColumn>
                    <TableRowColumn style={{padding: '1px'}}>{row.submitter}</TableRowColumn>
                    <TableRowColumn style={{padding: '1px', width: '15%'}}>{row.date}</TableRowColumn>
                    <TableRowColumn style={{padding: '1px', width: '55%'}}>{row.comment}</TableRowColumn>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default ChangesetArea;