import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Configuration from './configuration';

export default class ModuleSelector extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
        fetch(Configuration.api_url).then(function (response) {
            // console.log(response);
            return response.blob();
        }).then(function (myBlob) {
            // console.log(myBlob);
        });
    }

    render() {
        return (
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
