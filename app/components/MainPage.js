import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import {Jumbotron} from 'react-bootstrap';

class MainPage extends React.Component{
    constructor(props){
        super(props);

        // Connect unity content to react
        // this paths here are relative to the index file
        this.unityContent = new UnityContent(
            "../game_build/Build/Build.json",
            "../game_build/Build/UnityLoader.js"
        );
    }

    render(){
        return(
            <div className="container">
            <Jumbotron style={{textAlign:"center"}}>
                <h1>Unity3D inside ReactJS</h1>
                </Jumbotron>
            <div>Unity WebGL content will go here</div>
            <Unity unityContent={this.unityContent} />
            </div>
        )
    }
}

export default MainPage;