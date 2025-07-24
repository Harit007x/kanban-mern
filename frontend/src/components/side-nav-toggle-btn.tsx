interface SideNavToggleBtnProps {
  toggleCollapse: () => void;
  collapsed: boolean;
  children: any;
  className?: string;
}

export const SideNavToggleBtn = (props: SideNavToggleBtnProps) => {
  return (
    <div
      onClick={props.toggleCollapse}
      className={`hover:bg-primary/20 p-1 w-fit h-fit rounded-md cursor-pointer ${props.className}`}
    >
      {props.children}
    </div>
  );
};
