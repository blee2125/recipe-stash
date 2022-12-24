import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Stash</title>
        <meta name="description" content="Recipe Stash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>


      <h1 className="text-3xl font-bold underline">
        <Link href="/recipes/add-recipe">add recipe</Link>
      </h1>
      <h1 className="text-3xl font-bold underline">
        <Link href="/recipes/recipe-list">recipe list</Link>
      </h1>


      </main>
    </>
  )
}
