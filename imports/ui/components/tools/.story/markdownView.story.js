import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MarkdownView from '../markdownView/markdownView.jsx';

storiesOf('markdownView', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('普通', () => (
        <MarkdownView source={source}/>
    ));

const source = ``;