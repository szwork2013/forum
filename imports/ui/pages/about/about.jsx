import React from 'react';
import Paper from 'material-ui/Paper';
import MarkdownView  from '../../components/tools/markdownView/markdownView.jsx';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { intro } = this.props;
        return (
            <Paper className="about_page">
                <div className="header">
                    关于论坛
                </div>
                <div className="content">
                    <MarkdownView
                        source={intro}
                    />
                </div>
            </Paper>
        );
    }
}