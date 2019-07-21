import React from 'react';
import ListItem from './ListItem.js';

export default class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [
            <ListItem
                acmLink = 'shorturl.com/join'
                date = '08/01/2019'
                oldLink = 'link.to.longurl/join'
                description = 'A short link to become a member.'
            />,
            <ListItem
                acmLink = 'shorturl.com/info'
                date = '08/02/2019'
                oldLink = 'www.blahblahblah.com'
                description = 'This is a description. Components in React are cool.'
            />,
            <ListItem
                acmLink = 'shorturl.com/duck'
                date = '08/03/2019'
                oldLink = 'www.ducksareawesome.com'
                description = "A link all about how great ducks are. Read all about ducks and what makes them great!"
            />
        ],
        filtered: [],
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        filtered: this.state.items
      });
    }
  
    componentWillReceiveProps(nextProps) {
      this.setState({
        filtered: nextProps.items
      });
    }
  
    handleChange(e) {
      // Variable to hold the original version of the list
      let currentList = [];
      // Variable to hold the filtered list before putting into state
      let newList = [];
      // If the search bar isn't empty
      if (e.target.value !== "") {
        // Assign the original list to currentList
        currentList = this.state.items;
        // Use .filter() to determine which items should be displayed based on the search terms
        newList = currentList.filter(item => {
          // change current item to lowercase
          const link = item.props.acmLink.toLowerCase();
          const description = item.props.description.toLowerCase();
          // change search term to lowercase
          const filter = e.target.value.toLowerCase();
          // check to see if the current list item includes the search term
          // if it does, it will be added to newList
          return link.includes(filter) || description.includes(filter);
        });
      } else {
        // If the search bar is empty, set newList to original task list
        newList = this.state.items;
      }
  
      // Set the filtered state based on what our rules added to newList
      this.setState({
        filtered: newList
      });
    }
    
    render() {
      return (
        <div className="content">
            <section className="section">
                <input 
                    type="text" 
                    className="input" 
                    onChange={this.handleChange}
                    placeholder="Search"
                />
                <ul>
                    {this.state.filtered.map(item => (
                    <li key={item}>
                        {item} &nbsp;
                    </li>
                    ))}
                </ul>
            </section>
        </div>
      )
    }
}