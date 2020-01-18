import React from 'react';
import { authRoles } from 'app/auth';

export const SalonConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes: [
        {
            path: '/salon',
            component: React.lazy(() => import('./Salon'))
        },
    ]
};
