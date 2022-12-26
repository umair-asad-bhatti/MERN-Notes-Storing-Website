import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
const Login = ({ user, setUser }) => {
    const clientId=process.env.clientId
    const Navigate = useNavigate();
    if(localStorage.getItem("User"))
        Navigate("/home")
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = (res) => {

        setUser(res.profileObj)
        localStorage.setItem("User", JSON.stringify(res.profileObj))
        Navigate("/home")
    }
    const onFailure = (err) => {
        console.log(err);
    }
    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("User")
    }

    return (
        <div className="w-full h-[50vh] flex justify-around  items-center flex-col">
           

          
            {

                !user &&
                <GoogleLogin

                    clientId="1090343236638-fj1oqkaiq3pco32g7csqa45hbspcllhr.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}

                ></GoogleLogin>

            }

        </div>
    )
}
export default Login