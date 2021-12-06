import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContainerBlock from '../components/ContainerBlock'
import Hero from "../components/Hero"
import getLatestRepos from '../utils/getLatestRepos'
import userData from "../constants/data"
import FavouriteProjects from '../components/FavProjects'
import LatestCode from '../components/LastestCode'

export default function Home({repositories}) {
  return (
    <ContainerBlock title="Ricardo Ramirez - Software Engineer" description="My portfolio">
      <Hero/>
      <FavouriteProjects/>
      <LatestCode repositories={repositories}/>
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN
  const repositories = await getLatestRepos(userData, token)
  console.log(repositories)
  return {
    props: {
      repositories,
    }
  }
}