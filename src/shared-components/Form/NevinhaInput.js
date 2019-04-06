import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {NevinhaFormControl, NevinhaOutlinedInput, NevinhaLabel} from './style';

export default class NevinhaInput extends Component {
    render(){
        const {
            onChange, 
            label, 
            value
        } = this.props;

        return (
            <NevinhaFormControl variant="outlined">
                <NevinhaLabel
                    ref={ref => {
                        this.labelRef = ReactDOM.findDOMNode(ref);
                    }}
                >
                    {label}
                </NevinhaLabel>

                <NevinhaOutlinedInput 
                    value={value}
                    onChange={onChange} 
                    labelWidth={this.labelRef ? this.labelRef.offsetWidth : (label.length * 8)}
                />
            </NevinhaFormControl>
        )
    }
}