import {Redirect, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>

        <p className="home-description">
          Millions of people are searching for jobs"
        </p>

        <Link to="/jobs">
          <button type="button" className="shop-now-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
