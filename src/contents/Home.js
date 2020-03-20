import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../imgs/prof.png';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['I am Ali Kazmi. I am a CS student at Georgia Tech']} speed={100} eraseDelay={700}/>
</div>
)
}
}
export default Home