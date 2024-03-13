import { useLocation, useNavigate } from "react-router-dom"

import { Food, foodNames, peopleQuantity } from "../types/types";

import styles from "./BarbecueResults.module.css"

type BarbecueResults = {
  people: number,
  foodSelection: Food[],
}

const BarbecueResults = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const state: BarbecueResults = location.state

  const totalPerFood = state.foodSelection.reduce((acc, food) => {
    acc[food] = (peopleQuantity[food] * state.people) / 1000;
    return acc;
  }, {} as Record<Food, number>)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Churrasco para {state.people} pessoas:</h2>
      {state.foodSelection.map((food) => (
        <p key={food} className={styles.resultText}>{foodNames[food]}: {totalPerFood[food]}kg</p>
      ))}
      <button onClick={() => navigate('/')} className={styles.resetButton}>Reiniciar</button>
    </div>
  )
}

export default BarbecueResults