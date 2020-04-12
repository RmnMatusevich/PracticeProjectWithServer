import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
import { setVisibilityThunk } from "./redux/actions/navActions";

const nav = {
  obj: ["Projects", "Guides", "Blog", "Training and Certification"],
};

function Navigation() {
  const dispatch = useDispatch();
  let visibility = useSelector((state) => state.nav.navigationVisibility);

  return (
    <nav>
      <Logo />
      <div className="mob-menu">
        <a
          href="#top"
          className="menu-button"
          onClick={() => dispatch(setVisibilityThunk(visibility))}
        >
          <span></span>
        </a>
        {visibility && (
          <ul className="mob-navigation">
            {visibility &&
              nav.obj.map((i) => {
                return <NavigationItem text={i} key={nav.obj.indexOf(i)} />;
              })}
          </ul>
        )}
      </div>
      <div className="menu">
        <ul className="navigation">
          {nav.obj.map((i) => {
            return <NavigationItem text={i} key={nav.obj.indexOf(i)} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
