import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import ModuleSelector from '../components/moduleSelector';

const styles = {
    block: {
        display: 'flex',
    },
    toggle: {
        marginTop: 36,
    },
};

export default class WxsToolbar extends Component {
    render() {
        return (
            <div style={styles.block}>
                <ModuleSelector {...this.props} />
                <Toggle
                    label="hide pushes and uploads"
                    labelPosition="right"
                    style={styles.toggle}
                    onToggle={this.props.handleToggleHideAutos}
                />
            </div>
        );
    }
}
