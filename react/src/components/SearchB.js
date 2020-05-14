import React from 'react'
import Customers from '../Movies'
import '../App.css'
import {  Table } from "semantic-ui-react";

class SearchB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      Customers: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      Customers: Customers
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _Customers = this.state.Customers;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _Customers = _Customers.filter(function(Customers) {
        return Customers.name.toLowerCase().match(search);
      });
    }

    return (
      <div>
       
        <div > 
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="Seach by name"
          />
          
      
      
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>NAME</Table.HeaderCell>
            <Table.HeaderCell>ACTOR</Table.HeaderCell>
            <Table.HeaderCell>ACTRESS</Table.HeaderCell>
            <Table.HeaderCell>DIRECTOR</Table.HeaderCell>
            <Table.HeaderCell>REVIEWS</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          
        <Table.Body>
          {_Customers.map(el => {
            return (
              <Table.Row key={el.name}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.name}</Table.Cell>
                <Table.Cell>{el.actor}</Table.Cell>
                <Table.Cell>{el.actress}</Table.Cell>
                <Table.Cell>{el.director}</Table.Cell>
                <Table.Cell>{el.reviews}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
       
          
        </div>
      </div>
    );
  }
}

export default SearchB;