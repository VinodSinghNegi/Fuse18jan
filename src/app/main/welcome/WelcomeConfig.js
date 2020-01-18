import React from "react";
import { authRoles } from 'app/auth';

export const WelcomeConfig={
    settings:{
        layout:{
            config:{}
        }
    },
    auth    : authRoles.user,
    routes:[
        {
            path:"/welcome",
            component:React.lazy(()=>import("./Welcome"))
        },
        {
            path:"/checkout",
            component:React.lazy(()=>import("./components/checkout"))
        }
    ]
}