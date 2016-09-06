import { Meteor } from 'meteor/meteor';
import { Reply } from '../model/reply';

Meteor.publishComposite('reply.relatedList', function({postsId,replyOption}) {

    const selector = {};
    if(postsId){
        selector.postsId = postsId;
    }
    Meteor._sleepForMs(500);
    return {
        find:function(){
            return Reply.find(selector,replyOption);
        },
        children:[{
            find:function(reply){
                return Meteor.users.find(
                    { _id: reply.replierId },
                    { limit: 1, fields: { username:1,profile: 1 } });
            }
        }]
    }
});

Meteor.publish('reply.list', function({postsId,replyOption}) {
    const selector = {};
    if(postsId){
        selector.postsId = postsId;
    }
    Meteor._sleepForMs(500);

    return Reply.find(selector,replyOption);
});

Meteor.publish('reply.count', function({ postsId }) {
    Counts.publish(this, `reply.count.${postsId}`, Reply.find({postsId}));
});