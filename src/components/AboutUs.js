import React from "react";
import NavBar from "./NavBar";
import BigetronAbout from "../images/BigetronAboutUs.png";
import {Link} from 'react-router-dom';
import GithubIcon from "../images/Github.png";
import LinkinIcon from "../images/Linkin.png";
// import Photo from "../images/logo.png";
import Logo from "../images/logo.png";
import ArrowDown from '../images/arrowDown.png'
const AboutUs = () => {
  if (localStorage.getItem("logged-in") === "false") {
    return (
      <React.Fragment>
        <h1>You have been logged out</h1>
        <h1>
          Please click <Link to={"/"}>here</Link> to return to login page
        </h1>
      </React.Fragment>
    );
  } else {
    return (
      <div className="About">
        <NavBar askButton="invisible" />
        <div>
          <div>
            <img src={BigetronAbout} className="Bigetron" alt="Bigetron" />
          </div>
          <div>
            <img
                              src={ArrowDown}
                              className='ArrowDown'
                              alt='Arrowdown'
                          />
          </div>
        </div>
        <div>
          <div className="content">
            <h2>
              THE DESIGNER AND WEB DEVELOPERS TRAINED AT IMPACT BYTE BATCH #9
              WHO OFFER THE FAQ WEBSITE.
            </h2>
          </div>
          <hr />
          <div className="content">
            <p>
              We pride on our progress and our process to learn at Impact Byte
              Incredible Igneel batch #9, so we can make this website come true.
              With the good teaching and all the situation to make us feel happy
              in this batch. the place, friends or the food. :D.
              <br />
              <br />
              Thanks to all team of ImpactByte.
            </p>
            <h2>LETS MEET OUR TEAM</h2>
          </div>
          <hr />
        </div>
        <div className="ourTeam">
          <table>
            <td>
              <tr>
                <div className="AboutContent">
                  <div
                    className="AditPhoto"
                    style={{ width: "300px", height: "300px" }}
                  />
                  {/* <img
                                          classname='AditPhoto'
                                          src={PhotoAdit1}
                                          alt='Adit' */}

                  {/* /> */}
                </div>
                <div className="AboutContent2">
                  <h3>Adit Ilham Nugroho</h3>
                  <p> As Lead Project & Full Stack Developers</p>
                  <p>
                    <a href="https://github.com/aditilham">
                      <img className="Githubicon" src={GithubIcon} alt="icon" />
                    </a>{" "}
                    <a href="https://id.linkedin.com/in/adit-ilham">
                      <img className="Linkinicon" src={LinkinIcon} alt="icon" />
                    </a>
                  </p>
                </div>
              </tr>
              <tr>
                <div className="AboutContent">
                  <div
                    className="ZakyPhoto"
                    style={{ width: "300px", height: "300px" }}
                  />
                  {/* <img
                                          classname='ZakyPhoto'
                                          src={PhotoZaky1}
                                          alt='Zaky'
                                      /> */}
                </div>
                <div className="AboutContent2">
                  <h3>Abdullah Zaky </h3>
                  <p> As Designer & Front End Developers </p>
                  <p>
                    <a href="https://github.com/zakysyahab14">
                      <img className="Githubicon" src={GithubIcon} alt="icon" />
                    </a>{" "}
                    <a href="https://www.linkedin.com/in/zakysyahab14/">
                      <img className="Linkinicon" src={LinkinIcon} alt="icon" />
                    </a>
                  </p>
                </div>
              </tr>
              <tr>
                <div className="AboutContent">
                  <div
                    className="TriPhoto"
                    style={{ width: "300px", height: "300px" }}
                  />
                  {/* <img
                                          classname='TriPhoto'
                                          src={Photo}
                                          alt='Tri'
                                      /> */}
                </div>
                <div className="AboutContent2">
                  <h3>Tri Kusuma Atmaja</h3>
                  <p> As Back End Developers</p>
                  <p>
                    <img className="Githubicon" src={GithubIcon} alt="icon" />{" "}
                    <img className="Linkinicon" src={LinkinIcon} alt="icon" />
                  </p>
                </div>
              </tr>
            </td>
            <td>
              <tr>
                <div className="AboutContent">
                  <div
                    className="KhrisnaPhoto"
                    style={{ width: "300px", height: "300px" }}
                  />
                  {/* <img
                                          classname='KhrisnaPhoto'
                                          src={PhotoKhirsna1}
                                          alt='Krishna'
                                      /> */}
                </div>
                <div className="AboutContent2">
                  <h3>Farhan Krishna Rowter</h3>
                  <p> As Full Stack Developers</p>
                  <p>
                    <a href="https://github/krowter">
                      <img className="Githubicon" src={GithubIcon} alt="icon" />
                    </a>{" "}
                    <a href="https://id.linkedin.com/in/krowter">
                      <img className="Linkinicon" src={LinkinIcon} alt="icon" />
                    </a>
                  </p>
                </div>
              </tr>
              <tr>
                <div className="AboutContent">
                  <div
                    className="DarrenPhoto"
                    style={{ width: "300px", height: "300px" }}
                  />
                  {/* <img
                                          classname='DarrenPhoto'
                                          src={Photo}
                                          alt='Darren'
                                      /> */}
                </div>
                <div className="AboutContent2">
                  <h3>Christopher Darren Gobel </h3>
                  <p> As Front Developers</p>
                  <p>
                    <img className="Githubicon" src={GithubIcon} alt="icon" />{" "}
                    <img className="Linkinicon" src={LinkinIcon} alt="icon" />
                  </p>
                </div>
              </tr>
            </td>
          </table>
        </div>
        <hr />
        <div className="footer">
          <h3> Contact Us </h3>
          <p>
            <img className="Logo" src={Logo} alt="logo" />{" "}
          </p>
          <p> Gadget Fraqs © 2019 </p>
        </div>
      </div>
    );
  }
};

export default AboutUs;
