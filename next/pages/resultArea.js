import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const ResultArea = (props) => (
    <div>
        <RaisedButton
            label="Start"
            primary={true}
            disabled={props.disabled}
            onClick={props.startQuery}
        />
        {<ul>
            {props.result.map((row, index) => (
                <li>{row}</li>
            ))}
        </ul>}
    </div>
)

export default ResultArea;