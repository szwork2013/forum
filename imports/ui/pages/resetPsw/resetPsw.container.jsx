import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResetPsw  from './resetPsw.jsx';

export default ResetPswContainer = createContainer(({ params }) => {
    const subResetPsw = function(data,successCall,errorCall){
        Accounts.changePassword(data.oldPassword, data.password, function(err){
            if(err){
                errorCall(err);
            }else {
                successCall();
                setTimeout(function(){
                    FlowRouter.go('/');
                },1000);
            }
        })
    }

    return {
        subResetPsw
    };
}, ResetPsw);