import React from "react";
// imports css styles for card
import "./card.styles.css";

// functional component to create card (like constructor function) with props passed in
export const Card = (props) => (
  // card div
  <div className="card-container">
    {/* places image in the card div */}
    <img
      alt="monster"
      // sources image from API using template literal and pulls the id from props.monster.id as a value in the URI
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    {/* below image the monster name is applied in h2 and is pulled from the monsters property */}
    <h2>{props.monster.name}</h2>
    {/* monster (user) email applied as p pulling email from each monster via props */}
    <p>{props.monster.email}</p>
  </div>
);
