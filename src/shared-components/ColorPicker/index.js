import React, {Component} from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const ColorSelectBox = styled.div`
    width: 100%;
    height: 34px;
    border: solid 4px ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.colors.light};
    border-radius: 4px;
    cursor: pointer;
`;

const ColorPicker = styled(SketchPicker)`
    position: absolute;
    top: -90px;
    z-index: 9;
`

class ColorPickerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        }

        document.body.addEventListener('click', this._handleDocumentClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this._handleDocumentClick);
    }

    _handleDocumentClick = e => {
        if(e.target.closest('.color-pciker-container')){
            return;
        }

        this.setState({
            opened: false
        })
    }

    _handleToggle = () => {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        const {onChangeComplete, color} = this.props;
        const {opened} = this.state;

        return (
            <Container className="color-pciker-container">
                <ColorSelectBox 
                    onClick={this._handleToggle}
                    color={color} 
                />

                {opened && <ColorPicker color={color} disableAlpha onChangeComplete={onChangeComplete} />}
            </Container>
        );
    }
}

export default ColorPickerComponent;