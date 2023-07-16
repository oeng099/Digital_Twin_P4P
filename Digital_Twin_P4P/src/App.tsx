import React, { Component } from "react";

import MiPacket from "mipacket";
import Buffer from "buffer";

const packet = new MiPacket("5020aa0148ab90785634120d1004c2009402");
console.log(packet);

class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello.</h1>
            </div>
        );
    }
}
 
export default App;