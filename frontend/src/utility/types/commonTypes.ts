import type { JSX } from "react";

export type SideNavItem = {
	title: string;
	path: string;
    indicator?: boolean,
	icon?: JSX.Element;
	submenu?: boolean;
	subMenuItems?: SideNavItem[];
  };