import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./utils.css";
import {menuLeftData} from "./data";

const MasterLayout = ({ children }) => {
  let fullHeight = () => {
    window.$(".js-fullheight").css("height", window.$(window).height());
    window.$(window).resize(function () {
      window.$(".js-fullheight").css("height", window.$(window).height());
    });
  };
  fullHeight();

  const toggleLeftMenu = () => {
    window.$("#sidebar").toggleClass("active");
  };

  const [menuLefts, setMenuLefts] = useState(menuLeftData);

  const showMenuLeft = (id) => (e) => {
    e.preventDefault();
    const menuTemp = [...menuLefts];
    menuTemp[id - 1].active = true;
    menuTemp[id - 1].open = !menuTemp[id - 1].open;
    menuTemp[id - 1].linkClass = menuTemp[id - 1].open ? "dropdown-toggle" : "dropdown-toggle collapsed";
    menuTemp[id - 1].ulClass = menuTemp[id - 1].open ? "collapse list-unstyled show" : "collapse list-unstyled";
    setMenuLefts(menuTemp)
  };

  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="p-4 pt-5">
            <Link to={""} className="img logo rounded-circle mb-5" style={{ backgroundImage: `url("images/logo.jpg")` }}></Link>
            <ul className="list-unstyled components mb-5">
              {menuLefts.map((menu, key) => (
                <li key={key} className={menu.active ? "active" : ""}>
                  {menu.children?.length > 0 ? (
                    <Fragment>
                      <Link to={""} className={menu.linkClass} data-toggle="collapse" aria-expanded="false" onClick={showMenuLeft(menu.id)}>
                        {menu.text}
                      </Link>
                      <ul className={menu.ulClass} id="homeSubmenu">
                        {menu.children.map((child, keyChild) => (
                          <li key={keyChild}>
                            <Link to={"/"}>{child.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </Fragment>
                  ) : (
                    <Link to={"/"}>{menu.text}</Link>
                  )}
                </li>
              ))}

              {/* <li className="active">
              <Link to={""} className="dropdown-toggle" data-toggle="collapse" aria-expanded="false" onClick={showMenuLeft}>Home</Link>
                <ul className={menuLeftClass} id="homeSubmenu">
                  <li>
                    <Link to={"/"}>Home 1</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <a href="" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Pages
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    {" "}
                    <Link to={"/"}>Page 1</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"}>Page 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>Portfolio</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li> */}
            </ul>
          </div>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{ minWidth: "7rem" }}>
              <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={toggleLeftMenu}>
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
