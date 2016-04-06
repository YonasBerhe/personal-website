require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Sectionm, Team, TeamMember, Section} from 'neal-react';
import {Link} from 'react-router';

import json from './projects.json';

console.log(json.results[0].reiproject);

const brandName = "";


const Rei = React.createClass({

getInitialState() {
    return {
      title: '',
      content: ''
    };
  },

componentDidMount() {
  const myProjects = json.results[0];
   this.setState({ 
  title: myProjects.reiproject.title,
  content: myProjects.reiproject.content
    });
},



render() {
return(
<div>
<h1>{this.state.title}</h1>
<h1>{this.state.content}</h1>
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
 <Rei /> 
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

export default Case;
