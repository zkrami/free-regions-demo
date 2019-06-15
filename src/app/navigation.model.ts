export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : '',
                'type'    : 'group',
                'icon'    : 'apps',
                'children': [
                    {
                        'id'      : 'dashboards',
                        'title'   : 'لوحة التحكم',
                        'type'    : 'item',
                        'icon'    : 'dashboard',
                        'url'  : '/apps/dashboards/project'

                    },
                    
                    {
                        'id'   : 'mail',
                        'title': 'الشكاوي',
                        'type' : 'item',
                        'icon' : 'info',
                        'url'  : '/apps/mail',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'chat',
                        'title': 'الدعم الفني',
                        'type' : 'item',
                        'icon' : 'chat',
                        'url'  : '/apps/chat',
                        'badge': {
                            'title': 13,
                            'bg'   : '#09d261',
                            'fg'   : '#FFFFFF'
                        }
                    },
                   
                ]
            },
            {
                'id'      : 'pages',
                'title'   : 'الطلبات',
                'type'    : 'group',
                'icon'    : 'pages',
                'children': [
                  
                    {
                        'title': 'الطلبات الورقة',
                        'type' : 'item',
                        'icon' : 'notes',
                        'url'  : '/pages/paper'
                    },
                    {
                        'title': 'الطلبات الالكترونية',
                        'type' : 'item',
                        'icon' : 'desktop_mac',
                        'url'  : '/pages/automated'
                    }
                ]
            }
        ];
    }
}

