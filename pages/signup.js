/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Link from 'next/link'
import { account } from '../appwrite/appwrite'
import { ID } from 'appwrite'
import { useRouter } from 'next/router';

function signUp() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const router = useRouter();

    const signUp = (e) => {
        e.preventDefault()

        const promise = account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )

        promise.then(function (response) {
            // console.log(response)
            router.push('/login')
        }, function (error) {
            console.log(error)
        })
    }

    return (
        <div class='cont'>
            <div class="main-cont signup">
                <div class='form-title'>SignUp</div>
                <div class='fields'>
                    <p>User Name</p>
                    <input
                        required
                        type='text'
                        placeholder='Enter your name'
                        onChange={(e) => {
                            setUser({
                              ...user,
                              name: e.target.value
                            })
                          }}
                    />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input
                        required
                        type='email'
                        placeholder='Enter your email'
                        onChange={(e) => {
                            setUser({
                              ...user,
                              email: e.target.value
                            })
                          }}
                    />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input
                        required
                        placeholder='Enter your password'
                        type='password'
                        onChange={(e) => {
                            setUser({
                              ...user,
                              password: e.target.value
                            })
                          }}
                    />
                </div>
                <div class='footer'>
                    <button class='submit-btn' onClick={signUp}>SignUp</button>
                    <Link href='/login' class='links'>Have an Account!</Link>
                </div>
            </div>
        </div>
    )
}

export default signUp