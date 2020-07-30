import React from "react"


const Timeline = ({ data }) => {
  return (
    <main className="timeline flex-grow">
      <ul className="timelines-grid">
        <li>
          <article className="timeline-box no-box-shadow">
            <header>
              <ul className="timelines-header-grid">
                <li className="timelines-header-grid-img">
                  <a href="#"><img src="img/demo/toronto.jpg"
                    alt="An image from 180 years of Toronto history"
                    className="timelines-header-grid-img-file" /></a>
                </li>
                <li>
                  <a href="#">
                    <h1 id="heading">180 years of Toronto history</h1>
                  </a>
                  <p><span className="author-icon"></span>By <a href="#">ctvnews</a></p>
                </li>
              </ul>
              <p className="timeline-description">CTV Toronto looks back on major events in city’s past:</p>

            </header>

            <footer>
              <ul className="timeline-interactions-grid-1">
                <li></li>
                <li></li>

                <li>
                  <ul className="timeline-interactions-grid-buttons">
                    <li>
                      <a href="#"><img src="img/add-event-purple.svg" alt="Add a new event" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="img/add-contributors-purple.svg"
                        alt="Invite a contributor" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="img/clone-timeline-purple.svg"
                        alt="Clone this timeline" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="img/share-timeline-purple.svg"
                        alt="Share this timeline" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="img/edit-timeline-purple.svg"
                        alt="Edit this timeline" /></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </footer>

          </article>
        </li>

      </ul>

      <nav className="timeline-menu">
        <ul className="timeline-menu-grid">
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="event.html">Events</a></li>
          <li><a href="channel.html">Channel</a></li>
        </ul>

        <div className="timeline-menu-grid-line-background">
          <div className="timeline-menu-grid-line">
          </div>
        </div>
      </nav>
      <ul className="dynamic-timeline purple-background sticky-bar">
        <li>
          <div className="dynamic-timeline-line purple-line">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="progress hide">
            </div>

          </div>
        </li>
        <li>
          <ul className="timelines-events-grid">
            <li>
            </li>

          </ul>
        </li>
      </ul>
      <div>
        <ul className="the-timeline">
        </ul>
      </div>
      <footer className="timeline-info-box">
        <ul className="timeline-info-box-grid">
          <li>
            <p><span className="watch-icon"></span><a href="#">180 years of Toronto history</a></p>
            <p><span className="created-icon"></span>Created on <time datetime="2020-06-22"><span>Jun 22,
                            2020</span></time></p>
          </li>
          <li>
            <p><span className="author-icon"></span>By <a href="#">ctvnews</a></p>
            <p><span className="contributors-icon"></span>Contributors: cityoftoronto, archivestoronto</p>
          </li>
          <li>
            <p><span className="public-icon"></span>Public timeline</p>
          </li>
        </ul>
      </footer>
    </main>

  )
}

export default Timeline