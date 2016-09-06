import React from 'react';
import { configure,addDecorator } from '@kadira/storybook';
import { setStubbingMode } from 'react-komposer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './css';

setStubbingMode(true);
injectTapEventPlugin();

configure(function() {
    require('../imports/ui/pages/.story/posts.story');
    require('../imports/ui/pages/.story/postsItem.story');
    require('../imports/ui/pages/.story/pubPosts.story');
    require('../imports/ui/pages/.story/signIn.story');
    require('../imports/ui/pages/.story/signUp.story');
    require('../imports/ui/pages/.story/resetPsw.story');
    require('../imports/ui/pages/.story/setting.story');

    require('../imports/ui/components/area/.story/footerArea.story');
    require('../imports/ui/components/area/.story/headerArea.story');

    require('../imports/ui/components/area/rightArea/.story/authorPosts.story');
    require('../imports/ui/components/area/rightArea/.story/briefInfo.story');
    require('../imports/ui/components/area/rightArea/.story/pubPostsBtn.story');
    require('../imports/ui/components/area/rightArea/.story/shouldSign.story');

    require('../imports/ui/components/tools/.story/markdownView.story');
}, module);