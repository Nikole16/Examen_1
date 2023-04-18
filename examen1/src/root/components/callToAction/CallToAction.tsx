import React from "react";

function CallToAction() {
  return (
    <div className="container text-center mt-5">
      <h3 className="mb-4">Call to Action</h3>
      <div className="row">
        <div className="col">
          <h5>Are you looking for an engineer to solve your problems?</h5>
          <button type="button" className="btn btn-outline-success mt-3 mb-3">
            Click here!
          </button>
          <br></br>
          <h5>And if you prefer enter your number and I will call you!</h5>
          <input
            className="mt-4"
            type="text"
            placeholder="Add your number"
          ></input>
        </div>
        <div className="col">
          <h5>
            If you do not want to share your number or call, send me an email
          </h5>
          <button type="button" className="btn btn-outline-success mt-3 mb-3">
            <a href="snikod0519@gmail.com">snikod0519@gmail.com</a>
          </button>
          <br></br>
          <h5>Or leave me your email and Ill be contacting you</h5>
          <input
            className="mt-4"
            type="text"
            placeholder="Add your email"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
