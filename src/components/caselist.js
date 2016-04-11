require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Sectionm, Team, TeamMember, Section} from 'neal-react';
import {Link} from 'react-router';

import json from './projects.json';

console.log(json.results[0].reiproject.image);

const brandName = "";


const Rei = React.createClass({

getInitialState() {
    return {
      title: '',
      previewtext: '',
      image: '',
      previewtext: '',
      link: ''
    };
  },

componentDidMount() {
  const myProjects = json.results[0];
   this.setState({ 
    title: myProjects.reiproject.title,
    previewtext: myProjects.reiproject.previewtext,
    image: myProjects.reiproject.image,
    link: myProjects.reiproject.link
    });
},



render() {
return(
<div>

<Grid>

 <Row className="show-grid case-list">
 <Col xs={12} md={4}>
<a href="#/rei/" className="preview-before">
    <img src={this.state.image} alt="collabrative camping" className="img-responsive"  />
</a>
<a className="rei-title-cases">{this.state.title}</a>
<h2> {this.state.previewtext}</h2>

 <Button bsStyle="info" href="http://yonasberhe.github.io/p2UXDIPrototype/#/screens/133617882" >Prototype</Button>
</Col>

 </Row>

</Grid>


</div>
)

}

})






const Wells = React.createClass({

getInitialState() {
    return {
      title: '',
      previewtext: '',
      image: '',
      previewtext: '',
      link: ''
    };
  },

componentDidMount() {
  const myProjects = json.results[0];
   this.setState({ 
    title: myProjects.wellsproject.title,
    previewtext: myProjects.wellsproject.previewtext,
    image: myProjects.wellsproject.image,
    link: myProjects.wellsproject.link
    });
},



render() {
return(
<div>

<Grid>

 <Row className="show-grid case-list">
 <Col xs={12} md={4}>
<a href="#/rei/" className="preview-before">
    <img src={this.state.image} alt="collabrative camping" className="img-responsive"  />
</a>
<a className="rei-title-cases">{this.state.title}</a>
<h2> {this.state.previewtext}</h2>
 <Button bsStyle="info" href="http://yonasberhe.github.io/p2UXDIPrototype/#/screens/133617882" >Prototype</Button>

</Col>

 </Row>

</Grid>


</div>
)

}

})












class Case extends React.Component {

  render() {
    return (
      <div>

      <Navigation />
    <Section className="subhero">

<Grid>
<Row className="show-grid">
      <Col md={6}><Wells /></Col>
      <Col mdPull={6}> <Rei /></Col>
    </Row>
</Grid>
     </Section>


      <Footer brandName={brandName}
          facebookUrl=""
          twitterUrl=""
          githubUrl="">
        </Footer>
      </div>
    );
  }
}
//
// AppComponent.defaultProps = {
// };

export default Case;
