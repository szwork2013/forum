import { Meteor } from 'meteor/meteor';
import { Posts } from '../model/posts.js';
import { Reply } from '../model/reply.js';

export const ReplyInsert = new ValidatedMethod({
    name: `reply.methods.insert`
    , validate: new SimpleSchema({
        content: { type: String },
        postsId: { type: String }
    }).validator()
    ,run({content,postsId}){
        if (!this.userId) {
            throw new Meteor.Error('posts.methods.insert.not-logged-in', '登陆后才能发表帖子');
        }

        const relpy = {
            content,
            postsId,
            replierId:this.userId
        };
        const timestamp = new Date().getTime();
        relpy.createAt = timestamp;
        relpy.updateAt = timestamp;

        Posts.update(postsId,{$inc:{replies:1},$set:{latestReplyTime:timestamp}});
        return Reply.insert(relpy);
    }
})
