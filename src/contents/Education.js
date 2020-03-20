import React, { Component } from 'react';
import mybox from '../components/mybox';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Education</h1>
<mybox title="BS Computer Science" where="Georgia Tech" from="August 2019" to="Present"/>
<mybox title="High School" where="Evergreen Valley High School" from="2015" to="2019"/>
</div>
)
}
}
export default Education