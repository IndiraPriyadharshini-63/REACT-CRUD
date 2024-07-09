import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo192.png";
import {
  CContainer,
  CNavbar,
  CNavbarNav,
  CButton,
  CFormInput,
  CForm,
  CNavLink,
  CNavItem,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
  CDropdown,
  CCollapse,
  CNavbarToggler,
  CNavbarBrand,
} from "@coreui/react";

function Navbar() {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <>
  //     <CNavbar expand="lg" className="bg-body-tertiary" placement="fixed-top">
  //       <CContainer fluid>
  //         <CNavbarBrand href="#">Navbar</CNavbarBrand>
  //         <CNavbarToggler onClick={() => setVisible(!visible)} />
  //         <CCollapse className="navbar-collapse" visible={visible}>
  //           <CNavbarNav>
  //             <CNavItem>
  //               <CNavLink href="#" active>
  //                 Home
  //               </CNavLink>
  //             </CNavItem>
  //             <CNavItem>
  //               <CNavLink href="#">Link</CNavLink>
  //             </CNavItem>
  //             <CDropdown variant="nav-item" popper={false}>
  //               <CDropdownToggle color="secondary">
  //                 Dropdown button
  //               </CDropdownToggle>
  //               <CDropdownMenu>
  //                 <CDropdownItem href="#">Action</CDropdownItem>
  //                 <CDropdownItem href="#">Another action</CDropdownItem>
  //                 <CDropdownDivider />
  //                 <CDropdownItem href="#">Something else here</CDropdownItem>
  //               </CDropdownMenu>
  //             </CDropdown>
  //             <CNavItem>
  //               <CNavLink href="#" disabled>
  //                 Disabled
  //               </CNavLink>
  //             </CNavItem>
  //           </CNavbarNav>
  //           <CForm className="d-flex">
  //             <CFormInput type="search" className="me-2" placeholder="Search" />
  //             <CButton type="submit" color="success" variant="outline">
  //               Search
  //             </CButton>
  //           </CForm>
  //         </CCollapse>
  //       </CContainer>
  //     </CNavbar>
  //   </>
  // );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-felx justify-content-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active p-2">
              <a className="nav-link" href="/">
                Home{" "}
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="/create">
                Add Task
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="/create-event">
                Create Event
              </a>
            </li>
          </ul>
          <form className="form-inline mx-2 my-lg-0  ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary mx-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
