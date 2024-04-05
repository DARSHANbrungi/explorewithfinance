import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Explore from "../explore/explore"
import Finance from "../finance/fin"
import Emicalculator from "../emicalc/emicalc"
import Legal from "../legal/legal"
import Contarctors from "../home/team/Team"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/finance' component={Finance} />
          <Route exact path='/emi-calculator' component={Emicalculator} />
          <Route exact path='/legal' component={Legal} />
          <Route eaxct path='/contarctors' component={Contarctors} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;
