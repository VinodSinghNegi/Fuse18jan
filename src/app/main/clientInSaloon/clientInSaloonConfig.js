import React from 'react';
import { authRoles } from 'app/auth';

export const ClientInSaloonConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes: [
        {
            path: '/clientInSaloon',
            component: React.lazy(() => import('./clientInSaloon'))
        }
    ]
};
