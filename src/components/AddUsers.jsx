import React from "react";
import { Button } from "react-bootstrap";

const AddUsers = () => {
  let userObj = {
    user: user,
    pass: password,
  };
  return (
    <>
      <div>
        <h2>AddUsers</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <Button variant="outline-dark">Light</Button>
      </div>
    </>
  );
};

export default AddUsers;
