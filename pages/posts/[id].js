import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import {React, useState, useEffect } from 'react'
import { app, database } from '../../firebaseConfig';
import { Timestamp } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useRouter } from "next/router";


export default function Post({ postID }) {

//Information and route of the FireStore Database
const dbInstance = collection(database, 'blogEntries');




    return (
      <Layout>
        <Head>
          <title>hello{ /*postID.title*/}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>hello{ /*postID.title*/}</h1>
          <div className={utilStyles.lightText}>
          </div>
        </article>
      </Layout>
    )
  }
