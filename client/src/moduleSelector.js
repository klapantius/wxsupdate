import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ModuleSelector extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 1,
    //     };
    //     this.handleClick = this.handleClick(this);
    // }

    // handleClick(event, index, newValue) {
    //     this.setState({ newValue });
    // }

    render() {
        return (
            <SelectField
                value={this.props.value}
                onChange={this.props.handleChange}
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
