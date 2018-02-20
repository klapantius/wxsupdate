import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const WxsUpdateResultArea = (props) => (
    <div>
        <RaisedButton
            label="Start"
            primary={true}
            disabled={props.disabled}
            onClick={props.startQuery}
        />
        <LinearProgress style={{ visibility: props.progressIndicator }} mode="indeterminate" />
        <Card>
        {props.result.map((row, index) => (
                <CardText style={{padding: '1px' }}>{row}</CardText>
            ))}
        </Card>
    </div>
)

export default WxsUpdateResultArea;