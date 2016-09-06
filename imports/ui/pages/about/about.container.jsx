import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http'
import About  from './about.jsx';

const intro = new ReactiveVar("");
export default AboutContainer = createContainer(({ params }) => {

    if(intro.get() == ""){
        HTTP.get('/md/about.md',{},function(error, result){
            if(!error){
                intro.set(result.content);
            }
        });
    }
    return {
        intro:intro.get()
    };
}, About);