import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0'

import {React, useState, useEffect } from 'react'

import { app, database } from '../firebaseConfig';
import { Timestamp } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore';


export const getServerSideProps = withPageAuthRequired();


export default function NewPost() {


const {user, error, isLoading} = useUser();

const savePost = () => {
    addDoc(dbInstance, {
        Title: postTitle,
        Content: postCont,
        date: Timestamp.now(),
    })
    .then(() => {
        window.location.reload()
    })
}

if(isLoading){
    return <div>Loading...</div>
}
if(error){
    return <div>Errorrrasmflksdna</div>
}

//Information and route of the FireStore Database
const dbInstance = collection(database, 'blogEntries');

const [postTitle, setPostTitle] = useState('');
const [postCont, setPostDesc] = useState('');






////// POST A NEW ENTRY IF I AM THE PERSON LOGGED IN/////////
if(user.email=="tono_war@hotmail.com"){
    return (
      <Layout>
        <Head>
          <title>Post a new entry</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>Post a new entry</h1>
          
          
          <><div>
                <input
                    
                    placeholder='Enter the Title..'
                    onChange={(e) => setPostTitle(e.target.value)} />
            </div>
            <div>Content:</div>
            <div>
                <textarea
                        
                        placeholder='Body of the Note'
                        onChange={(e) => setPostDesc(e.target.value)} />
            </div>
            <button
                onClick={savePost}
                >
                    Save Note
            </button></>
        </article>
      </Layout>
    )
}else{
/////////// SOMEBODY ELSE ///////////
    <Layout>
        <Head>
          <title>Hmmm...</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>You should not be here...</h1>
          <a href='/'>go home</a>
        </article>
      </Layout>
}


  }

