import React, {Component} from 'react';
import axios from 'axios';

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    }
 }

  state = {
    image: []
  }

  componentDidMount(props){

     var url = 'https://picsum.photos/id/' + this.state.id + '/info';  
     axios.get(url)
     .then(res => {
       this.setState(res.data);
     })
  }

  render(){
    const img = this.state;
    console.log(img.url);
      return(
      <div className="icard">
      <img src={img.download_url} alt="pic" crossorigin="null"/>
      <h1 style={{color: "black",fontSize: "20px"}}>Author</h1>
      <h1>{img.author}</h1>
      <button><a href={img.download_url} download>Download</a></button>
</div>
      );
  }
}

export default Card;