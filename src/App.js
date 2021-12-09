import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // when app mounts (Placed on actual DOM)
  componentDidMount() {
    // fetch users data form this api
    fetch("https://jsonplaceholder.typicode.com/users")
      //jsonify the response data
      .then((response) => response.json())
      // set state and assign response user data to the monsters array
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // app class render method
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      // div contains entire app with app class
      <div className="App">
        <h1>Monsters Rolodex</h1>

        {/* Search Box Component */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {/* applies CardList component, monsters= assigns the prop "monsters" ot the CardList component and its value is the value of the monsters key in the state */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
