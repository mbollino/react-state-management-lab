import { useState } from "react";
import './app.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (event, fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters((prevFighters) =>
        prevFighters.filter((z) => z.id !== fighter.id)
      );
      setMoney(() => money - fighter.price);
    } else {
      console.log("Not enough money");
    }
  };

  const totalStrength = team.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.strength;
  }, 0);

  const totalAgility = team.reduce((accum, currVal) => {
    return accum + currVal.agility;
  }, 0);

  console.log(
    "ZombieFighters IDs:",
    zombieFighters.map((f) => f.id)
  );
  const handleRemoveFighter = (fighter) => {
    setTeam((prevTeam) => prevTeam.filter((f) => f.id !== fighter.id));
    setZombieFighters((prevFighters) => [...prevFighters, fighter]);
    setMoney(() => money + fighter.price);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((myFighter, id) => (
            <li key={myFighter.id}>
              <img src={myFighter.img} />
              <p>{myFighter.name}</p> 
              <p>Price: {myFighter.price}</p> 
              <p>Strength: {myFighter.strength}</p>
              <p>Agility: {myFighter.agility}</p>
              <button onClick={() => handleRemoveFighter(myFighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter, id) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} />
            <p>{zombieFighter.name}</p> 
            <p>Price: {zombieFighter.price}</p> 
            <p>Strength: {zombieFighter.strength}</p> 
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={(event) => handleAddFighter(event, zombieFighter)}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
