import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

export const SendTestEmail = new ValidatedMethod({
    name: `email.methods.sendTest`
    , validate: null
    , run({}){
        this.unblock();
        Email.send({
            to: "ww@ohuoyi.com",
            from: "no-reply@ohuoyi.com",
            subject: "send a test email",
            text: "hello world!"
        });
    }
});
