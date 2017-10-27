import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const ResultArea = (props) => (
    <Card>
        <CardActions>
            <RaisedButton
                label="Start"
                primary={true}
                disabled={props.disabled}
                onClick={props.startQuery}
            />
        </CardActions>
        {<CardText>
            {props.result}
        </CardText>}
    </Card>
)

export default ResultArea;