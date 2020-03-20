import React, { Component } from 'react'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['OOP Languages: Java, Python, C#','Backend: SQL','Web development: React and HTML/CSS/JS','Math: Calculus 1-3, Statistics, Linear Algebra']
};
}
render() {
return (
<div className="condiv skills">
<h1 className="subtopic">My Skills</h1>
<ul>
{this.state.myskills.map((value)=>{
return <li>{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills