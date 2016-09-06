import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderArea from '../headerArea/headerArea.jsx';

storiesOf('header', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('已登陆', () => (
        <HeaderArea isLogin={true}/>
    ))
    .add('未登陆', () => (
        <HeaderArea isLogin={false}/>
    ));

//#############################################
