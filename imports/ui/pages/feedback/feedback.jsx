import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return (
            <Paper className="feedback_page"  zDepth={5}>
                <div className="header">
                    意见反馈
                </div>
                <div className="form">
                    分类
                    标题
                    正文
                    提交
                </div>
            </Paper>
        );
    }
}