import React, { createContext, useState, useCallback } from "react";
const AppContext = createContext<any>(null);
export const AppProvider = (props: any) => {
  //topnav controller
  const [navDark, setNavDark] = useState(false);
  const [navActive, setNavActive] = useState("home");
  const handleClick = useCallback(
    (e: any) => {
      setNavActive(e.target.id);
      setHamburger(false);
      setMenu(false);
    },
    [setNavActive]
  );

  const navbg = () => {
    if (window.scrollY >= 140) {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  };

  window.addEventListener("scroll", navbg);

  //hamburger controller
  const [hamburger, setHamburger] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleMenu = useCallback(() => {
    setHamburger(!hamburger);
    if (hamburger) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, [setHamburger, hamburger, setMenu]);

  const [topOn, setTopOn] = useState(false);
  const handleTopOn = useCallback(() => {
    setTopOn(true);
  }, [setTopOn]);

  const stateActions = {
    handleClick,
    handleMenu,
    handleTopOn,
    setTopOn,
  };
  return (
    <AppContext.Provider
      value={{ navDark, menu, topOn, hamburger, navActive, ...stateActions }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
