import { Mongo } from 'meteor/mongo';
/**
 * @summary Posts Collection
 * @class Posts
 * @param {String} title 文章标题
 * @param {String} content 文章内容
 * @param {String} categoryId 分类ID
 * @param {String} userId 发表者ID
 * @param {Boolean} isUp 是否顶置
 * @param {Number} replies 回复数量
 * @param {Number} views 浏览数量
 * @param {String} latestReplyTime 最后回答时间
 * @param {String} createAt 创建时间timestamp
 * @param {String} createAt updateAt 最近更新时间timestamp
 *
 * @see 相关method说明 {@link module:Posts/method}
 * @see 相关publications说明 {@link module:Posts/publications}
 */

const name = "posts";
export const Posts = new Mongo.Collection(name);

Posts.name = name;
Posts.schema = new SimpleSchema({
    title: {type: String}
    , content: {type: String}
    , categoryId: {type: String}
    , userId: {type: String}
    , isUp: {type: Boolean,defaultValue:false}
    , replies: {type: Number,defaultValue:0}
    , views: {type: Number,defaultValue:0}
    , latestReplyTime: {type: String}
    , createAt: {type: String}
    , updateAt: {type: String}
});

Posts.attachSchema(Posts.schema);