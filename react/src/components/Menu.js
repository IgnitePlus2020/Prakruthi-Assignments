import React from "react";
import Movies from "../Movies";

export default function Menu(props) {
  const type = props.type;
  return (
    <div className="container">
      <table>
        {Movies.map(Movies => {
          if (type === "id") {
            return (
              <tr>
                <h2>{Movies.id}</h2>
              </tr>
            );
          } else if (type === "name") {
            return (
              <tr>
                <h2>{Movies.name}</h2>
              </tr>
            );
          } else if (type === "actor") {
            return (
              <tr>
                <h2>{Movies.actor}</h2>
              </tr>
            );
          } else if (type === "actress") {
            return (
              <tr>
                <h2>{Movies.actress}</h2>
              </tr>
            );
          } else if (type === "director") {
            return (
              <tr>
                <h2>{Movies.director}</h2>
              </tr>
            );
          } else if (type === "reviews") {
            return (
              <tr>
                <h2>{Movies.reviews}</h2>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}