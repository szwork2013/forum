import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Emailverify extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){}

    render() {
        return (
            <Paper className="emailVerify_page" zDepth={5}>
                邮箱验证成功
            </Paper>
        );
    }
}