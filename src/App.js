import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

// components 
import { Homepage } from './components'


const App = () => {
  return (
    <div className="app">
      <div className="navbar">

      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">

              </Route>

            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
