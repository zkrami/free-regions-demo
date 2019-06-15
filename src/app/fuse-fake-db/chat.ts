export class ChatFakeDb
{
    public static contacts = [
        {
            'id'    : '5725a680b3249760ea21de52',
            'name'  : 'الادارة العامة',
            'avatar': 'assets/images/avatars/garry.jpg',
            'status': 'online',
            'mood'  : 'مختص بالاستفسارات المتعلقة بالادارة العامة'
        },
        {
            'id'    : '5725a680606588342058356d',
            'name'  : 'الهيئة الادارية',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'status': 'do-not-disturb',
            'mood'  : ''
        },
        {
            'id'    : '5725a68009e20d0a9e9acf2a',
            'name'  : 'ادارة التطبيق',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'status': 'do-not-disturb',
            'mood'  : '',
            'unread': null
        },
        {
            'id'    : '5725a6809fdd915739187ed5',
            'name'  : 'ادارة المقاسم',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'status': 'offline',
            'mood'  : 'استفسر عن أي اشكالية بخصوص المقاسم',
            'unread': 3
        },
       
    ];

    public static chats = [
        {
            'id'    : '1725a680b3249760ea21de52',
            'dialog': [
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'تعال بسرعة إلى غرفة الاجتماعات لدينا مشكلة كبيرة بالخادم',
                    'time'   : '2017-03-22T08:54:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'أتناول وجبة الإفطار الآن ، ألا يمكنك الانتظار لمدة 10 دقائق؟',
                    'time'   : '2017-03-22T08:55:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'نحن نخسر المال! بسرعة!',
                    'time'   : '2017-03-22T09:00:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'هذا ليس أموالي ، كما تعلمون. سوف أتناول وجبة الإفطار الخاصة بي ، ثم أتيت إلى غرفة الاجتماعات.',
                    'time'   : '2017-03-22T09:02:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'أنت الأسوء!',
                    'time'   : '2017-03-22T09:05:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'أنت الأسوء!',
                    'time'   : '2017-03-22T09:15:28.299Z'
                },
             
            ]
        },
        {
            'id'    : '2725a680b8d240c011dd2243',
            'dialog': [
                {
                    'who'    : '5725a680b8d240c011dd224b',
                    'message': 'تعال بسرعة إلى غرفة الاجتماعات ، لدينا مشكلة كبيرة بالخادم',
                    'time'   : '2017-04-22T01:00:00.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'هذا ليس أموالي ، كما تعلمون. سوف أتناول وجبة الإفطار الخاصة بي ، ثم أتيت إلى غرفة الاجتماعات.',

                    'time'   : '2017-04-22T01:05:00.299Z'
                },
                {
                    'who'    : '5725a680b8d240c011dd224b',
                    'message': 'نحن نخسر المال! بسرعة!',
                    'time'   : '2017-04-22T01:10:00.299Z'
                }
            ]
        },
        {
            'id'    : '3725a6809413bf8a0a5272b4',
            'dialog': [
                {
                    'who'    : '5725a6809413bf8a0a5272b1',
                    'message': 'هذا ليس أموالي ، كما تعلمون. سوف أتناول وجبة الإفطار الخاصة بي ، ثم أتيت إلى غرفة الاجتماعات.',

                    'time'   : '2017-04-22T02:10:00.299Z'
                }
            ]
        }
    ];

    public static user = [
        {
            'id'      : '5725a6802d10e277a0f35724',
            'name'    : 'سامر الحموي',
            'avatar'  : 'assets/images/avatars/profile.jpg',
            'status'  : 'online',
            'mood'    : '',
            'chatList': [
                {
                    'id'             : '1725a680b3249760ea21de52',
                    'contactId'      : '5725a680b3249760ea21de52',
                    'name'           : 'Alice Freeman',
                    'unread'         : 4,
                    'lastMessageTime': '2017-06-12T02:10:18.931Z'
                },
                {
                    'id'             : '2725a680b8d240c011dd2243',
                    'contactId'      : '5725a680606588342058356d',
                    'name'           : 'Josefina',
                    'unread'         : null,
                    'lastMessageTime': '2017-02-18T10:30:18.931Z'
                },
                {
                    'id'             : '3725a6809413bf8a0a5272b4',
                    'contactId'      : '5725a6809fdd915739187ed5',
                    'name'           : 'Velazquez',
                    'unread'         : 2,
                    'lastMessageTime': '2017-03-18T12:30:18.931Z'
                }
            ]
        }
    ];

}
