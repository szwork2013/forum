import React from 'react';
import { Avatar,Paper,RaisedButton,CircularProgress } from 'material-ui';
import moment from 'moment';

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.changeCategory = this.changeCategory.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }
    changeCategory(index){
        this.props.setCategoryId(index);
    }
    loadMore(){
        this.props.loadMore();
    }
    getPostsListEle(postsList,postsReady,getAuthor){
        if(!postsReady && postsList.length == 0) return (
            <div className="loadPosts">
                <CircularProgress />
            </div>
        )

        if(postsList.length > 0){
            return postsList.map(function(item,index){
                const user = getAuthor(item.userId);
                return (
                    <div key={item._id} className="posts_item">
                        {
                            (user)?(
                                <Avatar className="avatar"
                                        color={user.profile.avatar.color}
                                        backgroundColor={user.profile.avatar.background}
                                        size={30}>
                                    {user.username.substr(0,1).toUpperCase()}
                                </Avatar>
                            ):""
                        }
                        <div className="statistics">
                            <span className="replies">
                                {item.replies}
                            </span>
                            <span className="line">
                                |
                            </span>
                            <span className="views">
                                {item.views}
                            </span>
                        </div>
                        {
                            (item.isUp)?(
                                <div className="isUp">
                                    顶置
                                </div>
                            ):""
                        }
                        <a className="title" href={`/posts/${item._id}`}>
                            {item.title}
                        </a>
                        <div className="data">
                            {moment(new Date(parseInt(item.latestReplyTime))).format('MM-DD HH:mm')}
                        </div>
                    </div>
                )
            })
        }else {
            return (
                <div className="tips">
                    没有内容了!
                </div>
            );
        }

    }

    getLoadMoreEle(hasMorePosts,postsReady,postsList){
        if(!hasMorePosts) return;

        if(postsReady){
            return (
                <div className="pagination_area">
                    <RaisedButton label="加载更多" onClick={this.loadMore} primary={true}/>
                </div>
            );
        }else if(postsList.length > 0){
            return (
                <div className="loadPosts">
                    <CircularProgress />
                </div>
            );
        }

    }

    render() {
        const { categoryList,postsList,categoryId,postsReady,hasMorePosts,getAuthor } = this.props;
        const postsListEle = this.getPostsListEle(postsList,postsReady,getAuthor);
        const loadMoreEle = this.getLoadMoreEle(hasMorePosts,postsReady,postsList);

        return (
            <Paper className="posts_list_page">
                <div className="category_list">
                    <div className={`category_item${(categoryId == "")?" active":""}`}
                         onClick={() => this.changeCategory("")}>
                        全部
                    </div>
                    {
                        (categoryList && categoryList.length > 0)?(
                            categoryList.map(function(item,index){
                                return (
                                    <div key={index}
                                         onClick={() => this.changeCategory(item._id)}
                                         className={`category_item${(categoryId == item._id)?" active":""}`}>
                                        {item.name}
                                    </div>
                                )
                            }.bind(this))
                        ):""
                    }
                </div>
                <div className="posts_list">
                    {postsListEle}
                </div>
                {loadMoreEle}
            </Paper>
        );
    }
}