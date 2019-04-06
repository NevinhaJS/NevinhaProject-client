import React from 'react';

import List from '@material-ui/core/List';
import ExpansePanel from '../Accordion/ExpansePanel';

import languages from '../../utils/languages';
import {Text, CustomListItem} from './style';

import ScreensForms from './ScreensForm';

const {
    there_isnt_screens_registered,
} = languages[languages.default];

const Screens = ({handleChange, expanded, classes, screens = []}) => (
    <ExpansePanel 
        handleChange={handleChange} 
        expanded={expanded}
        classes={classes}
        name="screens"
        title="Screens"
    >
        <List component="nav">
            {screens.length ? screens.map((screen, index) => (
                <CustomListItem button key={screen._id ? screen._id : index}>
                    <Text primary={screen.label} />
                </CustomListItem>
            )) : (
                <CustomListItem button>
                    <Text primary={there_isnt_screens_registered} />
                </CustomListItem>
            )}

            <ScreensForms />
        </List>
    </ExpansePanel>
);

export default Screens;