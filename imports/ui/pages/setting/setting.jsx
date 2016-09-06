import React from 'react';
import {RaisedButton,Paper,TextField} from 'material-ui';

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){}

    render() {
        return (
            <Paper className="setting_page">
                <div className="header">
                    设置
                </div>
                <div className="form">
                    <RaisedButton label="修改密码" href="/resetPsw" primary={true}/>
                </div>
            </Paper>
        );
    }
}