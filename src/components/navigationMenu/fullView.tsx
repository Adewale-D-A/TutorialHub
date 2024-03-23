import { useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import navItems from "../../assets/menuItem";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { toggleMenuView } from "../../stores/appFunctionality/navMenuFunctions";

//full view
function FullMenuView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //get side bar meny status from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  //toggle side bar menu using redux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  const logOut = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <div
      className={`flex h-screen overflow-y-auto flex-col justify-between gap-10 p-2 md:p-5 transition-all bg-white border-r border-gray-200 ${
        fullView ? "w-[300px]" : "w-16 md:w-24"
      }`}
    >
      {/* nav items section */}
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between items-center mt-5">
          <div className="flex items-center">
            <Link
              to={"/dashboard"}
              className="flex items-center justify-center h-10 w-10 aspect-square rounded-full overflow-hidden"
            >
              <img
                src={fullView ? "/logo512.png" : "/logo.png"}
                alt="logo"
                className="w-full h-auto"
              />
            </Link>
            W
          </div>
          {fullView && (
            <button
              type="button"
              title="toggle-bar"
              onClick={() => toggleMenu()}
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-8 h-8 text-gray-700 hover:text-primary_green-500 transition-all cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          )}
        </div>
        <div
          className={`flex flex-col gap-5 mt-10 ${
            fullView ? "justify-start" : "justify-center"
          }`}
        >
          {navItems?.map((items) => {
            return (
              <div key={items?.id} className="w-full group">
                <NavLink
                  to={items?.url}
                  className={({ isActive }) =>
                    isActive
                      ? `flex justify-between bg-primary-500/20 text-primary-secondary rounded-xl w-full p-2 md:p-3 hover:border hover:border-primary-500 hover:bg-transparent hover:text-primary-500 transition-all`
                      : "flex justify-between text-gray-500 rounded-xl w-full p-2 md:p-3 hover:bg-primary_green-500 hover:text-white transition-all"
                  }
                >
                  <div className="flex items-center gap-4">
                    {items?.icon}{" "}
                    {fullView && <span className=" ">{items?.label}</span>}{" "}
                  </div>
                  {items?.hasSubMenu && fullView && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </NavLink>
                {items?.hasSubMenu && fullView && (
                  <div className=" w-full ml-5 group-hover:my-4 transition-all">
                    {items?.subMenu.map((subItem) => {
                      return (
                        <Link
                          to={subItem?.url}
                          key={subItem?.id}
                          className=" text-gray-500 group-hover:flex hidden hover:text-primary_green-500"
                        >
                          <div className="flex items-center">
                            {subItem?.icon}{" "}
                            <span className=" ">{subItem?.label}</span>{" "}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* signout nav section */}
      <div className=" flex flex-col items-center gap-4">
        <div className=" flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
          </svg>
          <span className=" ">Support</span>
        </div>
        <button
          type="button"
          onClick={() => logOut()}
          className={`w-full flex items-center justify-center text-red-500 p-3 border-2 ${
            fullView ? "border-red-500" : ""
          } gap-4 rounded-lg hover:text-primary_green-500 hover:border-primary_green-500 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
          {fullView && <span className=" ">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default FullMenuView;
