import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUp from '../signUp/signUp.jsx';


storiesOf('注册', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('注册成功', () => (
        <SignUp subSignUp={subSignUpSuccess}/>
    ))
    .add('注册失败', () => (
        <SignUp subSignUp={subSignUpFailed}/>
    ));

//#############################################
const subSignUpSuccess = function(data,successCall,errorCall){
    console.log('data = ',data);
    successCall();
    setTimeout(function(){
        console.log('即将为您跳回首页');
    },1000);
}
const subSignUpFailed = function(data,successCall,errorCall){
    console.log('data = ',data);
    errorCall();
}