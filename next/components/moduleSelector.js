import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ModuleSelector extends Component {
    render() {
        return (
            <SelectField
                value={this.props.value}
                onChange={this.props.handleChange}
                maxHeight={200}
                floatingLabelText="Module"
            >
                {this.props.modules.map((name, idx) => (
                    <MenuItem key={idx} value={idx} primaryText={name} />
                ))}
            </SelectField>
        );
    }
}
