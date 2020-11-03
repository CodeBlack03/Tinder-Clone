import React, { useState,useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./Axios"

function TinderCards() {
  const [people, setPeople] = useState([
  //   {
  //     name: "Elon Musk",
  //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
  // },
  // {
  //     name: "Kevin Hart",
  //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg"
  // }
  ]);
  useEffect(() => {
      async function fetchData(){
        const req = await axios.get('/tinder/cards')
        setPeople(req.data)
      }
      fetchData();


    }, [])//empty brackets when tinder cards loads it will load it once, anything inside array changes the code will relode
  console.log(people);
  const swiped = (direction, nameToDelete) =>{
    console.log("deleting "+nameToDelete)
    //setLastDirection(direction) //set whether liked of not liked

  }

  const outOfFrame = (name) =>{
    console.log(name+" left the screen");
  }

  return (
    <div className="TinderCards">
      <div className="cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={(direction) => {
                swiped(direction,person.name);
              }}
              onCardLeftScreen={() => outOfFrame(person.name)}
              preventSwipe={["up", "down"]}
            >
              <div style={{backgroundImage: `url(${person.imgUrl})`}}
                className="card">
                <h3>{person.name}</h3>

              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
