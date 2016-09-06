import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base'
import { Session } from 'meteor/session'
import SignIn  from './signIn.jsx';

export default SignInContainer = createContainer(({ params }) => {
    const signIn = function(data,successCall,errorCall){
        //console.log('signIn = ',data);
        Meteor.loginWithPassword(data.username,data.password,function(err,res){
            if(err){
                errorCall(err);
            }else {
                successCall(res);
                FlowRouter.go('/');
            }
        });
    }
    return {
        signIn
    };
}, SignIn);