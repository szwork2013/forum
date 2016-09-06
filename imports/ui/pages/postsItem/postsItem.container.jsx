import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PostsItem  from './postsItem.jsx';
import { Posts } from '../../../api/model/posts';
import { Reply } from '../../../api/model/reply';
import { ReplyInsert } from '../../../api/method/reply.method';

const limitInterval = 10;
const limitVar = new ReactiveVar(limitInterval);

export default PostsItemContainer = createContainer(({ id }) => {
    const getAuthor = function(userId){
        if(!userId) return;
        return Meteor.users.findOne(userId);
    }

    const getReplier = function(userId){
        if(!userId) return;
        return Meteor.users.findOne(userId);
    }

    const addReply = function(data,successCall,errorCall){
        ReplyInsert.call({...data,postsId:id},function(err,res){
            if(err){
                errorCall(err);
            }else {
                successCall(res);
            }
        });
    }

    const loadMoreReply = function(){
        limitVar.set(limitVar.get() + limitInterval);
    }
    const back = function(){
        FlowRouter.go('/');
    }
    const replyOption = {
        limit:limitVar.get(),
        sort:{createAt:-1}
    };

    Meteor.subscribe('reply.count',{postsId:id});
    const postsHandle = Meteor.subscribe('posts.relatedOne',{id});
    const replyHandle = Meteor.subscribe('reply.relatedList',{postsId:id,replyOption});

    const replyCount = Counts.get(`reply.count.${id}`);

    return {
        getAuthor,
        back,
        isLogin:Meteor.userId() != null,
        getReplier,
        addReply,
        loadMoreReply,
        hasMoreReply:(replyCount > Reply.find({postsId:id},replyOption).count()),
        posts:(postsHandle.ready())?Posts.findOne(id):null,
        replyCount,
        replyReady:replyHandle.ready(),
        replyList:Reply.find({postsId:id},replyOption).fetch()
    };
}, PostsItem);