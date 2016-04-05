require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Sectionm, Team, TeamMember, Section} from 'neal-react';
import {Link} from 'react-router';

const brandName = "";


class AppComponent extends React.Component {
  render() {
    return (
      <div>

      <Navigation />;
      <Hero className="text-xs-center header-home">
           <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>

              <img src="../images/profileimage.jpg" alt="boohoo" className="img-responsive"></img>
          </Col>
            <Col xs={12} md={8}>
            <h1>Designer/Developer</h1>
            </Col>
          </Row>
        </Grid>
      </Hero>

    <Section className="subhero">
      <h1>
	Work
      </h1>


<Team>
 <TeamMember name="Collaborative Camping"  imageUrl="../images/REI_Photos_Chrome.png">

<Button  bsStyle="info"  href="#/rei">Read More...</Button>

</TeamMember>


 <TeamMember name="Collaborative Camping"  imageUrl="../images/phonesdouble.png">

<Button  bsStyle="info"  href="#/wellsfargo">Read More...</Button>

</TeamMember>

 <TeamMember name="Coming soon..."  imageUrl="../images/both.png">


</TeamMember>




</Team>


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

export default AppComponent;
