import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [""],
      searchString: "",
    };
    console.log("1 constructor");
  }
  componentDidMount() {
    console.log("3 lifecycle method");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  }
  render() {
    console.log("2 render");

    const {monsters, searchString} = this.state;
    const {onSearchChange} = this;
    
    const filteredMonsters = monsters.filter((item) => {
      return (
        item.name &&
        item.name.toLocaleLowerCase().includes(searchString)
      );
    });
    
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchHandler = {onSearchChange} placeholder='search monsters' class = 'monsters-search-box'/>
        <CardList filteredMonsters = {filteredMonsters} anything={['a','b','c']} nothing = {'nothing'}/>
      </div>
    );
  }
}

export default App;
