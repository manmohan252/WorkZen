"use client";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen ">
      <Sidenav />
      <div className="flex flex-col flex-1  min-w-0">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-100 "><Outlet/></main>
      </div>
    </div>
  );
}
