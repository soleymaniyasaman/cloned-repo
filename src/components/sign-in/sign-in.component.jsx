import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../firebase/firebase.utils';
class SignIn extends Component {
    state={
        email:"",
        password:""
    };
    handleSubmit= event => {
        event.preventDefault();
        this.setState({ email:"" , password:"" });
    };
    handleChange=event => {
const { value , name } =event.target;
this.setState({ [name]:value });
    };
    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I have an account</h1>
                <span>please sign in to your account</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required/>
                    <FormInput name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    />
                    <div className="button">
                    <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>

                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;