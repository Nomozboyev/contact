import { Link, Outlet } from "react-router-dom";
import "./sidebar.scss";

export let Sidebar = () => {
  return (
    <>
      <div className="conatainer">
        <div className="contactContainer">
          <div className="sidebarContact">
            <div className="formDiv">
              <input type="text" className="search input" />
              <button className="addBtn">ADD</button>
            </div>
            <ul className="contactList">
              <li className="contact">
                <Link to={"contact/1"}>Husniddin</Link>
              </li>
              <li className="contact">
                <Link to={"contact/2"}>Husniddin</Link>
              </li>
            </ul>
          </div>
          <div className="contactInformation">
         <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};
