import React from 'react';
import {RaisedButton,Paper,Avatar} from 'material-ui';

export default class BriefInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <Paper className="briefInfo_comp right_comp">
                <div className="header">个人中心</div>
                <div className="comp_content">
                    {
                        (user)?(
                            <div className="info_line">
                                <div className="avatar img_center">
                                    <Avatar className="avatar"
                                            color={user.profile.avatar.color}
                                            backgroundColor={user.profile.avatar.background}
                                            size={40}>
                                        {user.username.substr(0,1).toUpperCase()}
                                    </Avatar>
                                </div>
                                <div className="username">
                                    {user.username}
                                </div>
                            </div>
                        ):""
                    }
                </div>
            </Paper>
        );
    }
}
