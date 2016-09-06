import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import {PostsView} from '../../../api/method/posts.method';

import App from '../../../ui/layouts/app.jsx';
import PostsList from '../../../ui/pages/postsList/postsList.container.jsx';
import PostsItem from '../../../ui/pages/postsItem/postsItem.container.jsx';
import SignIn from '../../../ui/pages/signIn/signIn.container.jsx';
import SignUp from '../../../ui/pages/signUp/signUp.container.jsx';
import Setting from '../../../ui/pages/setting/setting.jsx';
import PubPosts from '../../../ui/pages/pubPosts/pubPosts.container.jsx';
import About from '../../../ui/pages/about/about.container.jsx';
import Feedback from '../../../ui/pages/feedback/feedback.jsx';
import Emailverify from '../../../ui/pages/emailVerify/emailVerify.jsx';
import ResetPsw from '../../../ui/pages/resetPsw/resetPsw.container.jsx';

FlowRouter.route('/', {
    action: function() {
        mount(App,{
            content:(<PostsList />)
        });
    }
});
FlowRouter.route('/emailVerify', {
    action: function() {
        mount(App,{
            content:(<Emailverify />)
        });
    }
});
FlowRouter.route('/signUp', {
    action: function() {
        mount(App,{
            content:(<SignUp />)
        });
    }
});

FlowRouter.route('/about', {
    action: function() {
        mount(App,{
            content:(<About />)
        });
    }
});
FlowRouter.route('/feedback', {
    action: function() {
        mount(App,{
            content:(<Feedback />)
        });
    }
});
FlowRouter.route('/signIn', {
    action: function() {
        mount(App,{
            content:(<SignIn />)
        });
    }
});
FlowRouter.route('/setting', {
    action: function() {
        mount(App,{
            content:(<Setting />)
        });
    }
});
FlowRouter.route('/resetPsw', {
    action: function() {
        mount(App,{
            content:(<ResetPsw />)
        });
    }
});
FlowRouter.route('/posts', {
    action: function() {
        mount(App,{
            content:(<PostsList />)
        });
    }
});
FlowRouter.route('/pubPosts', {
    action: function() {
        mount(App,{
            content:(<PubPosts />)
        });
    }
});

FlowRouter.route('/posts/:id', {
    triggersEnter:[function(context){
        const {id} = context.params;
        PostsView.call({id});
    }],
    action: function({id}) {
        mount(App,{
            content:(<PostsItem id={id}/>)
        });
    }
});


