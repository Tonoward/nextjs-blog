import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import {React, useState, useEffect } from 'react'
import { app, database } from '../../firebaseConfig';
import { Timestamp } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useRouter } from "next/router";


export const getServerSideProps = async (context) => {
  //console.log(context.query) 
    // returns { id: post.id, title: post.Title, etc.}

    return {
        props: {
           id: context.query.id,
           title: context.query.title, //pass it to the page props
           content: context.query.content,
           date: context.query.date

        }};
    }


export default function Post(props) {

//Information and route of the FireStore Database
const dbInstance = collection(database, 'blogEntries');


    return (
      <Layout>
        <Head>
          <title>{ props.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{ props.title}</h1>
          <small className={utilStyles.lightText}>
            <li>{props.date} </li>
          </small>
          <div className={utilStyles.lightText}>
            {props.content}
          </div>
        </article>
      </Layout>
    )
  }
