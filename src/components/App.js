import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'css/App.css'
import { timelineData } from 'data/timeline'
import { eventsData } from 'data/events'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'components/Home'
import Timeline from 'components/Timeline'
import Contact from "components/Contact"
import Login from "components/Login"
import Signup from "components/Signup"
import About from "components/About"
import Woops from "components/Woops"


const App = () => {

	return (
		<Router>
			<div className="layout">
				<Header />
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} timelines={timelineData} events={eventsData} />} />
					<Route exact path="/timeline" component={Timeline} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/about" component={About} />
					<Route component={Woops} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App