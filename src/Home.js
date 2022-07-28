import React from 'react'
import AddFeed from './AddFeed'
import Header from './Header'
import ShowFeed from './ShowFeed'

const Home = () => {
  return (
    <div style={{backgroundColor: '#F0F2F5'}}>
      <Header />
      <AddFeed />
      <ShowFeed />
    </div>
  )
}

export default Home