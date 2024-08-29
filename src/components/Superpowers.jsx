import React from "react"
import Industry from "./industry"

const Superpowers = () => {
  return (
    <div className="superpower">
      <h3>Our superpowers</h3>
      <div className="container">
        <div>
          <Industry
            title={"Industry expertise"}
            desc={
              "We bring relevancy and context to problem solving. Our domain experts leverage deep industry knowledge to identify and implement the most effective solution to address your business challenges."
            }
          />
          <Industry
            title={"Experts in AI"}
            desc={
              "AI is embedded in everything we do. We help your businesses unlock their potential via AI and advanced technologies to future-proof your business. Our AI Launchpad gets you from idea to POC in 90 days."
            }
          />
          <Industry
            title={"Delivery excellence"}
            desc={
              "We get sh*t done. Our deep technical expertise, along with our focus on agile, high-velocity delivery ensures customer satisfaction."
            }
          />
        </div>
        <div>
          <Industry
            title={"Industry expertise"}
            desc={
              "We bring relevancy and context to problem solving. Our domain experts leverage deep industry knowledge to identify and implement the most effective solution to address your business challenges."
            }
          />
          <Industry
            title={"Experts in AI"}
            desc={
              "AI is embedded in everything we do. We help your businesses unlock their potential via AI and advanced technologies to future-proof your business. Our AI Launchpad gets you from idea to POC in 90 days."
            }
          />
          <Industry
            title={"Delivery excellence"}
            desc={
              "We get sh*t done. Our deep technical expertise, along with our focus on agile, high-velocity delivery ensures customer satisfaction."
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Superpowers
