import React, {Component} from "react";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header/index.js";
import Card from "./components/Card";
import villagers from "./villagers.json"

class App extends Component{
  state ={
    villagers,
    pickedVills:[],
    score: 0,
    alertMessage:""
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
   checkGuess = (name) => {
     const newState = { ...this.state };
  
     if (newState.pickedVills.includes(name)) {
       newState.alertMessage = `You already picked "${name.toUpperCase()}"!`
       newState.pickedVills = []
       this.setState({state: newState})
       console.log(newState)
     } else {
       newState.pickedVills.push(name)
       newState.alertMessage = "Correct!"
       
       this.setState({state: newState})
       console.log(newState)
     }
     
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
      <Header score = {this.state.score}>
      </Header>
        
        {this.state.villagers.map(villager=>(
          <Card
          id = {villager.id}
          key = {villager.id}
          name = {villager.name}
          image = {villager.image}
          handleClick = {this.handleClick}
          checkGuess = {this.checkGuess}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
