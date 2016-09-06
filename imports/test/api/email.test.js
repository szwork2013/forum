import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { expect } from 'meteor/practicalmeteor:chai';
import { Category } from '../../api/model/category';
import { Posts } from '../../api/model/posts';
import { SendTestEmail } from '../../api/method/email.method';

FlowRouter.wait();
process.env.MAIL_URL = 'smtp://no-reply%40ohuoyi.com:Fa4DemabzLgN@smtp.mxhichina.com:587';

if(Meteor.isServer){
    describe('email', () => {
        it('send test', function () {
            //SendTestEmail.call({});
        })
    })
}