import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('帖子详情', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('有回复 回复失败', () => (
        <PostsItem isLogin={true} replyCount={10} posts={posts} getAuthor={getAuthor} getReplier={getReplier} replyList={replyList} addReply={addReplyFailed}/>
    ))
    .add('无回复 回复成功', () => (
        <PostsItem isLogin={true} replyCount={10} posts={posts} getAuthor={getAuthor} getReplier={getReplier} replyList={[]} addReply={addReplySuccess}/>
    ))
    .add('无回复 未登陆', () => (
        <PostsItem isLogin={false} replyCount={10} posts={posts} getAuthor={getAuthor} getReplier={getReplier} replyList={[]} addReply={addReplySuccess}/>
    ))
    ;

//#############################################
import Chance from 'chance';
const chance = new Chance();

const posts = {
    _id:"as123asdsd123",
    title:"meteor项目部署",
    userAvatar:"http://resources.ohuoyi.com/FuNbni2mgIuGMMuxP9lm-HwtkJDn",
    createAt:"1471787015",
    views: chance.integer({min: 0, max: 1000}),
    content:`meteor项目有多种部署方式，可以选择部署到meteor官方推荐的Galaxy平台，但由于国内网络的原因，这种方式并不适合当下国情。另外，还有两种部署到自有服务器中的方法。

ps:本文章重点讲解mup的部署方式

## mup

mup的部署方式也是当前我们团队所采用的部署方案，其高效的部署过程，使得欲罢不能。但是由于种种原因，导致国内外多数meteor开发者无法使用mup部署，其原因大概如下：

1. 网络原因。通过配置源，来解决
2. 版本原因。通过修改meteor项目的版本，mup的版本，node，npm的版本来解决。
3. dockerImage原因。由于mup部署工具历史原因，选择一个合适的dockerImage，是非常重要的。

## build & deploy



## 附件资料

[meteor官方部署文档](https://guide.meteor.com/deployment.html#deployment-options)`
};
const getAuthor = function (){
    return {
        username:chance.name(),
        profile : {
            avatar : {
                color : chance.color({format: 'hex'}),
                background : chance.color({format: 'hex'})
            }
        }
    }
}

const author = {
    username:chance.name(),
        profile : {
        avatar : {
            color : chance.color({format: 'hex'}),
            background : chance.color({format: 'hex'})
        }
    }
}

const getReplier = function (){
    const color = chance.color({format: 'hex'});
    const background = chance.color({format: 'hex'});
    return {
        username: chance.name(),
        profile : {
            avatar : {
                color,
                background
            }
        }
    }
}

const replyList = [1,2,3,4,5,6,7].map(() => {
    return {
        _id : chance.string()
        , content : chance.paragraph()
        , createAt : chance.timestamp()
    }
})

const addReplySuccess = function(data,successCall,errorCall){
    console.log('data = ',data);
    successCall();
}
const addReplyFailed = function(data,successCall,errorCall){
    console.log('data = ',data);
    errorCall();
}