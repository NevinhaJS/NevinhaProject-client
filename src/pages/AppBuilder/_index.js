import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import {FormControlLabel, Switch, Button, Input} from '@material-ui/core/';

import ColorPicker from '../../components/ColorPicker';
import UserPreview from '../../components/UserPreview';
import {EntityWrapper, Form} from '../../components/Wrapper/style';
import {Title, DecoratedText} from '../../components/Typograph';
import {Row} from '../../components/Layout';
import OptionsForm from '../../components/OptionsForm';
import {LayoutBox, TabRow, TabIconColumn} from './style';
import LayoutOptions from './LayoutOptions';
import ScreenSelection from '../../components/ScreenSelection';
import Request from '../../utils/Request';
import {STATUS_BAR_PROPS, TAB_BAR_PROPS} from '../../utils/constants';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.valueFormFn()
        }
    }
    
    componentWillMount() {
        Request.get('screens').then(screens => {
            this.setState({
                screens
            })
        })
    }

    valueFormFn() {
        return {
            open: true,
            layout: 'tab',
            rightScreen: false,
            navigation: true,
            mainNavigation: {
                color: '#fff',
                backgroundColor: '#0082f3'
            },
            statusBar: STATUS_BAR_PROPS,
            tabBar: TAB_BAR_PROPS
        }
    }

    componentDidUpdate(prevProps) {
        const {
            activeScreen: {
                _id,
                layout,
                rightScreen,
                companyImage,
                navigation,
                settings
            }
        } = this.props;

        if(_id !== prevProps.activeScreen._id) {
            this.setState({
                currentLayout: layout,
                layout,
                rightScreen,
                companyImage,
                navigation,
                ...settings
            });
        }
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

    _handleStatusBarTitleChange = e => this.setState({
        statusBar: {
            ...this.state.statusBar,
            title: e.target.value
        }
    });

    _handleSaveForm = () => {
        const {
            layout,
            rightScreen,
            mainNavigation,
            statusBar,
            navigation,
            tabBar
        } = this.state;
        const {activeScreen: {_id}} = this.props;

        Request.update(`screens/${_id}`, {
            layout,
            navigation,
            rightScreen,
            mainNavigation,
            statusBar,
            tabBar
        }).then(resp => console.log('pegou', resp));
    }

    _handleMenuColorChange = key => ({hex}) => {
        const {mainNavigation, statusBar, layout} = this.state;
        const newState = {
            mainNavigation: {
                ...mainNavigation,
                [key]: hex
            }
        };

        if(layout === 'stacked') {
            newState.statusBar = {
                ...statusBar,
                [key]: hex
            }
        }

        this.setState({
            ...newState
        });
    }

    handleChangeTabOptionsColor = key => ({hex}, value) => this.setState({
        tabBar: {
            ...this.state.tabBar,
            [key]: hex ? hex : value
        }
    });
    
    renderOptionsForm() {
        const {
            layout,
            navigation,
            rightScreen,
            companyImage,
            mainNavigation: {
                textColor,
                backgroundColor
            },
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

                <OptionsForm margin="0 0 10px" optionsTitle="Text color">
                    <ColorPicker 
                        color={textColor}
                        onChangeComplete={this._handleMenuColorChange('textColor')}
                    />
                </OptionsForm>

                <OptionsForm bordered margin="10px 0" optionsTitle="Header background color">
                    <ColorPicker 
                        color={backgroundColor}
                        onChangeComplete={this._handleMenuColorChange('backgroundColor')}
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

                <OptionsForm margin="0 0 1.4rem" bordered optionsTitle="Show the right screen menu icon on the topbar">
                    <FormControlLabel
                        control={
                            <Switch
                                name="show-back-icon"
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


    renderStatusBarOptions() {
        const { 
            statusBar: {
                title
            } 
        } = this.state;
        return (
            <OptionsForm bordered margin="0 0 1.6rem" optionsTitle="Header title (leave empty if you want to hide the text)">
                <Input name="stacked-title" value={title} placeholder="Your header text here" onChange={this._handleStatusBarTitleChange} fullWidth />
            </OptionsForm>
        )
    }

    renderTabOptions() {
        const {
            tabBar: {
                activeTintColor,
                inactiveTintColor,
                showLabel,
                backgroundColor
            }
        } = this.state;

        return (
            <Fragment>
                <OptionsForm optionsTitle="Show tab item label">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={!!showLabel}
                                onChange={this.handleChangeTabOptionsColor('showLabel')}
                                value={true}
                                color="primary"
                            />
                        }
                    />
                </OptionsForm>

                <OptionsForm optionsTitle="Tab background color">
                    <ColorPicker 
                        color={backgroundColor}
                        onChangeComplete={this.handleChangeTabOptionsColor('backgroundColor')}
                    />
                </OptionsForm>

                <OptionsForm margin="10px 0" optionsTitle="Active tab item color">
                    <ColorPicker 
                        color={activeTintColor}
                        onChangeComplete={this.handleChangeTabOptionsColor('activeTintColor')}
                    />
                </OptionsForm>

                <OptionsForm bordered margin="10px 0 1.6rem" optionsTitle="Inactive tab item color">
                    <ColorPicker 
                        color={inactiveTintColor}
                        onChangeComplete={this.handleChangeTabOptionsColor('inactiveTintColor')}
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
        const {
            props: {activeScreen}, 
            state: {currentLayout, layout, screens}
        } = this;

        return (
            <Form fullWidth>
        
                <EntityWrapper>
                    {activeScreen._id ? (
                        <Fragment>
                            <LayoutBox info rounded>
                                This section is currently on improvement process. We will be making new features available soon.
                            </LayoutBox>

                            <header>
                                <Title>Current layout - <DecoratedText>{currentLayout}</DecoratedText></Title>
                            </header>

                            {this.renderLayoutOptions()}

                            {this.renderOptionsForm()}

                            {layout === 'tab' && this.renderTabOptions()}
                        
                            {layout === 'stacked' && this.renderStatusBarOptions()}
                            
                            <Row>
                                <Button onClick={this._handleSaveForm} color="primary" variant="contained">Save changes</Button>
                            </Row>
                        </Fragment>
                    ) : (
                        <LayoutBox info rounded>
                            You must select a screen to edit, please reload the page
                        </LayoutBox>
                    )}
                </EntityWrapper>

                <ScreenSelection 
                    screens={screens} 
                    onClose={()=> this.setState({open: false})} 
                    open={this.state.open} 
                />

                <UserPreview />
            </Form>
        )
    }
}

const mapStateToProps = ({activeScreen}) => ({
    activeScreen
})

export default connect(mapStateToProps)(LayoutComponent);