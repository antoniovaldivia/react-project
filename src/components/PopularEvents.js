import React from "react"

const PopularEvents = ({data}) => {

  return (
    <li>
      <article className="event">
        <ul className="events-grid">
          <li>
            <header className="event-header">
              <time className="purple" dateTime="1969-07-20">Jul 20, <span>1969</span></time>
              <a href="#">
                <h3>{data.title}</h3>
              </a>
              <address><span className="location-icon"></span>{data.location}</address>
              <p><span className="watch-icon"></span> <a href="#">{data.timeline}</a></p>
            </header>
          </li>
          <li className="event-img">
            <a href="#"><img src={`img/demo/${data.img}`} alt="An image of One Giant Leap For Mankind: The First Person on the Moon" /></a>
          </li>
          <li>
            <footer>
              <ul className="event-interactions-grid">
                <li>
                  <p>Likes</p>
                </li>
                <li>
                  <p>Comments</p>
                </li>
              </ul>
            </footer>
          </li>
        </ul>
      </article>
    </li>
  )
}

export default PopularEvents