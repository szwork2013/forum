import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AuthorPosts from '../authorPosts/authorPosts.jsx';

storiesOf('作者其他文章', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('有内容', () => (
        <AuthorPosts postsList={postsList}/>
    ))
    .add('无内容', () => (
        <AuthorPosts postsList={[]}/>
    ));

//#############################################
import Chance from 'chance';
const chance = new Chance();

const postsList = [1,2,3,4,5,6].map(() => {
    return {
        _id : chance.string()
        , title: chance.sentence()
    }
})