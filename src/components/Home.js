import React from "react"
import { Link } from "react-router-dom"
import watch from 'img/wrist-watch-illusrtated.svg'
import PopularTimeline from "./PopularTimelines"
import PopularEvents from "./PopularEvents"

const Home = ({timelines, events}) => {

  // "map" will create one element for each item in the array
  // Create one <PopularTimeline /> for each object in the timelines array
  const popularTimelines = timelines.map((t, i) => <PopularTimeline key={t.id} data={t} />)
  const popularEvents = events.map((e, i) => <PopularEvents key={e.id} data={e} />)

  return (
    <main className="flex-grow">

      <section className="masthead">
        <ul className="masthead-grid">
          <li>
            <img src={watch} alt="A wrist watch illustrated" />
          </li>
          <li className="masthead-cta">
            <h1>Let's make history together!</h1>
            <p><Link to="/" className="link-dlorean">DLOREAN</Link> is an online tool that lets its users create, collaborate on, and share timelines.</p>
            <p><Link to="/" className="link-cta">Get started</Link></p>
          </li>
        </ul>
      </section>

      <section className="popular-timelines">
        <h2 className="homepage-h2">Popular timelines</h2>
        <ul className="popular-timelines-grid">
          {popularTimelines}        
        </ul>
      </section>

      <section className="popular-events">
        <h2 className="homepage-h2">Popular events</h2>
        <ul className="popular-timelines-grid">
          {popularEvents}
        </ul>
      </section>

    </main>
  )
}

export default Home