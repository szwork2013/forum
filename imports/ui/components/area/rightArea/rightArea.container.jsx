import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'
import RightArea  from './rightArea.jsx';

export default RightAreaContainer = createContainer(({ params }) => {

    return {
        isLogin:Meteor.userId() != null
    };
}, RightArea);