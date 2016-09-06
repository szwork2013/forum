import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostsItem from '../postsItem/postsItem.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResetPsw from '../resetPsw/resetPsw.jsx';


storiesOf('修改密码', module)
    .addDecorator((getStory) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {getStory()}
        </MuiThemeProvider>
    ))
    .add('修改密码成功', () => (
        <ResetPsw subResetPsw={subResetPswSuccess}/>
    ))
    .add('修改密码失败', () => (
        <ResetPsw subResetPsw={subResetPswFailed}/>
    ));

//#############################################
const subResetPswSuccess = function(data,successCall,errorCall){
    console.log('data = ',data);
    successCall();
    setTimeout(function(){
        console.log('即将为您跳回首页');
    },1000);
}
const subResetPswFailed = function(data,successCall,errorCall){
    console.log('data = ',data);
    errorCall();
}