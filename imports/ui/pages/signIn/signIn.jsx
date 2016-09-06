import React from 'react';
import { RaisedButton,Paper,TextField,FlatButton,Snackbar } from 'material-ui';
import Formsy from 'formsy-react';
import { FormsySelect,FormsyText } from 'formsy-material-ui/lib';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbarOpen:false,
            snackbarMsg:""
        }

        this.subSignIn = this.subSignIn.bind(this);
    }
    subSignIn(data,resetForm){
        this.props.signIn(data,function(){
            this.setState({snackbarOpen:true,snackbarMsg:"登陆成功!即将为您跳转"});
            resetForm();
        }.bind(this),function(){
            this.setState({snackbarOpen:true,snackbarMsg:"登陆失败,请检查用户名和密码!"});
            resetForm();
        }.bind(this));
    }

    render() {
        const { snackbarOpen,snackbarMsg } = this.state;

        return (
            <Paper className="signIn_page" >
                <div className="header">
                    登陆
                </div>
                <Formsy.Form className="form" onValidSubmit={this.subSignIn}>
                    <FormsyText
                        name="username"
                        floatingLabelText="账号"
                        hintText="用户名/邮箱"
                        required
                        fullWidth={true}
                    />
                    <FormsyText
                        name="password"
                        type="password"
                        floatingLabelText="密码"
                        hintText="请输入"
                        required
                        fullWidth={true}
                    />
                    <br />
                    <div className="op_area">
                        <div className="sub_btn">
                            <RaisedButton
                                primary={true}
                                type="submit"
                                label="登陆"
                            />
                        </div>
                        <div className="forget">
                            <FlatButton href="/" label="忘记密码" />
                        </div>
                    </div>

                </Formsy.Form>
                <Snackbar
                    open={snackbarOpen}
                    message={snackbarMsg}
                    autoHideDuration={3000}
                />
            </Paper>
        );
    }
}

