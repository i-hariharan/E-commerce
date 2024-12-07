import React from 'react'
import Hero from "../components/Hero"
import LatestCollections from '../components/LatestCollections'
import Topsellers from '../components/Topsellers'

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <Topsellers />
    </div>
  )
}
