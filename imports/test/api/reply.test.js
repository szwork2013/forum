import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { expect } from 'meteor/practicalmeteor:chai';
import { Posts } from '../../api/model/posts';
import { Reply } from '../../api/model/reply';

import Chance from 'chance';
const chance = new Chance();

if(Meteor.isServer){
    describe('reply', () => {
        it('loop insert', function () {
            //const postsList = Posts.find({}).fetch();
            //for (var i = 0; i < 1000 ;i++) {
            //    Reply.insert({
            //        content : chance.sentence()
            //        , postsId : chance.pickone(postsList)._id
            //        , replierId : chance.string()
            //        , createAt : chance.timestamp()
            //        , updateAt : chance.timestamp()
            //    });
            //}
        })
    })
}