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
        console.log(Configuration.api_url);
        fetch(`${Configuration.api_url}/tf/history`, { 'mode': 'no-cors' })
            .then(function (response) {
                // console.log(response.json());
                var contentType = response.headers.get("Content-Type");
                if (contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                throw new TypeError(`Oops, we haven't got JSON! We have got ${contentType}`);
            })
            .then(function (json) {
                console.log(json);
            })
            .catch(function (error) { console.log(error); });
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
