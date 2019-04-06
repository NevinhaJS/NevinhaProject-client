import React from 'react';

import ExpansePanel from '../Accordion/ExpansePanel';

const Components = ({handleChange, expanded, classes}) => (
    <ExpansePanel 
        handleChange={handleChange} 
        expanded={expanded}
        classes={classes}
        name="components"
        title="Components"
    >
        <p>Teste</p>
    </ExpansePanel>
);

export default Components;