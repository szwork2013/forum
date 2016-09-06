import React from 'react';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import BriefInfo  from './briefInfo.jsx';

export default BriefInfoContainer = createContainer(({ params }) => {
    return {
        user:Meteor.user()
    };
}, BriefInfo);