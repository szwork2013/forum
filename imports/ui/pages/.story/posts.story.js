import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostsList from '../postsList/postsList.jsx';

import 'moment';

storiesOf('帖子列表', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('有内容 加载完成', () => (
        <PostsList postsReady={false} getAuthor={getAuthor} postsList={postsList} categoryList={categoryList}/>
    ))
    .add('无内容 加载中', () => (
        <PostsList postsReady={true} getAuthor={getAuthor} postsList={[]} categoryList={categoryList}/>
    ))
    .add('全部显示', () => (
        <PostsList postsReady={true} getAuthor={getAuthor} postsList={postsList} categoryList={categoryList}/>
    ));

//#############################################
import Chance from 'chance';
const chance = new Chance();
const categoryList = [1,2,3,4,5,6,7].map(() => {
    return {
        _id : chance.string()
        , name: chance.word()

    }
})

const getAuthor = function (){
    return {
        username:chance.name(),
        profile : {
            avatar : {
                color : "#b2ff59",
                background : "#9e9d24"
            }
        }
    }
}
const postsList = [1,2,3,4,5,6,7].map(() => {
    return {
        _id : chance.string()
        , title: chance.name()
        , isUp: chance.bool()
        , replies: chance.integer({min: 0, max: 1000})
        , views: chance.integer({min: 0, max: 1000})
        , username : chance.name()
        , userAvatar : chance.avatar({protocol: 'https'})
        , createAt : chance.timestamp()
        , latestReplyTime : chance.timestamp()
    }
})
