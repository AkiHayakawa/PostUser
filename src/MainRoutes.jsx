import React from "react";
import AddUsers from "./components/AddUsers";
import CreatePost from "./components/CreatePost";
import CardPost from "./components/CardPost";
import Details from "./components/Details";
import PostList from "./components/PostList";
import EditPost from "./components/EditPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<AddUsers />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
