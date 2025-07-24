import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "./theme-provider";
import { SideNavToggleBtn } from "./side-nav-toggle-btn";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IHeaderBar {
  collapsed: boolean;
  toggleCollapse: () => void;
}

function HeaderBar(props: IHeaderBar) {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex justify-end border-b border-muted-background h-16 px-4 items-center",
        { "justify-between": !props.collapsed }
      )}
    >
      <SideNavToggleBtn
        toggleCollapse={props.toggleCollapse}
        collapsed={props.collapsed}
        children={<Icons.panelLeftOpen className="h-5 w-5" />}
        className={clsx({ hidden: props.collapsed })}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-center items-center gap-2 p-2 px-3 rounded-md cursor-pointer hover:bg-secondary/60">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full "
              style={{ width: "30px", height: "30px" }}
            >
              <Icons.user className="h-4 w-4" />
            </Button>
            <span className="text-sm font-bold">{"asnjasnakssn"}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {theme == "light" ? (
            <DropdownMenuItem
              className="gap-2"
              onClick={() => setTheme("dark")}
            >
              <Icons.moon
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                onClick={() => setTheme("dark")}
              />
              Dark Mode
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              className="gap-2"
              onClick={() => setTheme("light")}
            >
              <Icons.sun
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all light:-rotate-90 light:scale-0 "
                onClick={() => setTheme("light")}
              />
              Light Mode
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <Icons.logout className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all light:-rotate-90 light:scale-0 " />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HeaderBar;
