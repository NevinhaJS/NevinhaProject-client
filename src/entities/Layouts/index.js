import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import {FormControlLabel, Switch, Button} from '@material-ui/core/';

import UserPreview from '../../components/UserPreview';
import {EntityWrapper, Form} from '../../components/Wrapper/style';
import {Title, DecoratedText} from '../../components/Typograph';
import {Row} from '../../components/Layout';
import OptionsForm from '../../components/OptionsForm';
import {LayoutBox, TabRow, TabIconColumn} from './style';
import LayoutOptions from './LayoutOptions';
import Request from '../../utils/Request';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layout: 'tab',
            rightScreen: false,
            navigation: true
        }
    }

    componentWillMount() {
        const {
            activeLayout: {
                layout,
                rightScreen,
                companyImage,
                navigation
            }
        } = this.props;

        this.setState({
            currentLayout: layout,
            layout,
            rightScreen,
            companyImage,
            navigation
        });
    }

    changeLayout = nextLayout => () => {
        const {layout} = this.state

        if(layout === nextLayout) return;

        this.setState({
            layout: nextLayout
        });
    }

    changeSettings = key => (e, value) =>  this.setState(
        {
            [key]: value
        }
    );

    handleSaveForm = () => {
        const {
            layout,
            rightScreen,
            navigation
        } = this.state;

        Request.update('screens/5c859e4ab71d9409b25d426f', {
            layout,
            rightScreen,
            navigation
        }).then(resp => console.log('pegou', resp));
    }
    
    renderOptionsForm() {
        const {
            navigation,
            rightScreen,
            companyImage
        } = this.state;

        return (
            <Fragment>
                <OptionsForm optionsTitle="Show main menu on the topbar">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={navigation}
                                onChange={this.changeSettings('navigation')}
                                value={true}
                                color="primary"
                            />
                        }
                    />
                </OptionsForm>

                <OptionsForm optionsTitle="Show company image on the topbar">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={companyImage}
                                onChange={this.changeSettings('companyImage')}
                                value={true}
                                color="primary"
                                disabled
                            />
                        }
                    />
                </OptionsForm>

                <OptionsForm bordered optionsTitle="Show the right screen menu icon on the topbar">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={rightScreen}
                                onChange={this.changeSettings('rightScreen')}
                                value={true}
                                color="primary"
                            />
                        }
                    />
                </OptionsForm>
            </Fragment>
        )
    }

    renderLayoutOptions() {
        const {
            layout,
            navigation,
            rightScreen,
            companyImage
        } = this.state;

        return (
            <Row bordered>
                <LayoutOptions
                    value='tab'
                    layout={layout}
                    rightScreen={rightScreen}
                    navigation={navigation}
                    clickFn={this.changeLayout('tab')}
                    label="Tab Navigation"
                    drawer={false}
                >
                   <TabRow selected={layout === 'tab'}>
                    <TabIconColumn />
                    <TabIconColumn />
                    <TabIconColumn />
                   </TabRow>
            
                </LayoutOptions>

                <LayoutOptions
                    value='drawer'
                    layout={layout}
                    rightScreen={rightScreen}
                    clickFn={this.changeLayout('drawer')}
                    label="Drawer Screen"
                    drawer
                />

                <LayoutOptions
                    value='stacked'
                    layout={layout}
                    rightScreen={rightScreen}
                    navigation={navigation}
                    clickFn={this.changeLayout('stacked')}
                    label="Stacked Screen"
                    drawer={false}
                />
            </Row>
        )
    }

    render() {
        const {props, state: {currentLayout}} = this;

        return (
            <Form fullWidth>
                <EntityWrapper>
                    <LayoutBox info rounded>
                        This section is currently on improvement process. We will be making new features available soon.
                    </LayoutBox>

                    <header>
                        <Title>Current layout - <DecoratedText>{currentLayout}</DecoratedText></Title>
                    </header>

                    {this.renderLayoutOptions()}

                    {this.renderOptionsForm()}

                    <Row>
                        <Button onClick={this.handleSaveForm} color="primary" variant="contained">Save changes</Button>
                    </Row>
                </EntityWrapper>

                <UserPreview {...props} />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        // activeLayout: state.activeLayout
        activeLayout: {
            layout: 'tab',
            rightScreen: false,
            navigation: true
        }
    }
}

export default connect(mapStateToProps)(LayoutComponent);