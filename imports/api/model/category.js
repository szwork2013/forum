import { Mongo } from 'meteor/mongo';

const name = "category";
export const Category = new Mongo.Collection(name);

Category.name = name;
Category.schema = new SimpleSchema({
    name: {type: String}
    , order: {type: Number}
    , createAt: {type: String}
    , updateAt: {type: String}
});

Category.attachSchema(Category.schema);