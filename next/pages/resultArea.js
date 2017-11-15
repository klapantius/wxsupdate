import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';

const ResultArea = (props) => (
    <div>
        <RaisedButton
            label="Start"
            primary={true}
            disabled={props.disabled}
            onClick={props.startQuery}
        />
        <LinearProgress style={{ visibility: props.progressIndicator }} mode="indeterminate" />
        <List>
            {props.result.map((row, index) => (
                <ListItem>{row}</ListItem>
            ))}
        </List>
    </div>
)

export default ResultArea;