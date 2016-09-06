import React from 'react';
import { RaisedButton,Paper,TextField,FlatButton,Snackbar } from 'material-ui';
import Formsy from 'formsy-react';
import { FormsySelect,FormsyText } from 'formsy-material-ui/lib';
export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            snackbarOpen:false,
            snackbarMsg:""
        }

        this.subSignUp = this.subSignUp.bind(this);
    }
    componentDidMount(){
    }
    
    subSignUp(data,resetForm){
        console.log('subSignUp');
        this.props.signUp(data,function(){
            console.log('');
            this.setState({snackbarOpen:true,snackbarMsg:"注册成功!即将为您跳转"});
            resetForm();
        }.bind(this),function(){
            this.setState({snackbarOpen:true,snackbarMsg:"注册失败,用户名或邮箱已存在!"});
        }.bind(this));
    }
    
    render() {
        const { snackbarOpen,snackbarMsg } = this.state;

        return (
            <Paper className="signUp_page">
                <div className="header">
                    注册
                </div>
                <Formsy.Form className="form" onValidSubmit={this.subSignUp}>
                    <FormsyText
                        name="username"
                        floatingLabelText="用户名"
                        hintText="请输入"
                        required
                        fullWidth={true}
                    />
                    <FormsyText
                        name="email"
                        floatingLabelText="邮箱"
                        hintText="请输入"
                        validations="isEmail"
                        validationError="邮箱格式错误!"
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
                    <FormsyText
                        name="sure"
                        type="password"
                        floatingLabelText="确认密码"
                        hintText="请输入"
                        validations="equalsField:password"
                        validationError="两次密码不一致"
                        required
                        fullWidth={true}
                    />
                    <br />
                    <RaisedButton label="注册" type="submit" primary={true}/>
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