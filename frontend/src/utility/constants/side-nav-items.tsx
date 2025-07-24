import { Icons } from "@/components/icons";
import type { SideNavItem } from "../types/commonTypes";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <Icons.home width="16" height="16" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icons.settings width="16" height="16" />,
  },
  // {
  //   title: 'Projects',
  //   path: '/projects',
  //   icon: <Icons.folder width="16" height="16" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: 'All', path: '/projects' },
  //     { title: 'Web Design', path: '/projects/web-design' },
  //     { title: 'Graphic Design', path: '/projects/graphic-design' },

  //   ],
  // },
];
