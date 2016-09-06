import React from 'react';
import ReactMarkdown  from 'react-markdown';

export default class MarkdownView extends React.Component {
    render() {
        const { source } = this.props;
        return (
            <div className="markdownView">
                <ReactMarkdown
                    className="react_md md_theme"
                    source={source}
                    renderers={{Link: (props) => (<a href={props.href} target="_blank">{props.children}</a>)}}
                />
            </div>
        );
    }
}
