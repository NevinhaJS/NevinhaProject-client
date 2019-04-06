import React, {Component, Fragment} from 'react';
import {FormTitle, FormHeader, FormContainer, Field} from './style';
import {NevinhaSwitch, NevinhaInput, NevinhaSelect} from '../../../shared-components/Form';
import {Text} from '../../../shared-components/Typograph';
import ColorPicker from '../../../shared-components/ColorPicker';

const layoutOptions = [
    {
        label: 'Tab Bar',
        value: 'tab'
    },
    {
        label: 'Stacked Bar',
        value: 'stacked'
    }
]

class ScreenSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layout: ""
        }
    }

    _handleLayoutChange = ({target: {value: layout}}) => this.setState({
        layout
    })

    _handleMenuColorChange() {

    }

    renderStackedForm() {
        return (
            <Field style={{marginTop: '2rem'}}>
                <NevinhaInput label="Stacked header text" />
            </Field> 
        )
    }

    renderTabForm() {
        return (
            <FormContainer>
                <Field column width="100%">
                    <NevinhaSwitch
                        checked={false}
                        value={true}
                        color="primary"
                        label="Show tab item label"
                    />
                </Field>

                <Field width="50%">
                    <Text>Tab background color</Text>
                    <ColorPicker 
                        color={'#fff'}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </Field>

                <Field width="50%">
                    <Text>Active tab item color</Text>
                    <ColorPicker 
                        color={'#fff'}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </Field>

                <Field width="50%">
                    <Text>Inactive tab item color</Text>
                    <ColorPicker 
                        color={'#fff'}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </Field>
            </FormContainer>
        )
    }

    renderFormOptions() {
        const {layout} = this.state;

        return (
            <FormContainer>
                <Field width="100%">
                    <NevinhaSelect
                        label="Layout"
                        onChange={this._handleLayoutChange} 
                        items={layoutOptions}
                        name="layout"
                        value={layout}
                    />
                </Field>
                <Field column width="100%">
                    <NevinhaSwitch
                        checked={false}
                        value={true}
                        color="primary"
                        label="Show main menu on the topbar"
                    />
                </Field>
                <Field width="30%">
                    <Text>Text color</Text>

                    <ColorPicker 
                        color={'#fff'}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </Field>
                <Field width="70%">
                    <Text>Header background color</Text>

                    <ColorPicker 
                        color={'#fff'}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </Field>
            </FormContainer>
        )
    }

    render() {
        const {layout} = this.state;

        return (
            <Fragment>
                <FormHeader>
                    <FormTitle>Screen Settings</FormTitle>
                </FormHeader>

                {this.renderFormOptions()}

                {layout === 'tab' && this.renderTabForm()}

                {layout === 'stacked' && this.renderStackedForm()}

            </Fragment>
        )
    }
}

export default ScreenSettings;