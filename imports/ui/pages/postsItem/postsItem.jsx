import React from 'react';
import { RaisedButton,FlatButton,Paper,Avatar,TextField,Snackbar,CircularProgress } from 'material-ui';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import MarkdownView  from '../../components/tools/markdownView/markdownView.jsx';
import moment from 'moment';

export default class PostsItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            snackbarOpen:false,
            snackbarMsg:""
        }
        this.handleReplySubmit = this.handleReplySubmit.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.back = this.back.bind(this);
    }

    handleReplySubmit(data,resetForm){
        this.props.addReply(data,function(){
            resetForm();
            this.setState({snackbarOpen:true,snackbarMsg:"添加回复成功!"});
        }.bind(this),function(err){
            this.setState({snackbarOpen:true, snackbarMsg:"回复失败,请稍后重试"});
        }.bind(this));
    }
    loadMore(){
        this.props.loadMoreReply();
    }
    getLoadMoreEle(hasMoreReply,replyReady){
        if(!hasMoreReply) return;

        if(replyReady){
            return (
                <div className="pagination_area">
                    <RaisedButton label="加载更多" onClick={this.loadMore} primary={true}/>
                </div>
            );
        }else {
            return (
                <div className="loadPosts">
                    <CircularProgress />
                </div>
            );
        }
    }
    back(){
        this.props.back();
    }
    getReplyListEle(replyList,replyReady,getReplier){
        if(!replyReady && replyList.length == 0) return (
            <div className="loadPosts">
                <CircularProgress />
            </div>
        )

        if(replyList.length > 0){
            return replyList.map(function(item,index){
                const user = getReplier(item.replierId);
                return (
                    <div key={item._id} className="reply_item">
                        <div className="reply_avatar">
                            {
                                (user.profile)?(
                                    <Avatar className="avatar"
                                            color={user.profile.avatar.color}
                                            backgroundColor={user.profile.avatar.background}
                                            size={30}>
                                        {user.username.substr(0,1).toUpperCase()}
                                    </Avatar>
                                ):""
                            }
                        </div>
                        <div className="reply_body">
                            <div className="reply_title">
                                {
                                    (user)?(
                                        <div className="reply_name">
                                            {user.username}
                                        </div>
                                    ):""
                                }

                                <div className="reply_date">
                                    {moment(new Date(parseInt(item.createAt))).format('MM-DD HH:mm')}
                                </div>
                            </div>
                            <div className="reply_content">
                                <MarkdownView
                                    source={item.content}
                                />
                            </div>
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

    postsDetailEle(posts,getAuthor){
        if(!posts){
            return (
                <div className="loadPosts">
                    <CircularProgress />
                </div>
            )
        }
        const author = getAuthor(posts.userId);
        return (
            <div>
                <div className="posts_header">
                    <div className="left_header">
                        <div className="reback" onClick={this.back}>
                            返回
                        </div>
                        <div className="posts_title">
                            {posts.title}
                        </div>
                        <div className="des">
                            <div className="author">{author.username}</div>
                            <div className="dian">·</div>
                            <div className="createAt">
                                发表于
                                {moment(new Date(parseInt(posts.createAt))).format('  MM-DD HH:mm')}
                            </div>
                            <div className="dian">·</div>
                            <div className="views">浏览次数 {posts.views}</div>
                        </div>
                    </div>
                    <div className="right_header">
                        <Avatar className="avatar"
                                color={author.profile.avatar.color}
                                backgroundColor={author.profile.avatar.background}
                                size={55}>
                            {author.username.substr(0,1).toUpperCase()}
                        </Avatar>
                    </div>
                </div>
                <div className="posts_content">
                    <MarkdownView
                        source={posts.content}
                    />

                </div>
            </div>
        );
    }
    render() {
        const { snackbarOpen,snackbarMsg } = this.state;
        const { isLogin,posts,author,replyCount,replyList,replyReady,hasMoreReply,getAuthor,getReplier } = this.props;
        const loadMoreEle = this.getLoadMoreEle(hasMoreReply,replyReady);
        const replyListEle = this.getReplyListEle(replyList,replyReady,getReplier);
        const postsDetailEle = this.postsDetailEle(posts,getAuthor);
        return (
            <div className="posts_item_page">
                <Paper className="content_area">
                    {postsDetailEle}
                </Paper>
                <p></p>
                <Paper className="reply_area">
                    <div className="header">
                        共 {replyCount} 条回复
                    </div>
                    <div className="reply_list">
                        {replyListEle}
                    </div>
                    {loadMoreEle}
                </Paper>
                <p></p>
                <Paper className="sub_reply_area">
                    <div className="header">
                        添加回复
                    </div>
                    {
                        (isLogin)?(
                            <div className="sub_area">
                                <Formsy.Form onValidSubmit={this.handleReplySubmit}>
                                    <div className="text_">
                                        <FormsyText
                                            name="content"
                                            floatingLabelText="回复请注意友善度哦! ^_^!"
                                            hintText="输入框支持markdown语法."
                                            validations="minLength:5"
                                            validationError="至少输入5个字"
                                            required
                                            multiLine={true}
                                            rows={3}
                                            fullWidth={true}
                                        />
                                    </div>
                                    <p></p>
                                    <div>
                                        <RaisedButton
                                            primary={true}
                                            type="submit"
                                            label="提交"
                                        />
                                    </div>
                                </Formsy.Form>
                            </div>
                        ):(
                            <div className="no_sign">
                                <FlatButton label="登陆" href="/signIn" primary={true} />
                                <FlatButton label="/" disabled={true} />
                                <FlatButton label="注册" href="/signUp" secondary={true}/>
                            </div>
                        )
                    }

                </Paper>
                <Snackbar
                    open={snackbarOpen}
                    message={snackbarMsg}
                    autoHideDuration={3000}
                />
            </div>
        );
    }
}