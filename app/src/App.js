import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Message from "./components/Message";
import Counter from "./components/Counter.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassFuncClick from "./components/ClassFuncClick.js";
import EventBind from "./components/BindEvent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name = "kondal" userName = "Batman" >
					<p>this is child components</p>
				</Greet>
				<Greet name ="kavitha" userName="SuperMan">
					<button>Add Sample child</button>
				</Greet>
				<Greet name ="Umaaa" userName="wornder woner"/>
				<Welcome name ="one" userName="FirstUser"/>
				<Welcome name ="two" userName="Second User"/>
				<Welcome name ="Three" userName="Third USerName"/> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name ="Umaaa" userName="wornder woner"/> */}
        {/* <Welcome name ="one" userName="FirstUser"/> */}
        {/* <FunctionClick /> */}
        {/* <ClassFuncClick /> */}
        <EventBind />
      </div>
    );
  }
}
export default App;
