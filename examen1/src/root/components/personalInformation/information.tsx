import React from "react";

function Information() {
  return (
    <div className="container-fluid mt-4" style={{ backgroundColor: "pink" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center mt-3 mb-9">
          <h3 className="mb-5">Personal Information</h3>
        </div>
        <div className="text-center">
          <h5>Hello lm Nikole Duarte Serrano.</h5>
          <br />
          <h5>lm 21 years old</h5>
          <br />
          <h5>lm a student at Universidad Nacional</h5>
          <br />
          <h5>I have been studying System Engineering for 3 years </h5>
        </div>
        <div className="text-center mb-4 mt-4">
          <div>
            <h5>Click here to see my linked profile!</h5>
          </div>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
          >
            https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile
          </a>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Information;
