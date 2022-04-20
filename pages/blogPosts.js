import Layout from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import {React, useState, useEffect } from 'react'
import { app, database } from '../firebaseConfig';
import { Timestamp } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useRouter } from "next/router";


  

export default function BlogPosts({ dataP , ID }) {

    //Information and route of the FireStore Database
    const dbInstance = collection(database, 'blogEntries');


    //Variables to store the posts data
    const [postTitle, setPostTitle] = useState('');
    const [postDesc, setPostDesc] = useState('');
    const [postsArray, setPostsArray] = useState([]);
    const [singlePost, setSinglePost] = useState({});


    //router vars
    const router = useRouter();
    const { name } = router.query;

    //console.log(dataP);

    //execute on (Startup¿?)
    useEffect(() =>  {
        getPosts();
    }, [])

    useEffect(() => {
        getSinglePost();
    }, [ID])


    const getSinglePost = async () => {
        if (ID) {
            const singlePost = doc(database, 'blogEntries', ID)
            const data = await getDoc(singlePost)
            setSinglePost({ ...data.data(), id: data.id })
        }
    }


    //get the data from the DB
    const getPosts = () => {
        getDocs(dbInstance)
            .then((data) => {
                setPostsArray(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }


    /*
    if (!data) {
        return "Loading..."
    }
    */


    return (
      <Layout>
        <Head>
          <title>Blog entries</title>
        </Head>
        <section id='blogPosts' className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Entries</h2>
        

            <div>
            {postsArray.map((post) => {
                    return (
                        <div 
                            className={utilStyles.notesInner}
                            onClick={() => getSinglePost(post.id)}>
                                                        
                            <ul className={utilStyles.list}>
                            
                            <li className={utilStyles.listItem} key={post.id}>
                                <Link href={{
                                        pathname:`posts/${post.id}`,
                                        query: {
                                            id:post.id,
                                            title:post.Title,
                                            content:post.Content,
                                            date:post.date.toDate().toDateString()
                                        }
                                        }}
                                        as={`posts/${post.id}`}
                                        >
                                    <a>{post.Title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <li>{post.date.toDate().toDateString()} </li>
                                </small>
                            </li>
                            
                            </ul>

                        </div>
                    )
            })}
            </div>

      </section>
      </Layout>
    )
  }