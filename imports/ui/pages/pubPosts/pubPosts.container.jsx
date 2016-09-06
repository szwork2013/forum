import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { PostsInsert } from '../../../api/method/posts.method';
import { Category } from '../../../api/model/category';
import { Posts } from '../../../api/model/posts';
import PubPosts  from './pubPosts.jsx';

export default PubPostsContainer = createContainer(({ params }) => {
    const addPosts = function(data,successCall,errorCall){
        PostsInsert.call({...data},function(err,res){
            if(err){
                errorCall(err);
            }else {
                successCall(res);
                FlowRouter.go('/');
            }
        });
    }
    const categoryHandle = Meteor.subscribe('category.list');
    const categoryOption = {
        sort:{createAt:-1}
    };

    return {
        addPosts,
        categoryList:(categoryHandle.ready())?Category.find({},categoryOption).fetch():[]
    };
}, PubPosts);