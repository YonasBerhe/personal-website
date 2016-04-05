import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../global/nav'


import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
const brandName = 'hello world';
const businessAddress = brandName;
import {Footer, Section} from 'neal-react';

class Rei extends React.Component {
  render() {
    return (
      <div>
	<Navigation />
	<div className="rei-case-study">

     <h1> REI Case Study  </h1>
	
<p> REI design sprint to create a better collabrotive planning<br />experience on REI.com</p>
<img src="../images/2016_asset_header.png" className="hero img-responsive" />
	<h3>
Recreational Equipment, Inc., commonly known as REI, is a privately held American retail corporation organized as a consumers' cooperative, selling outdoor recreation gear, sporting goods, and clothing via some retail stores in states, catalogs, and the Internet.
	</h3>

	<h2>   
	The Challenge
	</h2>
	<h3>
Allow users to discover and book (if applicable) other outdoor activities to take part in while camping. Provide an interactive trip checklist based on location, time of year, age of campers, types of activities planned, number of campers in group, and any other important criteria that arises during user research. Provide a way for multiple campers to plan all aspects of a trip together.
	</h3>

	<h2>
	Preliminary Research
	</h2>

	<h3>
	Since I knew that other competitors existed in the market that provide camping equipment, I started of doing a competitive analysis and heuristic evaluation on a few of REI competitors. Doing a competitive analysis gave me a real understanding of what it means to plan for a camping trips. After doing some initial preliminary domain research, I started looking for people to interview. I created a screener to get some initial information about my target demographic. After the screener, I chose a few participants to help in my research. I then created a user interview script to get a real understanding of the participants background camping.
	</h3>

	<h2>Key Findings</h2>

	<h3>
	My data supported information about people from the ages of 25-35 with a college education. I found that most people who have went camping have parents, or relatives that they have went camping with. I also found that this demographic had a hard time going camping due to the fact they couldn’t access equipment. They found that purchasing equipment was not worth it, too expensive, and just cluttered up space. I also found that people need the same items to go camping, they at least needed the bare minimum items to go camping.
	</h3>


	<h2> Sketches, Wireframes and Design Concepts </h2>

	<h3>
	Since the majority of people I spoke too wanted the same minimum items, I decided to design a planning experience that entirely revolved around camping kits.
	</h3>

<img src="../images/20160302_Iteration_on_delete.png" className="img-responsive" />

	<h3>
	Along side wireframing, I also started to explore inputing high resolution elements into my wireframes for better comprehension of my designs during usability testing.
	</h3>

	<h2>Development</h2>

	<h3>
	Since this design allows a user to plan almost every aspect of their camping trip, the state and progress of their planning process should always be viewable. Currently my design now only gives the user a summary of what they have purchased during the checkout process. The next step would be to design pages that allow users to check what items they have purchased, what items they’re missing and check what camping sites they’re planning on camping at.
	</h3>


<h2>
Delivery
</h2>

	<h3>
	I designed an entire process for planning for camping trip collaboratively. Users can purchase camping kits, invite others to collaborate on their camping kit and purchase a camping site.
	</h3>
<img src="../images/REI_Photos_Chrome.png" className="img-responsive" />
 <Button href="http://yonasberhe.github.io/p2UXDIPrototype/#/screens/133617882" bsStyle="info"> Clickable Prototype</Button>
	</div>
	
	
	      <Footer brandName={brandName}
	     facebookUrl="http://www.facebook.com"
	twitterUrl="http://www.twitter.com/dennybritz"
	  githubUrl="https://github.com/dennybritz/neal-react">
       </Footer>
      </div>
    );
  }
}


export default Rei;
