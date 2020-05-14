import React, { useState } from "react";
import "../App.css";
import Menu from "./Menu";

export default function App() {
  const [showId, setId] = useState(false);
  const [showName, setName] = useState(false);
  const [showActor, setActor] = useState(false);
  const [showActress, setActress] = useState(false);
  const [showDirector, setDirector] = useState(false);
  const [showReviews, setReviews] = useState(false);

  function handleId() {
    setId(true);
    setName(false);
    setActor(false);
    setActress(false);
    setDirector(false);
    setReviews(false);
  }

  function handleName() {
    setId(false);
    setName(true);
    setActor(false);
    setActress(false);
    setDirector(false);
    setReviews(false);
  }

  function handleActor() {
    setId(false);
    setName(false);
    setActor(true);
    setActress(false);
    setDirector(false);
    setReviews(false);
  }

  function handleActress() {
    setId(false);
    setName(false);
    setActor(false);
    setActress(true);
    setDirector(false);
    setReviews(false);
  }
  function handleDirector() {
    setId(false);
    setName(false);
    setActor(false);
    setActress(false);
    setDirector(true);
    setReviews(false);
  }
  function handleReviews() {
    setId(false);
    setName(false);
    setActor(false);
    setActress(false);
    setDirector(false);
    setReviews(true);
  }

  return (
    <div >
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a onClick={handleId}> ID</a>
          <a onClick={handleName}>NAME</a>
          <a onClick={handleActor}>ACTOR</a>
          <a onClick={handleActress}>ACTRESS</a>
          <a onClick={handleDirector}>DIRECTOR</a>
          <a onClick={handleReviews}>REVIEWS</a>
        </div>
      </div>

      {showId && <Menu type="id" />}
      {showName && <Menu type="name" />}
      {showActor && <Menu type="actor" />}
      {showActress && <Menu type="actress" />}
      {showDirector && <Menu type="director" />}
      {showReviews && <Menu type="reviews" />}
      
    </div>
  );
}