import React from 'react'
import './Event.css'

function Event() {
  const technicalEvents = [
    {
      title: "Coding",
      description: "Put your programming skills to the test! Solve algorithmic problems and coding challenges in a race against the clock.",
      icon: "💻",
      rules: [
        "Languages: C, C++, Java, or Python",
        "AI usage is strictly prohibited",
        "Time duration: 2 hours"
      ]
    },
    {
      title: "Paper Presentation",
      description: "Showcase your research and presentation skills by discussing innovative ideas on trending topics.",
      icon: "📑",
      rules: [
        "Submit papers 2 days prior",
        "10-minute presentations",
        "2-minute Q&A session",
        "Teams of up to 2 members"
      ]
    },
    {
      title: "UI/UX Designing",
      description: "Create intuitive, user-friendly interfaces. Compete to make the most innovative and aesthetic designs.",
      icon: "🎨",
      rules: [
        "Use Figma, Adobe XD, or Sketch",
        "3-hour duration",
        "Follow given theme",
        "Solo or team participation"
      ]
    },
    {
      title: "CineQuery",
      description: "A DBMS-based competition where participants craft a SQL story using provided schemas based on a movie theme.",
      icon: "🎬",
      rules: [
        "Teams of 2 members",
        "Use pre-provided schemas",
        "Include SQL joins, subqueries, functions",
        "2-hour duration"
      ]
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Twist Tales",
      description: "Unleash your creativity and storytelling skills! Craft a short story with an unexpected twist.",
      icon: "📚",
      rules: [
        "1-hour time limit",
        "500-700 words limit",
        "Original content only",
        "Teams of 2 members"
      ]
    }
  ];

  return (
    <div className="events-container">
      <div className="events-wrapper">
        <div className="event-section">
          <h2>Technical Events</h2>
          <div className="event-header">
            <img width="100%" height="50%" 
              src="https://thumbs.dreamstime.com/b/anatomy-human-body-robot-digital-circuit-technology-ai-generated-anatomy-human-body-robot-digital-circuit-technology-ai-generated-293132183.jpg"
              alt="Technical Events"
              className="event-banner"
            />
          </div>
        </div>

        <div className="vertical-divider"></div>

        <div className="event-section">
          <h2>Non-Technical Events</h2>
          <div className="event-header">
            <img 
              src="https://img.freepik.com/premium-photo/abstract-technological-background-web-events_943281-123058.jpg"
              alt="Non-Technical Events"
              className="event-banner"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event