import ReactDOM from "react-dom";

import React, { Component } from "react";

import video from '../src/assets/Aerial Shot Of Sunset.mp4';









class VideoPlayer extends React.Component{

  constructor(props){

    super(props);

    this.videoRef=React.createRef();

  }



  playVideo=()=>{

    this.videoRef.current.play();

  }



  pauseVideo=()=>{

    this.videoRef.current.pause();

  }

  render(){

    return(

      <div>

        <video ref={this.videoRef} width="300" height="200" controls>

          <source src={video} type="video/mp4"></source>

        </video>

        <div>

           <button onClick={this.playVideo}>Play</button>  

           <button onClick={this.pauseVideo}>Pause</button>  

        </div>        

      </div>

    );

  }

}
const element=<VideoPlayer></VideoPlayer>
ReactDOM.render(element,document.getElementById("root"));