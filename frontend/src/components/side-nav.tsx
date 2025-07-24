import { useContext, useRef, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import clsx from "clsx";

import { Icons } from "./icons";
import type { SideNavItem } from "@/utility/types/commonTypes";
import { SIDENAV_ITEMS } from "@/utility/constants/side-nav-items";
import { SideNavToggleBtn } from "./side-nav-toggle-btn";
import { useSidebarMediaQuery } from "@/hooks/useSidebarMediaQuery";
import { useHandleClickOutside } from "@/hooks/useHandleClickOutside";
import HeaderBar from "./header-bar";

const SideNav = () => {
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const { isSmallScreen, sidebarOpen, setSidebarOpen } = useSidebarMediaQuery(
    "(min-width: 1100px)"
  );
  useHandleClickOutside(sideNavRef, isSmallScreen, () => setSidebarOpen(false));

  const toggleCollapse = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen w-full relative">
        <div
          ref={sideNavRef}
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
          className={clsx(
            "md:w-60 min-w-fit max-w-fit bg-white z-10 flex-1 border-r border-muted-background absolute sm:static h-screen overflow-y-auto",
            {
              "md:flex": sidebarOpen,
              hidden: !sidebarOpen,
            }
          )}
        >
          <div className="flex bg-background flex-col gap-4 w-[14rem] h-full">
            <div className="flex gap-4 items-center min-w-[8rem] h-16 p-3 border-b border-muted-background hidden sm:flex">
              <div className="w-full flex justify-between items-center text-xl font-bold ">
                Kanban
                <SideNavToggleBtn
                  toggleCollapse={toggleCollapse}
                  collapsed={sidebarOpen}
                  children={<Icons.panelLeftClose className="h-5 w-5" />}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 px-4 flex-grow">
              {" "}
              {/* Added flex-grow here */}
              <div className="h-16 flex items-center sm:hidden">
                <SideNavToggleBtn
                  toggleCollapse={toggleCollapse}
                  collapsed={sidebarOpen}
                  children={<Icons.panelLeftClose className="h-5 w-5" />}
                  className={clsx({ hidden: !sidebarOpen })}
                />
              </div>
              {SIDENAV_ITEMS.map((item: SideNavItem, idx: number) => {
                return <MenuItem key={idx} item={item} />;
              })}
            </div>
            <p className="text-sm font-normal m-auto p-4 tracking-wide">
              Patient Portal
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-auto">
          <HeaderBar collapsed={sidebarOpen} toggleCollapse={toggleCollapse} />
          <div className="overflow-y-auto flex-1 h-full p-4 m-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <div className="min-w-[10rem]">
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-md hover:bg-primary w-full justify-between  ${
              pathname.pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-3 items-center">
              {item.icon}
              <span className="font-medium text-sm flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icons.chevronDown width="16" height="16" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="ml-5 flex flex-col gap-1">
              {item.subMenuItems?.map((subItem: any, idx: any) => {
                return (
                  <Link
                    key={idx}
                    to={subItem.path}
                    className={clsx(
                      "flex flex-row space-x-3 font-normal text-sm min-w-[10rem] items-center p-2 px-4 rounded-md",
                      {
                        "bg-primary text-white":
                          subItem.path === pathname.pathname,
                        "hover:bg-primary/20":
                          subItem.path != pathname.pathname,
                      }
                    )}
                  >
                    {subItem.icon}
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.path}
          className={clsx(
            "relative flex flex-row space-x-3 min-w-[10rem] items-center p-2 rounded-md",
            {
              "bg-primary text-white": item.path === pathname.pathname,
              "hover:bg-primary/20": item.path != pathname.pathname,
            }
          )}
        >
          {item.icon}
          <div className="font-medium text-sm flex">{item.title}</div>
        </Link>
      )}
    </div>
  );
};
