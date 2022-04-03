import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";
import axios from "./axios";

class TinderCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("/tinder/cards");
      const data = response.data;
      this.setState({ users: data });
    } catch (err) {
      console.log("Unable to fetch cards");
    }
  }
  swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  render() {
    return (
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {this.state.users.map((person) => {
            return (
              <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => this.swiped(dir, person.name)}
                onCardLeftScreen={() => this.outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                  className="card"
                >
                  <h2>{person.name}</h2>
                </div>
              </TinderCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TinderCards;
