import React, {Component} from "react";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Card from "./components/Card";
import villagers from "./villagers.json"

class App extends Component{
  state ={
    villagers,
    pickedVills:[],
    score: 0,
    alertMessage:""
  }
 
handleClick = () => {
  //when image is clicked, add 1 to score
  console.log("the click is working")
  console.log(this.state.score)
  //if id doesnt equal id in pickedvills
  //for
  //if(this.id != )
  const newState = this.state.score + 1
  
    this.setState({score: newState}) 

  }

  // shuffleVillagers = () =>{
  //   this.setState(this.state.villagers = this.shuffleArray(this.state.villagers))
  //  }

  //  shuffleArray = (a) =>{
  //    var j,x,i;
  //    for (i=a.length-1; i>0;i--){
  //      j=Math.floor(Math.random()*(i+1))
  //      x=a[i]
  //      a[i]=a[j]
  //      a[j] = x
  //    }
  //    return a
  //  }
  //  checkGuess = (name, cb) => {
  //    const newState = { ...this.state };
  //    if (newState.pickedChars.includes(name)) {
  //      newState.alertMessage = `You already picked "${name.toUpperCase()}"!`
  //      newState.pickedChars = []
  //      this.setState(this.state = newState)
  //    } else {
  //      newState.pickedChars.push(name)
  //      newState.alertMessage = "Correct!"
  //      this.setState(this.state = newState)
  //    }
  //    cb(newState, this.alertWinner)
  //  }

  // updateTopScore = (newState, cb) => {
  //   if (newState.pickedChars.length > newState.topScore) {
  //     newState.topScore++
  //     this.setState(this.state = newState)
  //   }
  //   cb(newState)
  // }


  render(){
    return(
      <Wrapper>
        <Header></Header>
        {this.state.villagers.map(villager=>(
          <Card
          id = {villager.id}
          key = {villager.id}
          name = {villager.name}
          image = {villager.image}
          handleClick = {this.handleClick}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
