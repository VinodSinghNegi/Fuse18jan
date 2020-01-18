import appUtils from 'app/app.utils';

const navigationConfig = [
    {
        'id': 'applications',
        'title': 'Applications',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'agenda-component',
                'title': 'Agenda',
                'type': 'item',
                'icon': 'person',
                'url': '/agenda'
            },
            {
                'id': 'product-component',
                'title': 'Products',
                'type': 'item',
                'icon': 'shopping_cart',
                'url': '/products',
            },
            {
                'id': 'service-component',
                'title': 'Services',
                'type': 'item',
                'icon': 'airline_seat_recline_normal',
                'url': '/services'
            },
            {
                'id': 'staff-component',
                'title': 'Staff',
                'type': 'item',
                'icon': 'person',
                'url': '/staff'
            },

            {
                'id': 'client-welcome',
                'title': 'Welcome',
                'type': 'item',
                'icon': 'home',
                'url': '/welcome'
            },
            {
                'id': 'client-list',
                'title': 'Client',
                'type': 'item',
                'icon': 'view_list',
                'url': '/clients'
            },
            // {
            //     'id': 'salon-config',
            //     'title': 'Saloon',
            //     'type': 'item',
            //     'icon': 'airline_seat_recline_normal',
            //     'url': '/salon'
            // }
        ]
    }
];

const mobileNavigationConfig = [
    {
        'id': 'applications',
        'title': 'Applications',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'image-consultant',
                'title': 'Image Consultant',
                'type': 'item',
                'icon': 'view_list',
                'url': '/image-consultant'
            },
            {
                'id': 'client-in-saloon',
                'title': 'Client In Saloon',
                'type': 'item',
                'icon': 'view_list',
                'url': '/clientInSaloon'
            }
        ]
    }
];

export default appUtils.detectmob() ? mobileNavigationConfig : navigationConfig;
