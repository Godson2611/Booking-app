import React from "react";
import footerData from "../data/footerData";

const Footer = () => {
  return (
    <footer className="black__color py-7">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6 mx-auto mt-5 text-center">
            <img className="mx-auto w-50" src={footerData.logo} alt="logo" />
            <p className="mt-3 text-white">{footerData.content}</p>
            <ul className="nav justify-content-between mt-3 md-0">
              {footerData.navitem.map((value, id) => (
                <li key={id} className="nav-item">
                  <a href="#" className="nav-link p-2 text-white">
                    {value.item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="list-inline my-3">
              {footerData.icon.map((icon, id) => (
                <li key={id} className="list-inline-item">
                  <a
                    href={icon.link}
                    className="btn bg-white btn-sm shadow px-2"
                  >
                    <i class={icon.name}></i>
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-light text-opacity-75 text-primary-hover mb-5">
              {footerData.rights.text}
              <a
                href={footerData.rights.link}
                className="text-light text-opacity-75 text-decoration-none ps-1"
              >
                {footerData.rights.linktext}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
