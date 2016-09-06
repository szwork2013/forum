import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'
import HeaderArea  from './headerArea.jsx';

export default HeaderAreaContainer = createContainer(({ params }) => {
    const signOut = function(){
        Meteor.logout(function(){
            setTimeout(function(){
                FlowRouter.go('/');
            },500);
        })
    }
    return {
        signOut,
        isLogin:Meteor.userId() != null
    };
}, HeaderArea);