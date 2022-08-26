import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiBookOpen,
  HiOfficeBuilding,
  HiOutlineBriefcase,
  HiUserGroup,
} from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import useUserRole from "../../hooks/UseAddUserInfo/useUserRole";
import DashboardDrawer from "./DashboardDrawer";
import { IoIosArrowForward } from "react-icons/io";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [role] = useUserRole(user);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };
  return (
    <div className="mt-20 relative">
      <div className="mx-auto">
        <div className="drawer-side  z-20 bg-gradient-to-tl from-primary to-secondary h-screen fixed top-0 left-0">
          {/* <label htmlFor="my-drawer-2" className="drawer-overlay">
            zcdsdsa
          </label> */}

          <ul className="menu p-4 pt-20 overflow-y-auto w-64  text-base-content lg:block hidden">
            {role !== "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOfficeBuilding className="inline-block -translate-y-0.5"></HiOfficeBuilding>{" "}
                  company
                </Link>
              </li>
            )}
            {role !== "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/employee"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiUserGroup className="inline-block -translate-y-0.5"></HiUserGroup>{" "}
                  Employee
                </Link>
              </li>
            )}
            {role === "HR" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/jobpost"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                  job post
                </Link>
              </li>
            )}
            {role === "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                  Jobs
                </Link>
              </li>
            )}
            {role === "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="gig"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                  GIG
                </Link>
              </li>
            )}
            {role === "HR" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/response"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiBookOpen className="inline-block -translate-y-0.5"></HiBookOpen>{" "}
                  Response
                </Link>
              </li>
            )}
          </ul>
        </div>
        <button
          className="btn btn-primary rounded-r-full -ml-4 mb-4 pl-4 pr-2  hover:pl-12 duration-300 transition-all ease-in-out z-10 lg:hidden"
          onClick={toggleDrawer}
        >
          <IoIosArrowForward className="text-2xl"></IoIosArrowForward>
        </button>
        <DashboardDrawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
        <div className="container mx-auto lg:pl-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
