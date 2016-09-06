import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BriefInfo from '../briefInfo/briefInfo.jsx';

storiesOf('用户简要信息', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('正常', () => (
        <BriefInfo user={user}/>
    ))

//#############################################
const user = {
    username:'wwlweihai'
};
