import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ShouldSign from '../shouldSign/shouldSign.jsx';

storiesOf('登陆注册', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('正常', () => (
        <ShouldSign/>
    ));

