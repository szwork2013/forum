import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Category } from '../../../api/model/category';
import { Posts } from '../../../api/model/posts';
import PostsList  from './postsList.jsx';

const limitInterval = 12;
const categoryVar = new ReactiveVar("");
const limitVar = new ReactiveVar(limitInterval);

export default PostsListContainer = createContainer(({ params }) => {
    const getAuthor = function(userId){
        return Meteor.users.findOne(userId);
    }
    const setCategoryId = function(id){
        categoryVar.set(id);
        limitVar.set(limitInterval);
    }
    const loadMore = function(){
        limitVar.set(limitVar.get() + limitInterval);
    }

    const categoryId = categoryVar.get();
    const postsOption = {
        limit:limitVar.get(),
        sort:{isUp:-1,latestReplyTime:-1,createAt:-1}
    };

    Meteor.subscribe('posts.count',{categoryId});
    const categoryHandle = Meteor.subscribe('category.list');
    const postsHandle = Meteor.subscribe('posts.relatedList',{categoryId,postsOption});

    const categoryOption = {
        sort:{order:1,createAt:-1}
    };
    const postsSelector = (categoryId)?{categoryId:categoryId}:{};

    const postsCount = Counts.get(`posts.count.${categoryId}`);
    return {
        getAuthor,
        loadMore,
        setCategoryId,
        hasMorePosts:(postsCount > Posts.find(postsSelector,postsOption).count()),
        categoryId,
        categoryList:(categoryHandle.ready())?Category.find({},categoryOption).fetch():[],
        postsReady:postsHandle.ready(),
        postsList:Posts.find(postsSelector,postsOption).fetch()
    };
}, PostsList);