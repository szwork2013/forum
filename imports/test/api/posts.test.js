import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { expect } from 'meteor/practicalmeteor:chai';
import { Category } from '../../api/model/category';
import { Posts } from '../../api/model/posts';
import { PostsInsert } from '../../api/method/posts.method';

import Chance from 'chance';
const chance = new Chance();

if(Meteor.isServer){
    describe('posts', () => {
        it('test insert', function () {
            const addPosts = new Promise((resolve, reject) => {
                PostsInsert.call({
                    title : chance.sentence()
                    , content : chance.paragraph()
                    , categoryId : chance.string()
                }, (error,res) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                });
            });

            return addPosts.then(function (res) {
                expect(res).to.be.a('string');
            });
        })
    })
}