import React from "react";
import NavBar from "./NavBar";
// import{Glyphicon} from react-Bootstrap;

const ContactUs = () => {
  return (
    <header className="contact-header">
      <div>
        <NavBar />
        <div className="contact">
          <div className="container-fluid bg-grey ">
            <h3 className="text-center h3">CONTACT</h3>
            <div>
              <div
                style={{
                  alignItems: "center",
                  paddingTop: "30px",
                  marginLeft: "40%",
                }}
              >
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p>
                  <span className="glyphicon map-marker-alt"></span> ABC,XYZ
                </p>
                <p>
                  <span className="glyphicon fas fa-mobile"></span> +92XXXXXXX
                </p>
                <p>
                  <span className="fas fa-envelope"></span>{" "}
                  myemail@something.com
                </p>
              </div>
              {/* <div className="col-md-3"> </div> */}
              {/* <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control contact-input"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control contact-input"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <textarea
                  className="form-control contact-textarea"
                  id="comments"
                  name="comments"
                  placeholder="Comment"
                  rows="5"
                ></textarea>
                <br />
                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button
                      className="btn btn-default  contact-btn"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default ContactUs;
