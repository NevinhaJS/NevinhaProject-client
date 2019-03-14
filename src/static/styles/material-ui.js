import { createMuiTheme } from '@material-ui/core/styles';

const customMaterialTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0082f3'
        },
        background: {
            default: '#142029'
        }
    },
});

export {customMaterialTheme};