import React from 'react';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import theme from '../../static/styles/theme';

const CustomExpansePanel = withStyles({
    root: {
      border: "solid 2px #134d8e",
      background: "transparent"
    }
})(ExpansionPanel)

const CustomExpansionPanelDetails = withStyles({
  root: {
    flexDirection: 'column',
    padding: '0px 14px 14px',
  }
})(ExpansionPanelDetails)

const CustomTyphograph = withStyles({
  root: {
    color: theme.colors.primary
  }
})(Typography)

export default ({
    classes,
    expanded, 
    handleChange, 
    name,
    title,
    children
}) => (
    <CustomExpansePanel expanded={expanded === name} onChange={handleChange(name)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
        <CustomTyphograph className={classes.heading}>{title}</CustomTyphograph>
        </ExpansionPanelSummary>
        <CustomExpansionPanelDetails>
            {children}
        </CustomExpansionPanelDetails>
    </CustomExpansePanel>
)