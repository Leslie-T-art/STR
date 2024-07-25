const todoList = [
    {
        id: "1",
        task: "Added Select2",
        subItem: [
            { img: 'assets/images/users/avatar-1.jpg', name: 'Curtis Saenz' },
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' }
        ],
        dueDate: "23 Apr, 2022",
        status: "Pending",
        priority: "High",
        checked: false
    },
    {
        id: "2",
        task: "Additional Calendar",
        subItem: [
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' },
            { img: 'assets/images/users/avatar-9.jpg', name: 'Diego Norris' },
            { img: 'assets/images/users/avatar-10.jpg', name: 'Anthony Mills' }
        ],
        dueDate: "23 Apr, 2022",
        status: "Completed",
        priority: "Medium",
        checked: true
    },
    {
        id: "3",
        task: "Add Dynamic Contact List",
        subItem: [
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' },
            { img: 'assets/images/users/avatar-6.jpg', name: 'Marian Angel' },
            { img: 'assets/images/users/avatar-7.jpg', name: 'Johnnie Walton' }
        ],
        dueDate: "24 Apr, 2022",
        status: "Inprogress",
        priority: "Low",
        checked: false
    },
    {
        id: "4",
        task: "Brand Logo design",
        subItem: [
            { img: 'assets/images/users/avatar-2.jpg', name: 'James Forbes' },
            { img: 'assets/images/users/avatar-10.jpg', name: 'Anthony Mills' },
            { img: 'assets/images/users/avatar-9.jpg', name: 'Diego Norris' }
        ],
        dueDate: "25 Apr, 2022",
        status: "New",
        priority: "Medium",
        checked: false
    },
    {
        id: "5",
        task: "Change email option process",
        subItem: [
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' },
            { img: 'assets/images/users/avatar-10.jpg', name: 'Anthony Mills' },
            { img: 'assets/images/users/avatar-9.jpg', name: 'Diego Norris' }
        ],
        dueDate: "25 Apr, 2022",
        status: "Completed",
        priority: "High",
        checked: true
    },
    {
        id: "6",
        task: "Make a creating an account profile",
        subItem: [
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' }
        ],
        dueDate: "26 Apr, 2022",
        status: "Completed",
        priority: "Medium",
        checked: true
    },
    {
        id: "7",
        task: "Profile Page Structure",
        subItem: [
            { img: 'assets/images/users/avatar-4.jpg', name: 'Mary Gant' },
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' }
        ],
        dueDate: "27 Apr, 2022",
        status: "New",
        priority: "Low",
        checked: false
    },
    {
        id: "8",
        task: "Datatable with jQuery cdn",
        subItem: [
            { img: 'assets/images/users/avatar-6.jpg', name: 'Marian Angel' },
            { img: 'assets/images/users/avatar-7.jpg', name: 'Johnnie Walton' },
            { img: 'assets/images/users/avatar-8.jpg', name: 'Donna Weston' }
        ],
        dueDate: "28 Apr, 2022",
        status: "Pending",
        priority: "High",
        checked: false
    },
    {
        id: "9",
        task: "Added File Manager Apps",
        subItem: [
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' },
            { img: 'assets/images/users/avatar-4.jpg', name: 'Mary Gant' },
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' }
        ],
        dueDate: "29 Apr, 2022",
        status: "Completed",
        priority: "Medium",
        checked: true
    },
    {
        id: "10",
        task: "Added Back to Top button",
        subItem: [
            { img: 'assets/images/users/avatar-6.jpg', name: 'Marian Angel' },
            { img: 'assets/images/users/avatar-7.jpg', name: 'Johnnie Walton' }
        ],
        dueDate: "30 Apr, 2022",
        status: "Inprogress",
        priority: "High",
        checked: false
    },
    {
        id: "11",
        task: "Added bdge new style - gradient",
        subItem: [
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' },
            { img: 'assets/images/users/avatar-10.jpg', name: 'Anthony Mills' },
            { img: 'assets/images/users/avatar-9.jpg', name: 'Diego Norris' }
        ],
        dueDate: "01 May, 2022",
        status: "Inprogress",
        priority: "Medium",
        checked: false
    },
    {
        id: "12",
        task: "Added new tabs styles",
        subItem: [
            { img: 'assets/images/users/avatar-2.jpg', name: 'James Forbes' }
        ],
        dueDate: "01 May, 2022",
        status: "New",
        priority: "Low",
        checked: false
    },
    {
        id: "13",
        task: "Make a creating an account profile",
        subItem: [
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' },
            { img: 'assets/images/users/avatar-6.jpg', name: 'Marian Angel' },
            { img: 'assets/images/users/avatar-7.jpg', name: 'Johnnie Walton' },
            { img: 'assets/images/users/avatar-8.jpg', name: '1 More' }
        ],
        dueDate: "02 May, 2022",
        status: "Completed",
        priority: "Low",
        checked: true
    },
    {
        id: "14",
        task: "Additional Mailbox",
        subItem: [
            { img: 'assets/images/users/avatar-5.jpg', name: 'Virgie Price' },
            { img: 'assets/images/users/avatar-9.jpg', name: 'Diego Norris' },
            { img: 'assets/images/users/avatar-10.jpg', name: 'Anthony Mills' }
        ],
        dueDate: "02 Apr, 2022",
        status: "Pending",
        priority: "Medium",
        checked: false
    },
    {
        id: "15",
        task: "Added Email Templates",
        subItem: [
            { img: 'assets/images/users/avatar-1.jpg', name: 'Curtis Saenz' },
            { img: 'assets/images/users/avatar-3.jpg', name: 'John Robles' }
        ],
        dueDate: "03 Apr, 2022",
        status: "Inprogress",
        priority: "High",
        checked: false
    },
];

const AssignedData = [
    { id: 1, img: "assets/images/users/avatar-2.jpg", name: "James Forbes" },
    { id: 2, img: "assets/images/users/avatar-3.jpg", name: "John Robles" },
    { id: 3, img: "assets/images/users/avatar-4.jpg", name: "Mary Gant" },
    { id: 4, img: "assets/images/users/avatar-1.jpg", name: "Curtis Saenz" },
    { id: 5, img: "assets/images/users/avatar-5.jpg", name: "Virgie Price" },
    { id: 6, img: "assets/images/users/avatar-10.jpg", name: "Anthony Mills" },
    { id: 7, img: "assets/images/users/avatar-6.jpg", name: "Marian Angel" },
    { id: 8, img: "assets/images/users/avatar-7.jpg", name: "Johnnie Walton" },
    { id: 9, img: "assets/images/users/avatar-8.jpg", name: "Donna Weston" },
    { id: 10, img: "assets/images/users/avatar-9.jpg", name: "Diego Norris" },
];

const projectList = [
    {
        id: "1",
        title: "Vixon Admin & Dashboard",
        coll: "vixonAdmin",
        subItem: [
            {
                version: 'v1.0.0',
                color: 'danger'
            },
            {
                version: 'v1.1.0',
                color: 'secondary'
            },
            {
                version: 'v1.2.0',
                color: 'info'
            },
            {
                version: 'v1.3.0',
                color: 'primary'
            },
            {
                version: 'v1.4.0',
                color: 'warning'
            }
        ],
    },
    {
        id: "2",
        title: "Project Management",
        coll: "projectCollapsed",
        subItem: [
            {
                version: 'v2.1.0',
                color: 'danger'
            },
            {
                version: 'v2.2.0',
                color: 'secondary'
            },
            {
                version: 'v2.3.0',
                color: 'info'
            },
            {
                version: 'v2.4.0',
                color: 'primary'
            }
        ],
    },
    {
        id: "3",
        title: "Steex Admin & Dashboard",
        coll: "steexCollapsed",
        subItem: [
            {
                version: 'v1.0.0',
                color: 'danger'
            },
            {
                version: 'v1.2.0',
                color: 'secondary'
            }
        ],
    },
    {
        id: "4",
        title: "Doot - Chat App Template",
        coll: "ecommerceCollapsed",
        subItem: [
            {
                version: 'v1.0.0',
                color: 'danger'
            },
            {
                version: 'v1.1.0',
                color: 'secondary'
            },
            {
                version: 'v1.2.0',
                color: 'info'
            },
        ],
    },
]

export { todoList, AssignedData, projectList };
