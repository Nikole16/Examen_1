import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="Contact">
              <a href="#">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                  alt="Facebook"
                  width="90"
                  height="90"
                  className="rounded-circle"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/instagram-512.png"
                  alt="Instagram"
                  width="90"
                  height="90"
                  className="rounded-circle"
                />
              </a>
            </div>
            <div className="text-center p-3">
              Contact with me 84464949/86373763
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
