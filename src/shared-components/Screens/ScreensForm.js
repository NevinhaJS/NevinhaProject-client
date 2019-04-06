import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon';

import languages from '../../utils/languages';
import Request from '../../utils/Request';
import {StyledInput} from '../../shared-components/Form/style';
import {Text, CustomListItem, CustomListIcon} from './style';
import {addScreen} from '../../actions/screens'

const {
    add,
    page_name
} = languages[languages.default];

class ScreensForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: ''
        };
    }

    componentDidUpdate() {
        if(!this.state.addPage) return;

        this.pageInput.focus();
    }

    _handleAddPageClick = () => {
        const {addPage} = this.state;

        this.setState({
            addPage: !addPage
        });
    }

    _handleAddPageBlur = () => {
        const {label} = this.state;

        if(label.trim()) {
            Request.post('screens', {label}).then(resp => {
                this.props.addScreen(resp);
                this._hideAddPageInput();
            });
        }else {
            this._hideAddPageInput()
        }
    }

    _hideAddPageInput() {
        this.setState({
            addPage: false,
            label: ''
        });
    }

    _handleAddPageChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    render() {
        const {addPage, label} = this.state;

        return (
            <Fragment>
                {addPage && (
                    <CustomListItem button>
                        <StyledInput 
                            name="stacked-title" 
                            onBlur={this._handleAddPageBlur}
                            onChange={this._handleAddPageChange}
                            inputProps={{ref: input => this.pageInput = input}}
                            placeholder={page_name}
                            value={label}
                            fullWidth
                        />
                    </CustomListItem>
                )}

                <CustomListItem button onClick={this._handleAddPageClick}>
                    <CustomListIcon>
                        <Icon color="primary">important_devices</Icon>
                    </CustomListIcon>

                    <Text primary={add} />
                </CustomListItem>
            </Fragment>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    addScreen: data => dispatch(addScreen(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreensForm);