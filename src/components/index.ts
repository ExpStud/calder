import dynamic from "next/dynamic";
//animations
const TextSlidingAnimation = dynamic(() => import("./@animations/TextSlidingAnimation"));

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeArtIcon = dynamic(() => import("./@icons/ExchangeArtIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const ConnectWalletIcon = dynamic(() => import("./@icons/ConnectWalletIcon"));
const AudioControlIcon = dynamic(() => import("./@icons/AudioControlIcon"));
const CornerTopLeftIcon = dynamic(() => import("./@icons/CornerTopLeftIcon"));
const CornerTopRightIcon = dynamic(() => import("./@icons/CornerTopRightIcon"));
const CornerBottomLeftIcon = dynamic(() => import("./@icons/CornerBottomLeftIcon"));
const CornerBottomRightIcon = dynamic(() => import("./@icons/CornerBottomRightIcon"));
const StackIcon = dynamic(() => import("./@icons/StackIcon"));
const SearchIcon = dynamic(() => import("./@icons/SearchIcon"));
//atoms
const DropdownButton = dynamic(() => import("./atoms/DropdownButton"));
const DropdownItem = dynamic(() => import("./atoms/DropdownItem"));
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const Button = dynamic(() => import("./atoms/Button"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadAnimation = dynamic(() => import("./atoms/LoadAnimation"));
const LoadCircle = dynamic(() => import("./atoms/LoadCircle"));
const TabBarItem = dynamic(() => import("./atoms/TabBarItem"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const ConnectWalletButton = dynamic(() => import("./atoms/ConnectWalletButton"));
const AudioControlButton = dynamic(() => import("./atoms/AudioControlButton"));
const Divider = dynamic(() => import("./atoms/Divider"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const TabBar = dynamic(() => import("./molecules/TabBar"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./organisms/HeaderContent"));
const FooterLinks = dynamic(() => import("./molecules/FooterLinks"));
const NavigationDropdown = dynamic(() => import("./molecules/NavigationDropdown"));
const NavigationContent = dynamic(() => import("./molecules/NavigationContent"));
const AudioControlDropdown = dynamic(() => import("./molecules/AudioControlDropdown"));
const AudioControlDisplay = dynamic(() => import("./molecules/AudioControlDisplay"));
const AudioControlActions = dynamic(() => import("./molecules/AudioControlActions"));
const SubstanceGoal = dynamic(() => import("./molecules/SubstanceGoal"));
const AccordionWrapper = dynamic(() => import("./molecules/AccordionWrapper"));
const TeamSelect = dynamic(() => import("./molecules/TeamSelect"));
const TeamDisplay = dynamic(() => import("./molecules/TeamDisplay"));
const GallerySorting = dynamic(() => import("./molecules/GallerySorting"));
const GalleryImageItem = dynamic(() => import("./molecules/GalleryImageItem"));
const GalleryItemLore = dynamic(() => import("./molecules/GalleryItemLore"));
const GalleryItemBar = dynamic(() => import("./molecules/GalleryItemBar"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
const Menu = dynamic(() => import("./organisms/Menu"));
const Navigation = dynamic(() => import("./organisms/Navigation"));
const AudioControl = dynamic(() => import("./organisms/AudioControl"));
const Accordion = dynamic(() => import("./organisms/Accordion"));
const AboutSubstance = dynamic(() => import("./organisms/AboutSubstance"));
const AboutOverview = dynamic(() => import("./organisms/AboutOverview"));
const AboutSearchers = dynamic(() => import("./organisms/AboutSearchers"));
const AboutRoadmap = dynamic(() => import("./organisms/AboutRoadmap"));
const AboutTeam = dynamic(() => import("./organisms/AboutTeam"));
const TabNavigation = dynamic(() => import("./organisms/TabNavigation"));
const GalleryImages = dynamic(() => import("./organisms/GalleryImages"));
//organisms
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const GalleryView = dynamic(() => import("./templates/GalleryView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  Dropdown,
  DropdownButton,
  ArrowIcon,
  DropdownItem,
  NumberInput,
  TextInput,
  CheckBox,
  Button,
  LoadAnimation,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavItem,
  TabBarItem,
  TabBar,
  ExchangeArtIcon,
  CloseIcon,
  Modal,
  Menu,
  DownloadIcon,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  ImageModal,
  HeaderContent,
  AboutView,
  FooterLinks,
  ConnectWalletButton,
  ConnectWalletIcon,
  Navigation,
  NavigationDropdown,
  NavigationContent,
  AudioControl,
  AudioControlButton,
  AudioControlIcon,
  AudioControlDropdown,
  AudioControlActions,
  AudioControlDisplay,
  TextSlidingAnimation,
  Divider,
  TabNavigation,
  CornerTopLeftIcon,
  CornerTopRightIcon,
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  Accordion,
  StackIcon,
  AboutSubstance,
  AboutOverview,
  AboutSearchers,
  AboutRoadmap,
  AboutTeam,
  SubstanceGoal,
  AccordionWrapper,
  TeamSelect,
  TeamDisplay,
  GalleryView,
  GallerySorting,
  GalleryImages,
  GalleryImageItem,
  SearchIcon,
  GalleryItemLore,
  GalleryItemBar
}