import React from 'react';
import { authRoles } from 'app/auth';

export const ClientConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes: [
        {
            path: '/clients',
            component: React.lazy(() => import('./Client'))
        },
        {
            path: ["clientInfo", "/add-clientInfo", "/clientInfo/:id"],
            component: React.lazy(() => import("./components/SeeClient"))
        }
    ]
};
