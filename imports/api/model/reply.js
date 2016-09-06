import { Mongo } from 'meteor/mongo';

const name = "reply";

export const Reply = new  Mongo.Collection(name);

Reply.name = name;
Reply.schema = new SimpleSchema({
    content: {type: String}
    , postsId: {type: String}
    , replierId: {type: String}
    , createAt: {type: String}
    , updateAt: {type: String}
});

Reply.attachSchema(Reply.schema);