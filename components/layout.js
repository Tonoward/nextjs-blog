import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { navLinks, navLinksLogged } from '../lib/data'

import React from 'react'

import { useState, useEffect } from 'react'

import { useUser } from '@auth0/nextjs-auth0'



const NavItem = ({ item }) => {
  const router = useRouter();
  return <>{router.pathname === "/" ? item : ""}</>;
};


const name = 'Tonoward'
export const siteTitle = 'Test Blog'



export default function Layout({ children, home }) {

  const {user, error, isLoading} = useUser();


  //// LOADING USER //////////
  if (isLoading) return (
    <>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}></header>
      <h4>User loading...</h4>
    {/* Navigation bar */}
    <div className="brand">
    <h3>Tw's Blog</h3>
    <Image
      priority
      src="/images/profile.gif"
      className={utilStyles.borderCircle}
      height={100}
      width={100}
      alt={name}
    />
  </div>
  <nav>
    {React.Children.toArray(
    navLinks.map((link, index) => {
    return (
      <a className={styles.ulNav}>
      <Link href={link.path}>
        <li  key={index}>{link.name}</li>
      </Link>
      </a>
    );
    })
    )}
  </nav>
  {/* End of navigation bar */}
  </div>
    </>
  )

  if (error) return <div>{error.message}</div> 
   


  /////////// LOGGED IN /////////
  if(user) {
  return (
    <div className={styles.container}>
      <h4>Welcome {user.name}</h4>
      <a href="/api/auth/logout">Logout</a>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {true ? (
          <>
          {/* Navigation bar */}
          <div className="brand">
            <h3>Tw's Blog</h3>
            <Image
              priority
              src="/images/profile.gif"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
          </div>
          <nav>
            {React.Children.toArray(
            navLinksLogged.map((link, index) => {
            return (
              <a className={styles.ulNav}>
                <Link href={link.path}>
                  <li  key={index}>{link.name}</li>
                </Link>
              </a>  
            );
            })
            )
            }
            
            
          </nav>
          {/* End of navigation bar */}

            
          </>
        ) : (
          <>
          {/* Navigation bar */}
          <div className="brand">
            <h3>Tw's Blog</h3>
            <Image
              priority
              src="/images/profile.gif"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
          </div>
          <nav>
            {React.Children.toArray(
            navLinks.map((link, index) => {
            return (
              <a className={styles.ulNav}>
              <Link href={link.path}>
                <li  key={index}>{link.name}</li>
              </Link>
              </a>
            );
            })
            )}
          </nav>
          {/* End of navigation bar */}
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link  href="javascript:history.back()">
            <a>← Back</a>
          </Link>
        </div>
      )}
    </div>
  )
  }


  ///////// NOT LOGGED IN /////////////////
  return(
    <div className={styles.container}>
      <a href='/api/auth/login'>Login</a>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {true ? (
          <>
          {/* Navigation bar */}
          <div className="brand">
            <h3>Tw's Blog</h3>
            <Image
              priority
              src="/images/profile.gif"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
          </div>
          <nav>
            {React.Children.toArray(
            navLinks.map((link, index) => {
            return (
              <a className={styles.ulNav}>
              <Link href={link.path}>
                <li  key={index}>{link.name}</li>
              </Link>
              </a>
            );
            })
            )}
          </nav>
          {/* End of navigation bar */}

            
          </>
        ) : (
          <>
          {/* Navigation bar */}
          <div className="brand">
            <h3>Tw's Blog</h3>
            <Image
              priority
              src="/images/profile.gif"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
          </div>
          <nav>
            {React.Children.toArray(
            navLinks.map((link, index) => {
            return (
              <a className={styles.ulNav}>
              <Link href={link.path}>
                <li  key={index}>{link.name}</li>
              </Link>
              </a>
            );
            })
            )}
          </nav>
          {/* End of navigation bar */}
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link  href="javascript:history.back()">
            <a>← Back</a>
          </Link>
        </div>
      )}
    </div>
  )

}

