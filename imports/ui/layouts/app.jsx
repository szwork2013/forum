import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderArea from '../components/area/headerArea/headerArea.container.jsx';
import FooterArea from '../components/area/footerArea/footerArea.jsx';
import RightArea from '../components/area/rightArea/rightArea.container.jsx';

export default class App extends React.Component {
    render(){
        return (
            <MuiThemeProvider>
                <div className="main_layout">
                    <header>
                        <HeaderArea />
                    </header>
                    <div className="center">
                        <div className="dy_content">
                            {this.props.content}
                        </div>
                        <div className="info_area">
                            <RightArea />
                        </div>
                    </div>
                    <footer>
                        <FooterArea />
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}
App.propTypes = {
    content: React.PropTypes.element
};