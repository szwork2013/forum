import { Meteor } from 'meteor/meteor';
import { Category } from '../model/category';

Meteor.publish('category.list', function() {
    return Category.find({},{sort:{order:1}});
});