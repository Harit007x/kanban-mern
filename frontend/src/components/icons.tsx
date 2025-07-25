import {
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ArrowDownUp,
  Check,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronsDown,
  ChevronsUp,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  type LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  Home,
  UserRound,
  Folder,
  Mail,
  HelpCircleIcon,
  LogOut,
  Link2,
  ListFilter,
  Clipboard,
  ClipboardCheck,
  CircleX,
  Calendar,
  Trophy,
  Medal,
  SendHorizonal,
  MessageCircle,
  MessageCircleOff,
  MessageSquareQuote,
  MessageSquareOff,
  MessageSquare,
  MessageCircleMore,
  MessageCircleQuestion,
  BarChart2,
  Phone,
  Menu,
  CircleCheck,
  NotebookPenIcon,
  FilterIcon,
  Pencil,
  KeyRound,
  CloudUpload,
  ArchiveRestore,
  PanelLeftOpen,
  PanelLeftClose,
  AlarmClock,
  ArrowDownToLine,
  ScanEye,
  CircleCheckBig,
  Timer,
  SendHorizontal,
  Eye,
  EyeOff,
  MessageSquareMore,
  Square,
  SquareCheck,
  FileOutput,
  FileInput,
  Pill,
  Hospital,
  CircleArrowUpIcon,
  CircleArrowDownIcon,
  Archive,
  Fullscreen,
  FileDown,
  FileUp,
  MessageSquarePlus,
  EllipsisVertical,
  Search,
  Bookmark,
  BookmarkX,
  History,
  Users,
  UserRoundCog,
  LockKeyholeOpen,
  LockKeyhole,
  FileClock,
  ScrollText,
  FileX2,
  Syringe,
  ArrowUpDown,
  ShieldPlus,
  UserPlus,
} from "lucide-react";

export const Icons = {
  logo: Command,
  x: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  chevronsDown: ChevronsDown,
  chevronsUp: ChevronsUp,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  arrowDownUp: ArrowDownUp,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  home: Home,
  userRound: UserRound,
  folder: Folder,
  mail: Mail,
  helpCircle: HelpCircleIcon,
  logout: LogOut,
  link2: Link2,
  listFilter: ListFilter,
  clipBoard: Clipboard,
  clipboardCheck: ClipboardCheck,
  circleX: CircleX,
  calender: Calendar,
  trophy: Trophy,
  medal: Medal,
  send: SendHorizonal,
  messageCircle: MessageCircle,
  messageCircleOff: MessageCircleOff,
  messageSquareQuote: MessageSquareQuote,
  messageSquareOff: MessageSquareOff,
  messageSquare: MessageSquare,
  messageCircleMore: MessageCircleMore,
  messageCircleQuestion: MessageCircleQuestion,
  barChart2: BarChart2,
  phone: Phone,
  menu: Menu,
  circleCheck: CircleCheck,
  notebookPenIcon: NotebookPenIcon,
  filter: FilterIcon,
  pencil: Pencil,
  keyRound: KeyRound,
  cloudUpload: CloudUpload,
  archiveRestore: ArchiveRestore,
  panelLeftOpen: PanelLeftOpen,
  panelLeftClose: PanelLeftClose,
  alarmClock: AlarmClock,
  downloadArrow: ArrowDownToLine,
  scanEye: ScanEye,
  circleCheckBig: CircleCheckBig,
  timer: Timer,
  sendHorizontal: SendHorizontal,
  eye: Eye,
  eyeOff: EyeOff,
  messageSquareMore: MessageSquareMore,
  square: Square,
  squareCheck: SquareCheck,
  fileOutput: FileOutput,
  fileInput: FileInput,
  archive: Archive,
  hospital: Hospital,
  pill: Pill,
  circleArrowUpIcon: CircleArrowUpIcon,
  circleArrowDownIcon: CircleArrowDownIcon,
  fullScreen: Fullscreen,
  fileDown: FileDown,
  fileUp: FileUp,
  messageSquarePlus: MessageSquarePlus,
  ellipsisVertical: EllipsisVertical,
  search: Search,
  bookmark: Bookmark,
  bookMarkX: BookmarkX,
  history: History,
  users: Users,
  userRoundCog: UserRoundCog,
  lockKeyholeOpen: LockKeyholeOpen,
  lockKeyhole: LockKeyhole,
  fileClock: FileClock,
  fileX2: FileX2,
  scrollText: ScrollText,
  syringe: Syringe,
  arrowUpDown: ArrowUpDown,
  shieldPlus: ShieldPlus,
  userPlus: UserPlus,

  checkSVG: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
      />
    </svg>
  ),
  pin: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pin"
      {...props}
    >
      <path d="M12 17v5" />
      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </svg>
  ),
  unpin: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pin-off"
      {...props}
    >
      <path d="M12 17v5" />
      <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" />
      <path d="m2 2 20 20" />
      <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" />
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  check: Check,
};
