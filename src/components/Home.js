require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';
import {
    Grid, Row, Col, Button
}
from 'react-bootstrap';

import {
    Hero, Footer, Sectionm, Team, TeamMember, Section
}
from 'neal-react';
import {
    Link
}
from 'react-router';

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
            return (
                <div>

<a href="#/rei/" className="preview-before">
    <img src={this.state.image} alt="collabrative camping" className="img-responsive"  />
</a>
<a  href="#/rei/"  className="rei-title-cases">{this.state.title}</a>
<h2  className= "preview-text"> {this.state.previewtext}</h2>
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
            return (
                <div>

    <a href="#/wellsfargo/" className="preview-before">
    <img src={this.state.image} alt="collabrative camping" className="img-responsive"  />
</a>
<a href="#/wellsfargo/"  className="rei-title-cases">{this.state.title}</a>
<h2  className= "preview-text"   > {this.state.previewtext}</h2>

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
        <Button  bsSize="large" href="https://drive.google.com/open?id=0ByLF6RAXaUGjQmNTTGhRcWJKRDQ">Resume</Button>
        
        </Col>
    </Row>
  </Grid>
           </Section>


    <Section className="subhero home-work">
      
        <h1>Design Work</h1>
<Grid>
<Row className="show-grid">
      <Col md={6} mdPush={6}><Wells /></Col>
      <Col md={6} mdPull={6}> <Rei /></Col>
    </Row>
   </Grid>





   </Section>

    <Section className="subhero home-work-development">
      
        <h1>Development Work</h1>



        <Team>
            <Link to="http://www.google.com"  activeStyle={{color:"#ffc06c"}}>

    http://bavotasan.com/2011/amazing-hover-effects-with-css3/ 
            <TeamMember name="Personal Website" title="With React" imageUrl="../images/projectsreact.png">
                My personal website is built on top of React.js. Technolgies used: React, React-router, Node
            </TeamMember>
    </Link>
   <TeamMember name="New RSS" title="WebGL" imageUrl="../images/myproject.gif">
                At angelhack I help build a virtual experience to view news. i used
                webGL, HTML, and CSS.
                   </TeamMember>

                </Team>
      </Section>

      <Footer brandName={brandName}
          facebookUrl=""
          twitterUrl="twitter.com/sanoysanoy"
          githubUrl="github.com/yonasberhe">
        </Footer>
      </div>
            );
        }
    }
    //
    // AppComponent.defaultProps = {
    // };

export
default Home;
