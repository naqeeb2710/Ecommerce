import React from "react";
import Footer from "../Footer/Footer";

const paraStyle ={
	textAlign: "center",
    fontSize: "1.4rem",
	lineHeight: "2",
    margin: " 0 5.5%"
}
const divStyle1 ={
	backgroundColor: "#035397",
    padding: " 5% 0",
    color: "white",
}

const divStyle2 ={
	backgroundColor: "#ffff",
    padding: " 5% 0",
    color: "#035397",
}
function About() {
  return (
    <div style={{backgroundColor:'#ffff'}}>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7" style={{ marginLeft: "160px" }}>
            <h1
              class="font-weight-light"
              style={{ textAlign: "center", marginLeft: "-211px", padding:"2% 2% 0 2%", fontSize:"3rem", color:"#FFAA4C" }}>About Us
            </h1>
            <img
			  style={{padding:"3% 5%"}}
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://mytechdecisions.com/wp-content/uploads/2018/10/artificial_intelligence_robot_thinking.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <br />
            <div
              style={divStyle1}
            >
              <p
                style={paraStyle}
              >
                We at ElectroTech. believe in a 360-degree approach for our
                clients to provide a hassle-free platform for various products
                and center. We provide the widest range of robotics products on
                our portal/Additional to this we believe in full client
                satisfaction with respect to post-sales services. we also have a
                dedicated team to assist in all sort of technical projects
                either it is industrial or academic. The goal of electrotech
                India is to develop efficient and cost effective electronics
                solutions for robotic applications that may be used in
                industrial application, hobby applications, educational purposes
                and use in various other research and development effort
              </p>
            </div>
            <br />
            <div
              style={divStyle2}
            >
              <p
                style={paraStyle}
              >
                The obvious question is What is electrotech? But an even more
                important question is why does electrotech exist? Why did we
                start this company? The goal of electrotech India is to develop
                efficient and cost effective electronics solutions for robotic
                applications that may be used in industrial application, hobby
                applications, educational purposes and use in various other
                research and development efforts. It is a one stop shop for all
                your Robotics, its allied fields and do it your self learning
                kits and products. We try at providing a tussle free and
                pleasant shopping experience to all our users. We provide the
                widest range of robotics products on our portal. We are making a
                serious effort to bring the supremacy of education and knowledge
                to our buyers with a collection of latest and technically
                manipulative products. Most of our products are very
                unconventional and custom designed keeping our client base in
                mind. We have one of the best integrated systems for buyers and
                for business oriented people or community as well in our
                affiliate program.
              </p>
            </div>
            <br />
            <div
              style={divStyle1}
            >
              <p
                style={paraStyle}
              >
                At ElectroTech, we only believe in 'Customer Satisfaction'. All
                the services that we provide are redirected towards it. We are
                the biggest e-commerce platform of educational robotics modules
                and tools. We have a huge array of technicians and engineers who
                dedicatedly work 24X7 to avail the system at our buyer's
                disposal. We work on a very interactive system which enables our
                customers to be updated profoundly throughout the life-cycle of
                their order. Our products are widely known, appreciated and
                demanded for its long-lasting nature, reliability, ease of
                operation and robust construction. In addition, we also have
                availability of separate stock for urgent needs and requirements
                of our esteem customers.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
