import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from '../signIn/signIn.jsx';


storiesOf('登陆', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('登陆成功 ', () => (
        <SignIn subSignIn={subSignInSuccess}/>
    ))
    .add('登陆失败 用户名/密码错误', () => (
        <SignIn subSignIn={subSignInFailed}/>
    ));

//#############################################
const subSignInSuccess = function(data,successCall,errorCall){
    console.log('data = ',data);
    successCall();
    setTimeout(function(){
        console.log('即将为您跳回首页');
    },1000);
}
const subSignInFailed = function(data,successCall,errorCall){
    console.log('data = ',data);
    errorCall();
}