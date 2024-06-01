import { Component } from "react";
import './card-list.styles.css'
import Card from './card-container.component'

class CardList extends Component {
  render() {
    console.log('render');
    const {filteredMonsters} = this.props;
    console.log(this.props);

    return (
      <div className="card-list">
        {filteredMonsters.map((item) => {
          const {name, email, id} = item;
          return (
          <Card item={item}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;