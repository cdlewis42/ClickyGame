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

  
handleClick = (event) => {
  //when image is clicked, add 1 to score
    //document.getElementsByClassName('img-thumbnail').addEventListener('click', function(){
      console.log("this is being passed as props correctly")
      const name = event.target.attributes.getNamedItem("name").value
      this.shuffleCharacters()
      this.checkGuess(name,this.updateScore)

  //});
  }

  shuffleVillagers = () =>{
    this.setState(this.state.villagers = this.shuffleArray(this.state.villagers))
  }

  shuffleArray = (a) =>{
    var j,x,i;
    for (i=a.length-1; i>0;i--){
      j=Math.floor(Math.random()*(i+1))
      x=a[i]
      a[i]=a[j]
      a[j] = x
    }
    return a
  }

  render(){
    return(
      <Wrapper>
        <Header></Header>
        {this.state.villagers.map(villager=>(
          <Card
          id = {villager.id}
          name = {villager.name}
          image = {villager.image}
          handleClicked = {this.handleClicked}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
