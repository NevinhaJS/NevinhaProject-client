import styled from 'styled-components';
import {withStyles} from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Text = withStyles(theme => ({
    primary: {
        color: theme.palette.primary.main
    }
}))(ListItemText)

const CustomListItem = styled(ListItem)`
    p, span {
        transition: color .3s ease-in;
    }

    &:hover {
        p, span {
            color: ${({theme}) => theme.colors.light}
        }
    }
`;

const CustomListIcon = withStyles({
    root: {
        marginRight: 0
        
    }
})(ListItemIcon);

export {Text, CustomListItem, CustomListIcon}