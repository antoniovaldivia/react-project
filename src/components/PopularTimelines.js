import React from "react"
import { Link } from 'react-router-dom'

const PopularTimeline = ({data}) => {

  // "map" will create one element for each item in the array
  // in this case, creating one <li> for each data.events that was received from "Home"
  const eventDots = data.events.map((e, i) => {
    // Just evenly spacing these as a test...
    return (
    <li key={i} style={{left: `${i * (1 / (data.events.length - 1)) * 100}%`}} className="dynamic-timeline-line-dot">
      <time className="purple" dateTime="1834-03-06"><span>{e.date.getFullYear()}</span></time>
    </li>
    )
  })

  return (
    <li>
      <article className="timeline-box box-shadow">
        <header>
          <ul className="timelines-header-grid">
            <li className="timelines-header-grid-img">
              <Link to="/timeline"><img src={`img/demo/${data.img}`} alt="An image from 180 years of Toronto history" className="timelines-header-grid-img-file" /></Link>
            </li>
            <li>
            <Link to="/timeline"><h3>{data.title}</h3></Link>
              <p><span className="author-icon"></span>By <a href="#">{data.author}</a></p>
            </li>
          </ul>
          <p className="timeline-description">{data.desc}</p>

        </header>
        <ul className="dynamic-timeline purple-background">
          <li>
            <div className="dynamic-timeline-line purple-line">
              <ul>
                {eventDots}
              </ul>
            </div>
          </li>
          <li>
            <ul className="timelines-events-grid">
              <li>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </li>
  )
}

export default PopularTimeline