import React from 'react'
import About_section from '../components/About-section'
import CocktailList from '../components/CocktailList'
import Feature_section from '../components/Feature-section'
import Footer_section from '../components/Footer'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <About_section/>
      <SearchForm />
      <CocktailList />
      <Feature_section/>
      <Footer_section/>
    </main>
  )
}
