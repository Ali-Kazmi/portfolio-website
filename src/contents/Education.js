import React, { Component } from 'react';
import Mybox from '../components/Mybox';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Education</h1>
 <Mybox title="B.S Computer Science" where="Georgia Tech" from="August 2019" to="Present"/>
 <p><span></span></p>
 <Mybox title="High School" where="Evergreen Valley High School" from="2015" to="2019"/>
</div>
)
}
}
export default Education