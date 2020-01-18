import React from "react";
import { authRoles } from 'app/auth';

export const StaffConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  auth    : authRoles.user,
  routes: [
    {
      path: "/staff",
      component: React.lazy(() => import("./Staff"))
    },
    {
      path: ["/staffInfo/add", "/staffInfo/:id"],
      component: React.lazy(() => import("./StaffInfoWrapper"))
  }
  ]
};
