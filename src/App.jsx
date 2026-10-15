import { useState } from 'react'
import { Header } from './Header/Header.jsx'
import {Flower} from './Flower/Flower.jsx'
import {TodoList} from './Todolist/TodoList.jsx'

const App = () => {
  const flowers = [{id: 1, flowerName: "שושן צחור", colorPetals: "white", colorCentralLeaf: "yellow"},
  {id: 2, flowerName: "חמנייה", colorPetals: "yellow", colorCentralLeaf: "brown"},
  {id: 3, flowerName: "שושנה", colorPetals: "pink", colorCentralLeaf: "yellow"},
  {id: 4, flowerName: "חבצלת", colorPetals: "purple", colorCentralLeaf: "green"},
  {id: 5, flowerName: "דפנה", colorPetals: "blue", colorCentralLeaf: "white"},
  {id: 6, flowerName: "רקפת", colorPetals: "red", colorCentralLeaf: "green"}];
  return (
    <div>
      <TodoList />
      <Header />
      {flowers.map((flower) => (
        <Flower key={flower.id} flowerName={flower.flowerName} colorPetals={flower.colorPetals} colorCentralLeaf={flower.colorCentralLeaf} />
      ))}
    
    </div>
  );
}
export default App
