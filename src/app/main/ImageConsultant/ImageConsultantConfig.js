import React from "react";
import { authRoles } from 'app/auth';

export const ImageConsultantConfig={
    settings:{
        layout:{
            config:{}
        }
    },
    auth    : authRoles.user,
    routes:[
        {
            path:"/image-consultant",
            component:React.lazy(()=>import("./ImageConsultant"))
        }
        
    ]
}