import { Meteor } from 'meteor/meteor';
import { Posts } from '../model/posts.js';
import { Reply } from '../model/reply.js';

/**
 * @module Posts/method
 */

/**
 * @function PostsInsert 插入一天帖子
 *
 * @param   {object} params 参数对象
 * @param   {String} params.title 标题
 * @param   {String} params.categoryId 分类id
 * @param   {String} params.content 内容
 * @example
 * PostsInsert.call(params,function(err,res){
 *      if(err){
 *          console.log(err);
 *      }else{
 *          console.log(res);
 *      }
 * });
 * @returns {String} id 插入帖子的id
 */
export const PostsInsert = new ValidatedMethod({
    name: `posts.methods.insert`
    , validate: new SimpleSchema({
        title: { type: String },
        content: { type: String },
        categoryId: { type: String }
    }).validator()
    ,run({title,categoryId,content}){
        if (!this.userId) {
            throw new Meteor.Error('posts.methods.insert.not-logged-in', '登陆后才能发表帖子');
        }

        const posts = {
            title,
            categoryId,
            content,
            userId:this.userId
        };
        const timestamp = new Date().getTime();
        posts.latestReplyTime = timestamp;
        posts.createAt = timestamp;
        posts.updateAt = timestamp;
        return Posts.insert(posts);
    }
});
export const PostsView = new ValidatedMethod({
    name: `posts.methods.view`
    , validate: new SimpleSchema({
        id: { type: String }
    }).validator()
    ,run({id}){
        return Posts.update(id,{$inc:{views:1}});
    }
});