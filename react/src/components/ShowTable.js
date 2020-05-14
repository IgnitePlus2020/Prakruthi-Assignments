import React from "react";
import {  Table } from "semantic-ui-react";

import Movies from '../Movies'

const ShowTable =() =>{

  
    return (
      
      
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
          {Movies.map(el => {
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
       );
      }
    
    
    export default ShowTable;