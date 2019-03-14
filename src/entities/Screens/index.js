import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'

import UserPreview from '../../components/UserPreview';
import { getScreens } from '../../actions/screens'

class LayoutComponent extends Component {
    render() {
        if(!this.props.screens.length) {
            this.props.getScreens()
        }

        return (
            <Fragment>
                <div style={{
                    height: '180vh',
                    width: '50%'
                }}>
                    Aqui é o screen
                </div>

                <UserPreview />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    screens: state.screens
})
  
const mapDispatchToProps = dispatch => ({
    getScreens: () => dispatch(getScreens())
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);