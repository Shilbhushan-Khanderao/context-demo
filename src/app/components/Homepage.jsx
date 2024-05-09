"use client";
import React from "react";
import Profile from "./Profile";
import { UserContext } from "./contextfile";

function Homepage() {
  return (
    <div>
      <UserContext.Provider value="Shilbhushan">
        <Profile />
      </UserContext.Provider>
    </div>
  );
}

export default Homepage;
