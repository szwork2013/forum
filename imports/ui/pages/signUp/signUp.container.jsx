import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base'
import { Session } from 'meteor/session'
import SignUp  from './signUp.jsx';

export default SignUpContainer = createContainer(({ params }) => {
    const signUp = function(data,successCall,errorCall){
        Accounts.createUser(data,function(err,res){
            if(err){
                errorCall(err);
            }else {
                successCall(res);
                FlowRouter.go('/');
                Session.set('isLogin',true);
            }
        });
    }
    return {
        signUp
    };
}, SignUp);