import { Meteor } from 'meteor/meteor';
import { Posts } from '../model/posts';

/**
 * @module Posts/publications
 */

/**
 * @function PostsInsert 插入一天帖子
 *
 * @param   {object} params 参数对象
 * @param   {String} params.categoryId 分类id
 * @param   {String} params.postsOption 查询参数
 * @example
 * Meteor.subscribe('posts.relatedList',{categoryId,postsOption});
 */
Meteor.publishComposite('posts.relatedList', function({categoryId,postsOption}) {
    const fields = {
        categoryId:1,
        latestReplyTime:1,
        userId:1,
        views:1,
        replies:1,
        isUp:1,
        title:1
    }
    const selector = {};
    if(categoryId){
        selector.categoryId = categoryId;
    }

    Meteor._sleepForMs(500);
    return {
        find:function(){
            return Posts.find(selector,{fields,...postsOption})
        },
        children:[{
            find:function(posts){
                return Meteor.users.find(
                    { _id: posts.userId },
                    { limit: 1, fields: { username:1,profile: 1 } });
            }
        }]
    }
});

Meteor.publishComposite('posts.relatedOne', function({id}) {
    Meteor._sleepForMs(500);
    return {
        find:function(){
            return Posts.find(id)
        },
        children:[{
            find:function(posts){
                return Meteor.users.find(
                    { _id: posts.userId },
                    { limit: 1,fields:{roles:0,services:0}});
            }
        }]
    }
});


Meteor.publish('posts.list', function({categoryId,postsOption}) {
    const fields = {
        categoryId:1,
        createAt:1,
        title:1
    }
    const selector = {};
    if(categoryId){
        selector.categoryId = categoryId;
    }
    Meteor._sleepForMs(500);
    return Posts.find(selector,{fields,...postsOption});
});


Meteor.publish('posts.one', function({id}) {
    Meteor._sleepForMs(500);
    return Posts.find(id);
});

Meteor.publish('posts.count', function({ categoryId }) {
    const selector = {};
    if(categoryId){
        selector.categoryId = categoryId;
    }
    Counts.publish(this, `posts.count.${categoryId}`, Posts.find(selector));
});