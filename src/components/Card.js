import React from "react";


const styles = {
  img: {
    width:150,
    height:200,
    margin:20
  }
}

function Card(props){
return <img style = {styles.img} src = {props.src} alt="..." class="img-thumbnail"></img>
}

export default Card;
