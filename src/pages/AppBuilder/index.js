import React, {Component} from 'react';
import { connect } from 'react-redux'

import UserPreview from '../../shared-components/UserPreview';
import Request from '../../utils/Request';
import {changeActiveScreen, setScreens} from '../../actions/screens';

import {Container} from './style';
import LeftColumn from './LeftColumn';
import SidebarForm from './SidebarForm';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screens: []
        }
    }
    
    componentWillMount() {
        Request.get('screens').then(screens => {
            this.setState({
                screens
            });

            this.props.setScreens(screens);
            this.props.changeActiveScreen(screens[0]);
        })
    }
    
    render() {
        const {screens} = this.props;

        return (
            <Container>
                <LeftColumn 
                    screens={screens} 
                />

                <UserPreview />

                <SidebarForm />
            </Container>
        )
    }
}

const mapStateToProps = ({activeScreen, screens}) => ({
    activeScreen,
    screens
}); 

const mapDispatchToProps = dispatch => ({
    changeActiveScreen: newData => dispatch(changeActiveScreen(newData)),
    setScreens: screens => dispatch(setScreens(screens))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);