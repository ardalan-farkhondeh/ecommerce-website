import React, { Component } from 'react';

import SignUp from './../../components/Signup/index';
import './styless.scss';


class Registration extends Component {
    render() {
        return (
            <div>
               <h1>
                   <SignUp/>
                </h1> 
            </div>
        )
    }
}

export default Registration;
