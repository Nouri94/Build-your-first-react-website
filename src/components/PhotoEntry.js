import React from 'react'
import './master.css'

class PhotoEntry extends React.Component{

  render(){

    const image_path = "../images/" + this.props.src;

  return  <div className="photo-entry-block">
      <a href={image_path}>
        <img className="photp-img" src={image_path} alt={image_path} />
      </a>
      <h5>{this.props.caption}</h5>
      <h6>{this.props.location}</h6>
    </div>
}

}



export default PhotoEntry
