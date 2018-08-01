import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import { Jumbotron, Button, FormControl } from 'react-bootstrap';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        // Connect unity content to react
        // this paths here are relative to the index file
        this.unityContent = new UnityContent(
            "../game_build/Build/GameBuild.json",
            "../game_build/Build/UnityLoader.js"
        );

        this.state = {
            messageInput: ""
        }
    }

    sayHelloInUnity() {
        this.unityContent.send(
            "TextMessage",
            "updateText",
            this.state.messageInput
        );
    }

    inputChanged(e) {
        this.setState({
            messageInput: e.target.value
        })
    }

    setUnityCanvasAttribute(){
        // need to do this so that the canvas
        // will not eat all input, at the same time will take
        // input once focus is on it.
        let canvas = document.getElementById("#canvas");
        if(canvas){
            canvas.setAttribute("tabindex","1");
        }
    }

    render() {

        this.setUnityCanvasAttribute();

        return (
            <div className="container">
                <Jumbotron style={{ textAlign: "center" }}>
                    <h1>Unity3D inside ReactJS</h1>
                </Jumbotron>
                <div style={{ textAlign: "center" }} >
                    <FormControl type="text" style={{textAlign:"center"}} value={this.state.messageInput} placeholder="Tell Unity something" onChange={this.inputChanged.bind(this)} />
                    <Button onClick={this.sayHelloInUnity.bind(this)}>Communicate with Unity</Button>
                </div>
                <div tabIndex="1" >
                    <Unity unityContent={this.unityContent} />
                </div>
            </div>
        )
    }
}

export default MainPage;