import "./PricingCardStyle.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
          <div className="card-container">
                    <div className="card">
                              <h3>- Game 1 -</h3>
                              <span className="bar"></span>
                              <p className="btc">Tic Tac Toe</p>
                              <p>- Fun -</p>
                              <p>- Classic -</p>
                              <p>- Multiplayer-</p>
                              <p>- XXXXXX -</p>
                              <Link to ='/projects/tictac' className ="btn">Play NOW</Link>
                    </div>

                    <div className="card">
                              <h3>- Game 2 -</h3>
                              <span className="bar"></span>
                              <p className="btc">Hangman</p>
                              <p>- 5 Days -</p>
                              <p>- 7 Pages -</p>
                              <p>- Featured -</p>
                              <p>- Responsive Design -</p>
                              <Link to ='/projects/hangman' className ="btn"> Play NOW</Link>
                    </div>

                    <div className="card">
                              <h3>- Business -</h3>
                              <span className="bar"></span>
                              <p className="btc">ColorPicker</p>
                              <p>- 6 Days -</p>
                              <p>- 8 Pages -</p>
                              <p>- Featured -</p>
                              <p>- Responsive Design -</p>
                              <Link to ='/projects/colorpicker' className ="btn"> Play NOW</Link>
                    </div>
          </div>
      
    </div>
  )
}

export default PricingCard
