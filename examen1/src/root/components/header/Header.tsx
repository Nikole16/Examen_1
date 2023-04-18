import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <nav className="navbar bg-light">
        <form className="container-fluid justify-content-center">
          <div className="navbar bg-light">
            <div className="me-auto">
              <Image
                src="/Nikole.png"
                alt="Imagen de logo"
                width={150}
                height={150}
                className="img-fluid rounded"
              />
            </div>
            <div className="d-flex">
              <button className="btn btn-outline-success me-2" type="button">
                Personal information
              </button>
              <button className="btn btn-outline-success me-2" type="button">
                Projects
              </button>
              <button className="btn btn-outline-success me-2" type="button">
                Call to action
              </button>
              <button className="btn btn-outline-success me-2" type="button">
                Contact
              </button>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Header;
