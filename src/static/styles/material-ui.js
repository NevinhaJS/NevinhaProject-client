import { createMuiTheme } from '@material-ui/core/styles';
import theme from './theme'

const customMaterialTheme = createMuiTheme({
    palette: {
        primary: {
            main: theme.colors.primary
        },
        background: {
            default: theme.background
        }
    },
});

export {customMaterialTheme};