import React from "react";
import "../styles/login.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

function FormPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Log in
                </h3>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                  <MDBIcon fab className="fa-google-plus-g white-text fa-lg" />
                </a>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your Username" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              {/* <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a href="#!" className="dark-grey-text ml-1 font-weight-bold">
                  Password?
                </a>
              </p> */}
              <MDBRow className="d-flex align-items-center mb-4 mt-5">
                <MDBCol md="8" className="d-flex align-items-start">
                  <div className="text-center">
                    <MDBBtn
                      color="grey"
                      rounded
                      type="button"
                      className="z-depth-1a"
                    >
                      Log in
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
