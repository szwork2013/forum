import React from 'react';
import { RaisedButton,Paper,TextField,FlatButton,Snackbar } from 'material-ui';
import Formsy from 'formsy-react';
import { FormsySelect,FormsyText } from 'formsy-material-ui/lib';

export default class ResetPsw extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            snackbarOpen:false,
            snackbarMsg:""
        }

        this.subResetPsw = this.subResetPsw.bind(this);
    }
    componentDidMount(){}
    
    subResetPsw(data,resetForm){
        this.props.subResetPsw(data,function(){
            this.setState({snackbarOpen:true,snackbarMsg:"修改密码成功!即将为您跳转"});
            resetForm();
        }.bind(this),function(){
            //resetForm();
            this.setState({snackbarOpen:true,snackbarMsg:"原密码错误,修改密码失败!"});
        }.bind(this));
    }
    
    render() {
        const { snackbarOpen,snackbarMsg } = this.state;

        return (
            <Paper className="resetPsw_page">
                <div className="header">
                    重置密码
                </div>
                <Formsy.Form className="form" onValidSubmit={this.subResetPsw}>
                    <FormsyText
                        name="oldPassword"
                        type="password"
                        floatingLabelText="旧密码"
                        hintText="请输入"
                        required
                        fullWidth={true}
                    />
                    <FormsyText
                        name="password"
                        type="password"
                        floatingLabelText="新密码"
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