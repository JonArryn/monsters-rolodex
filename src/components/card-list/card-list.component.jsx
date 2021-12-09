import React from "react";
// imports css styles
import "./card-list.styles.css";
// imports the card component
import { Card } from "../card/card.component";

// functional component CardList with 'props' parameter (like constructor function)
export const CardList = (props) => {
  return (
    // returns jsx div with className to take on css styles
    <div className="card-list">
      {/* maps the monsters prop iterates over each 'monster' in the monsters array, this prop is passed in from App.js */}
      {props.monsters.map((monster) => (
        // for each monster in the monster prop we create a Card which is imported and assign a key from monster.id to each card, as well as define the monster prop with each iterated monster
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
