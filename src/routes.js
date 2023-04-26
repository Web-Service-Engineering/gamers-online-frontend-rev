
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import ProfileFirstTime from "views/examples/ProfileFirstTime";
import BartleTest from "views/examples/BartleTest";
import Chats from "views/examples/Chats";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    showInSidebar: true,
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/tables",
    name: "Friends",
    icon: "ni ni-satisfied text-red",
    component: Tables,
    layout: "/admin",
    showInSidebar: true,
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    showInSidebar: true,
  },
   {
     path: "/chat",
     name: "Chat",
     icon: "ni ni-single-02 text-yellow",
     component: Chats,
     layout: "/admin",
     showInSidebar: true,
  },
  //  {
  //    path: "/login",
  //    name: "Login",
  //    icon: "ni ni-key-25 text-info",
  //    component: Login,
  //    layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // },
  {
     path: "/profile-register",
     name: "New Profile",
     icon: "ni ni-circle-08 text-pink",
     component: ProfileFirstTime,
     layout: "/onboarding",
     showInSidebar: false,
   },
  {
    path: "/test-register",
    name: "Bartle Test",
    icon: "ni ni-circle-08 text-pink",
    component: BartleTest,
    layout: "/onboarding",
    showInSidebar: true,
  }
];
export default routes;
