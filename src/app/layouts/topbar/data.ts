const cartList = [
    {
        id: '1',
        img:'assets/images/products/img-1.png',
        title: 'Blive Printed Men Round Neck',
        category: 'Fashion',
        size: 'XL',
        color: 'Blue',
        price: 327.49,
        qty: 2
    },
    {
        id: '2',
        img:'assets/images/products/img-5.png',
        title: 'Willage Volleyball Ball',
        category: 'Sportwear',
        color: 'White',
        price: 49.06,
        qty: 1
    },
    {
        id: '3',
        img:'assets/images/products/img-10.png',
        title: 'Cotton collar tshirts for men',
        category: 'Fashion',
        size: 'M',
        color: 'Brown',
        price: 53.33,
        qty: 3
    },
    {
        id: '4',
        img:'assets/images/products/img-11.png',
        title: 'Jeans blue men boxer',
        category: 'Fashion',
        size: '8',
        color: 'Green',
        price: 164.37,
        qty: 1
    },
    {
        id: '5',
        img:'assets/images/products/img-8.png',
        title: 'Full Sleeve Solid Men Sweatshirt',
        category: 'Fashion',
        color: 'Green',
        price: 180.00,
        qty: 1
    }
]

const notification = [
    {
        "title": "New",
        "items": [
            {
                "id": 1,
                "type": "notification",
                "background": "bg-info-subtle text-info",
                "icon": "ti ti-gift",
                "text": "Your Elite author Graphic Optimization reward is ready!",
                "link": "javascript:void(0);",
                "timestamp": "Just 30 sec ago",
                "checkboxId": "all-notification-check01",
                "state": false
            },
            {
                "id": 2,
                "type": "notification",
                "avatar": "assets/images/users/avatar-2.jpg",
                "activeBadge": "New alerts",
                "name": "Angela Bernier",
                "text": "Answered to your comment on the cash flow forecast's graph 🔔.",
                "link": "javascript:void(0);",
                "timestamp": "48 min ago",
                "checkboxId": "all-notification-check02",
                "state": false
            },
            {
                "id": 3,
                "type": "notification",
                "background": "bg-danger-subtle text-danger",
                "icon": "ti ti-message-2",
                "text": "You have received 20 new messages in the conversation",
                "link": "javascript:void(0);",
                "timestamp": "2 hrs ago",
                "checkboxId": "all-notification-check03",
                "state": false
            }
        ]
    },
    {
        "title": "Read Before",
        "items": [
            {
                "id": 4,
                "type": "notification",
                "avatar": "assets/images/users/avatar-8.jpg",
                "activeBadge": "New alerts",
                "name": "Maureen Gibson",
                "text": "We talked about a project on LinkedIn.",
                "link": "javascript:void(0);",
                "timestamp": "4 hrs ago",
                "checkboxId": "all-notification-check04",
                "state": false
            }
        ]
    }
]

export { cartList, notification}