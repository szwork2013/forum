import React from 'react';
import {RaisedButton,Paper} from 'material-ui';

export default class ShouldSign extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className="shouldSign_comp right_comp">
                <div className="header">IT初学者聚集地</div>
                <div className="comp_content">
                    <div className="center_line">
                        <RaisedButton href="/signUp" label="现在注册"  />
                    </div>
                    <p></p>
                    <div className="center_line">
                        已注册用户请
                        <a href="/signIn">登陆</a>
                    </div>
                </div>
            </Paper>
        );
    }
}
