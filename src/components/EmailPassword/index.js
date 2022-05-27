import React , {Component} from 'react';
import './styles.scss';
import AuthWrapper from './../AuthWrapper/index';
import Button from './../forms/Button/index';
import FormInput from './../forms/FormInput/index';

class EmailPassword extends Component {
    
    render() { 
        const configAuthWrapper ={
            headline : 'Email Password'
        };

        return (
            <AuthWrapper {...configAuthWrapper}>

            </AuthWrapper>
        );
    }
}
 
export default EmailPassword;
