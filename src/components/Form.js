import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';

const RadioWrapper = withStyles({
    root: {
        flexDirection: 'row'
    }
})(RadioGroup);

export {
    RadioWrapper
}