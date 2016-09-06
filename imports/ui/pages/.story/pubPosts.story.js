import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PubPosts from '../pubPosts/pubPosts.jsx';
import 'moment';


storiesOf('发表帖子', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('发表成功', () => (
        <PubPosts categoryList={categoryList} addPosts={addPostsSuccess}/>
    ))
    .add('发表失败', () => (
        <PubPosts categoryList={categoryList} addPosts={addPostsFailed}/>
    ));

//#############################################
import Chance from 'chance';
const chance = new Chance();

const categoryList = [1,2,3,4,5,6,7,8].map(() => {
    return {
        _id : chance.string()
        , name: chance.word()
    }
});

const addPostsSuccess = function(data,successCall,errorCall){
    console.log('data = ',data);
    successCall();
}
const addPostsFailed = function(data,successCall,errorCall){
    console.log('data = ',data);
    errorCall();
}