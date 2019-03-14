import React from 'react';

import {Row} from '../Layout';
import {Column, OptionsText} from './style';

export default ({bordered, optionsTitle, children}) => (
    <Row bordered={bordered} aligment="flex-start" justify="space-between">
        <div>
            <OptionsText>{optionsTitle}</OptionsText>
        </div>

        <Column>
            {children}
        </Column>
    </Row>
);