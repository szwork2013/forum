import React from 'react';
import {Paper,RaisedButton} from 'material-ui';

export default class PubPostsBtn extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Paper className="pubPostsBtn_comp right_comp">
                <div className="comp_content">
                    <div className="center_line">
                        <RaisedButton primary={true}
                                      href="/pubPosts"
                                      label="发表帖子"
                        />
                    </div>
                </div>
            </Paper>
        );
    }
}
