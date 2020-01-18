import React from 'react';
import { authRoles } from 'app/auth';

export const ProductConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/products',
            component: React.lazy(() => import('./Product'))
        },
    ]
};
