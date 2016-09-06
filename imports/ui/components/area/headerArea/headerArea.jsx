import React from 'react';

export default class HeaderArea extends React.Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    }
    signOut(){
        this.props.signOut();
    }

    getLoginEles(isLogin){
        let loginEles;
        if( isLogin ){
            loginEles = (
                <div>
                    <a className="item" href="/setting">
                        设置
                    </a>
                    <div className="item" onClick={this.signOut}>
                        退出
                    </div>
                </div>
            );
        }else {
            loginEles = (
                <div>
                    <a className="item" href="/signIn">
                        登陆
                    </a>
                    <a className="item" href="/signUp">
                        注册
                    </a>
                </div>
            );
        }
        return loginEles
    }
    render() {
        const { isLogin } = this.props;
        const loginEles = this.getLoginEles(isLogin);

        return (
            <div className="header_area">
                <div className="logo_area">
                    <img src="images/coder-logo.png" alt="" />
                </div>
                <div className="info_list">
                    <a className="item" href="/">
                        首页
                    </a>
                    { loginEles }
                </div>
            </div>
        );
    }
}
