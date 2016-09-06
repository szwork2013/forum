import './register/register.api.js';
import './register/model';
import './register/publications';
import './register/methods';

import {SendTestEmail } from '../../api/method/email.method';

Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://no-reply%40ohuoyi.com:Fa4DemabzLgN@smtp.mxhichina.com:587/';
    //SendTestEmail.call({});
})