require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Sectionm, Team, TeamMember, Section} from 'neal-react';
import {Link} from 'react-router';

const brandName = "";


import json from './projects.json';


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
 
</Col>

 </Row>

</Grid>


</div>
)

}

})





class Home extends React.Component {

  render() {
    return (
      <div>

          <Navigation />

      <Hero className="text-xs-center header-home">

      <h1>Yonas Berhe</h1> 
      <h2>Designer/Developer</h2>

      </Hero>

    <Section className="subhero home-section">


<Grid>
    <Row className="show-grid">
        <Col md={6} mdPush={6}>

            <h2> Design, Build, Deliver</h2>
            <h4>User research is one of my favorite parts about designing a user experience. I have a keen eye for generating insights from user research data. I like understanding the psychology of the user, and the mesh of psychology and technology is central to the practice of user experience design. I also understand how to write software and speak to developers about user experience design requirements.</h4>  </Col>
        <Col md={6} mdPull={6}><span ><img className="img-responsive" src="../images/aboutme.jpg" /></span>
        <Button  bsSize="large" href="google.com">Resume</Button>
        
        </Col>
    </Row>
  </Grid>
           </Section>


    <Section className="subhero home-work">
      
        <h1>Design Work</h1>
<Grid>
<Row className="show-grid">
      <Col md={6}><Wells /></Col>
      <Col mdPull={6}> <Rei /></Col>
    </Row>
    <Row className="show-grid">
      <Col md={6}><Wells /></Col>
      <Col mdPull={6}> <Rei /></Col>
    </Row>

</Grid>


   </Section>

    <Section className="subhero home-work-development">
      
        <h1>Development Work</h1>


           <Section>
        <Team>
          <TeamMember name="Member 1" title="Co-founder" imageUrl="http://s16.postimg.org/czo9bgps5/wells_display.png">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 2" title="Co-founder" imageUrl="img/people/boo.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 3" title="Co-founder" imageUrl="img/people/panda.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
        </Team>
      </Section>


   </Section>





      <Footer brandName={brandName}
          facebookUrl="http://www.facebook.com"
          twitterUrl="http://www.twitter.com/dennybritz"
          githubUrl="https://github.com/dennybritz/neal-react">
        </Footer>
      </div>
    );
  }
}
//
// AppComponent.defaultProps = {
// };

export default Home;
