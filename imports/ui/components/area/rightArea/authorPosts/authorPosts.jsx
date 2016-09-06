import React from 'react';
import {RaisedButton,Paper} from 'material-ui';

export default class AuthorPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { postsList } = this.props;
        return (
            <Paper className="authorPosts_comp right_comp">
                <div className="header">作者其他话题</div>
                <div className="comp_content">
                    <div className="posts_list">
                        {(postsList && postsList.length > 0)?(
                            postsList.map(function(item,index){
                                return (
                                    <div key={item._id} className="item">
                                        {index+1}. {item.title}
                                    </div>
                                    )
                                })
                            ):(
                                <div className="item">
                                    暂时没有其他帖子
                                </div>
                            )
                        }
                    </div>
                </div>
            </Paper>
        );
    }
}
