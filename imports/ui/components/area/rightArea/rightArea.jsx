import React from 'react';

import ShouldSign from './shouldSign/shouldSign.jsx';
import PubPostsBtn from './pubPostsBtn/pubPostsBtn.jsx';
import BriefInfo from './briefInfo/briefInfo.container.jsx';
import AuthorPosts from './authorPosts/authorPosts.jsx';

export default class RightArea extends React.Component {
    constructor(props) {
        super(props);
    }
    getLoginEles(isLogin){
        let loginEles;
        if( isLogin ){
            loginEles = (
                <div>
                    <BriefInfo />
                    <p></p>
                    <PubPostsBtn />
                    <p></p>
                </div>
            );
        }else {
            loginEles = (
                <div>
                    <ShouldSign />
                    <p></p>
                </div>
            );
        }
        return loginEles
    }
    render() {
        const { isLogin,showPostsItem } = this.props;
        const loginEles = this.getLoginEles(isLogin);
        return (
            <div className="right_area">
                {loginEles}
                <p></p>
                {(showPostsItem)?<AuthorPosts />:""}
            </div>
        );
    }
}

