import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

function Header() {
  return (
    <div className="">
      Header
      <div>
        <Avatar sx={{ bgcolor: green[500] }}> AU </Avatar>
      </div>
    </div>
  );
}

export default Header;
