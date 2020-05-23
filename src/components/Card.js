import React from "react";


const styles = {
  img: {
    width:150,
    height:200,
    margin:20
  }
}

// class Card extends Component {

// // handleClick(){
// // let score = 0
// // //when image is clicked, add 1 to score
// //   //document.getElementsByClassName('img-thumbnail').addEventListener('click', function(){
// //     score++
// //     console.log(score)
// //     return score
// // //});
// // }
// //  render (handleClick){ 
// //   return <button><img style = {styles.img}  src = {this.props.image} alt="..." class="img-thumbnail" onClick={handleClick}></img></button>

// //  }



// }

const Card = (props) =>(
  <button><img style = {styles.img}  
  src = {props.image} 
  alt="..." 
  class="img-thumbnail" 
  onClick={() => {props.handleClick();
  props.checkGuess(props.name); props.shuffleVillagers()}}></img>{props.name}</button>


)


export default Card;
