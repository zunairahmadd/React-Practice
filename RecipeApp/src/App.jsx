import { useState } from 'react'
import './App.css'
import Search from './component/Search';
import FoodList from './component/FoodList';
import NavBar from './component/NavBar';
import Container from './component/Container';
import InnerContainer from './component/InnerContainer';
import FoodDetail from './component/FoodDetail';


function App() {
  const [foodData,setFoodData]=useState([])
   const [foodId,setFoodId]=useState("716300")
  return <div className='App'>
    <NavBar/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container >
      <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData} />
      </InnerContainer>
      <InnerContainer>
        <FoodDetail foodId={foodId}/>
      </InnerContainer>
    </Container>
  </div>
}

export default App
