import React from 'react'
import GoogleLogin from 'react-google-login'

export const GoogleLoginComponent = props => {
    const responseGoogle = (response) => {
        const profile = response.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }
    
    return(
        <GoogleLogin
            clientId="194881852502-4tlf61nj0ium3vn55c1jpib8dkm6b6q6.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}