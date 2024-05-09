import React, { useContext } from "react";
import { UserContext } from "./contextfile";

function User() {
  const user = useContext(UserContext);
  return (
    <div className="justify-center align-middle">
      <h1 className="text-3xl text-center">
        This is value of user = {user} from Homepage Component
      </h1>
    </div>
  );
}

export default User;
