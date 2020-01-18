import React from "react";
import { authRoles } from 'app/auth';

export const LoginConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false
        },
        toolbar: {
          display: false
        },
        footer: {
          display: false
        },
        leftSidePanel: {
          display: false
        },
        rightSidePanel: {
          display: false
        }
      }
    }
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "/login",
      component: React.lazy(() => import("./components/login"))
    },
    {
      path: "/forgot-password",
      component: React.lazy(() => import("./components/forgetPassword"))
    }
  ]
};
