import React from 'react';
import { authRoles } from 'app/auth';

export const AgendaConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/Agenda',
            component: React.lazy(() => import('./Agenda'))
        }
    ]
};
