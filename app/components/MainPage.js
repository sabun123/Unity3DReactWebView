import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

class MainPage extends React.Component{
    constructor(props){
        super(props);

        // Connect unity content to react
        this.unityContent = new UnityContent(

        );
    }

    render(){
        return(
            <div>Unity WebGL content will go here</div>
        )
    }
}

export default MainPage;