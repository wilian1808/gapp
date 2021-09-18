import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <div className="home">     
      <Helmet>
        <title>hola mudno</title>
        <meta name="description" content="pagina home"/>
      </Helmet>

      <h1>welcome to home page</h1>
      <hr/>
      <Link to="/">to index page</Link>
    </div>
  )
}
