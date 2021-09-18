import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Index () {
  return (
    <div className="main">
      <Helmet>
        <title>index page</title>
        <meta name="description" content="pagina principal"/>
      </Helmet>

      <h1>hola mundo desde Gastby.js</h1>
      <hr/>
      <Link to="/home">home</Link>
    </div>
  )
}
