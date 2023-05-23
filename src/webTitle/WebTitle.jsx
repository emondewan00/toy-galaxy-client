import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WebTitle = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Toy Galaxy";
    } else {
      document.title = `${loc.pathname.replace("/", "")} | Toy Galaxy`;
    }
    if (loc.state) {
      document.title = loc.state + " | Toy Galaxy";
    }
  }, [loc]);
};

export default WebTitle;
