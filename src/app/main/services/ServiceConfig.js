import React from 'react';
import { authRoles } from 'app/auth';

export const ServiceConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/services',
            component: React.lazy(() => import('./Service'))
        }
    ]
};
