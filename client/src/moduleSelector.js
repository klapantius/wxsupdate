import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Configuration from './Configuration';

export default class ModuleSelector extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
    }

    render() {
        return (
            // <SelectField
            //     floatingLabelText="Ready?"
            //     value={this.state.value}
            //     onChange={this.handleChange}
            // >
            //     <MenuItem value={null} primaryText="" />
            //     <MenuItem value={false} primaryText="No" />
            //     <MenuItem value={true} primaryText="Yes" />
            // </SelectField>

            <SelectField
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
                floatingLabelText="Module"
            >
                <MenuItem value={1} primaryText="Foundations" />
                <MenuItem value={2} primaryText="Core" />
                <MenuItem value={3} primaryText="CIP" />
                <MenuItem value={4} primaryText="ITF" />
            </SelectField>
        );
    }
}
