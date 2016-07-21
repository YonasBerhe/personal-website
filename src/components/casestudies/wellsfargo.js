import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../global/nav'


import {Navbar, Nav, NavItem, NavDropdown,Button,MenuItem} from 'react-bootstrap';
const brandName = '';
const businessAddress = brandName;
import {Footer, Section} from 'neal-react';

class Wells extends React.Component {
  render() {
    return (
      <div>
	<Navigation />
	<div className="wells-case-study">

     <h1><i> My FirstHome</i></h1>
	
<p> Designing a mobile application for Wells Fargo's My First Home guide for people preparing
    purchase a home.
</p>
<img src="../images/2016_asset_header_wells_fargo.png" className="hero img-responsive" />
	<h2>   
	The Challenge
	</h2>
<h3>


Our goal was to transform Wells Fargo My FirstHome into a native mobile application. Wells Fargo wants to transform My FirstHome into a native application dedicated to helping first time home buyers through the process, of learning about home ownership, including securing a Wells Fargo mortgage. The application will take you through all aspects of the process -- from deciding if you are ready to buy, learning about homes and home loans, and what to expect when you apply, all the way to qualifying for a mortgage and owning and maintaining your new 
property.


</h3>

	<h2>
	Preliminary Research
	</h2>

	<h3>


 We started of by doing some domain research on home ownership in the United States to target understand our target demographic. We found that most people purchase or rent homes in pairs of 2, who make an income 75,000+ yearly, and homes purchased are usually for full sized families. 

After doing initial research we started to conduct user interviews with people who own a home, in the home buying process, or looking to purchase a home. 

</h3>

	<h2>Key Findings</h2>

	<h3>
In addition to learning about what it means to own a home

Avoid putting in birthday and social security number when getting mortgage quotes. 

Not willing to take an entire mortgage loan out on mobile would like to consult with bank representative.



</h3>


	<h2> Sketches, Wireframes and Design Concepts </h2>

	<h3>
	My team and I ran several design sketching sprints to come up with our intial designs. After my team agreed on final design modules, we created a clickable version of our sketches.
       </h3>
<Button href="http://bit.ly/1q3V3qV">Clickable Sketches</Button>


<img src="../images/Mobile_All_sketches.png" className="img-responsive" />



	<h3>
	Along side wireframing, we also started to explore inputing high resolution elements into our wireframes for better comprehension of our designs during usability testing.
	</h3>

<img src="../images/2016Cal_Results.png" className="img-responsive" />


	<h2>Development</h2>

	<h3>
Our next steps are mostly around user testing. We have given our users multiple ways to contact home mortgage consultants. We have given the user to call, video chat, text, and schedule an appointment with the mortgage consultant. We know our users want a personal way to contact mortgage consultant’s, but we need to test if they would like multiple options of contacting the mortgage consultants. We also need to test the frequency in which people are willing to schedule an appointment with a mortgage consultant. Our application doesn’t support people taking out a loan on our application, due to people not feeling secure about entering sensitive data into a mobile app.
	</h3>


<h2>
Delivery
</h2>
	<h3>
         My team and I delivered an all new design for the My FirstHome mobile application. The mobile application allows people to learn about what it means to purhase a home. It also allows people to schedule an appointment with a Home Mortgage Consultant. 


<img src="../images/phonesdouble.png" className="img-responsive" />


        </h3>	
<Button href="http://mlh8yy.axshare.com/01_01_00_home_page.html" bsStyle="info">Clickable Prototype</Button>

	</div>
	
	
	      <Footer brandName={brandName}
	     facebookUrl=""
	twitterUrl=""
	  githubUrl="">
       </Footer>
      </div>
    );
  }
}


export default Wells;
