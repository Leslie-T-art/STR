const kanbanData = [
    {
        id: '1',
        board: 'TODO',
        color:'secondary',
        subItem: [
            {
                id: "TBV15926",
                title: "Admin Layout Design",
                description: "Landing page template with clean, minimal and modern design.",
                category: ["Design"],
                assignedTo: [
                    {
                        "name": "Tonya",
                        "avatarURL": "assets/images/users/avatar-10.jpg"
                    },
                    {
                        "name": "Frank",
                        "avatarURL": "assets/images/users/avatar-3.jpg"
                    },
                    {
                        "name": "Herbert",
                        "avatarURL": "assets/images/users/avatar-2.jpg"
                    },
                ],
                views: 13,
                comments: 52,
                attachments: 17,
                board:'todo'
            },
            {
                id: "TBV15926",
                title: "Marketing & Sales",
                description: "Sales and marketing are two business functions within an organization.",
                category: ["Marketing", "Business"],
                assignedTo: [
                    {
                        "name": "Donald",
                        "avatarURL": "assets/images/users/avatar-9.jpg"
                    },
                    {
                        "name": "Thomas",
                        "avatarURL": "assets/images/users/avatar-8.jpg"
                    }
                ],
                views: 24,
                comments: 10,
                attachments: 10,
                board:'todo'        
            },
        ]
    },
   
    {
        id: '1',
        board: 'Inprogress',
        color:'warning',
        subItem: [
            {
                id: "TBV157485",
                title: "Brand Logo Design",
                description: "BrandCrowd's brand logo maker allows you to generate and customize stand-out brand logos in minutes.",
                category: ["Logo", "Design", "UI/UX"],
                assignedTo: [
                    {
                        "name": "Nancy",
                        "avatarURL": "assets/images/users/avatar-5.jpg"
                    },
                    {
                        "name": "Michael",
                        "avatarURL": "assets/images/users/avatar-7.jpg"
                    },
                    {
                        "name": "Alexis",
                        "avatarURL": "assets/images/users/avatar-6.jpg"
                    }
                ],
                views: 24,
                comments: 10,
                attachments: 10,
                progress: 55,
                type:'secondary',
                board:'inprogress'
            },
            {
                id: "TBV157499",
                title: "Change Old App Icon",
                description: "Change app icons on Android: How do you change the look of your apps.",
                category: ["Design", "Website"],
                assignedTo: [
                    {
                        "name": "Tonya",
                        "avatarURL": "assets/images/users/avatar-10.jpg"
                    },
                    {
                        "name": "Donald",
                        "avatarURL": "assets/images/users/avatar-9.jpg"
                    },
                    {
                        "name": "Nancy",
                        "avatarURL": "assets/images/users/avatar-5.jpg"
                    }
                ],
                views: 64,
                comments: 35,
                attachments: 23,
                progress: 0,
                type:'primary',
                board:'inprogress'
            },
        ] 
    },
   
    {
        id: '1',
        board: 'In Reviews',
        color:'info',
        subItem: [
            {
                id: "TBV157499",
                title: "Create Product Animations",
                image: "assets/images/small/img-4.jpg",
                category: ["Ecommerce"],
                assignedTo: [
                    {
                        "name": "Anna",
                        "avatarURL": "assets/images/users/avatar-1.jpg"
                    }
                ],
                views: 8,
                comments: 54,
                attachments: 28,
                progress: 55,
                type:'success',
                board:'in reviews'
            },
            {
                id: "TBV1575348",
                title: "Product Features Analysis",
                description: "An essential part of strategic planning is running a product feature analysis.",
                category: ["Product", "Analysis"],
                assignedTo: [{ "name": "Nancy", "avatarURL": "assets/images/users/avatar-5.jpg" }, { "name": "Alexis", "avatarURL": "assets/images/users/avatar-6.jpg" }],
                views: 14,
                comments: 31,
                attachments: 7,
                progress: 67,
                type:'warning',
                board:'in reviews'
            },
            {
                id: "TBV1575363",
                title: "Create a Graph of Sketch",
                description: "To make a pie chart with equal slices create a perfect circle by selecting an Oval Tool.",
                category: ["Sketch", "Marketing", "Design"],
                assignedTo: [{ "name": "Alexis", "avatarURL": "assets/images/users/avatar-4.jpg" }, { "name": "Thomas", "avatarURL": "assets/images/users/avatar-8.jpg" }, { "name": "Herbert", "avatarURL": "assets/images/users/avatar-2.jpg" }, { "name": "Anna", "avatarURL": "assets/images/users/avatar-1.jpg" }],
                views: 12,
                comments: 74,
                attachments: 37,
                progress: 0,
                type:'primary',
                board:'in reviews'
            }
        ]
    },
    {
        id: '1',
        board: 'Done',
        color:'success',
        subItem: [
            {
                id: "TBV1575363",
                title: "Create a Blog Template UI",
                description: "Landing page template with clean, minimal and modern design.",
                category: ["Design", "Website"],
                assignedTo: [
                    {
                        "name": "Nancy",
                        "avatarURL": "assets/images/users/avatar-8.jpg"
                    },
                    {
                        "name": "Frank",
                        "avatarURL": "assets/images/users/avatar-7.jpg"
                    },
                    {
                        "name": "Tonya",
                        "avatarURL": "assets/images/users/avatar-6.jpg"
                    }
                ],
                views: 24,
                comments: 10,
                attachments: 10,
                ismiddle:true,
                progress: 35,
                type:'danger',
                board:'done'
            }
        ] 
    },
    {
        id: '1',
        board: 'New',
        color:'success',
        subItem: [
            {
                id: "TBV1575732",
                title: "Banner Design for FB & Twitter",
                image: "assets/images/small/img-1.jpg",
                category: ["UI/UX", "Graphic"],
                assignedTo: [
                    {
                        "name": "Frank",
                        "avatarURL": "assets/images/users/avatar-3.jpg"
                    },
                    {
                        "name": "Herbert",
                        "avatarURL": "assets/images/users/avatar-2.jpg"
                    }
                ],
                views: 11,
                comments: 26,
                attachments: 30,
                progress: 55,
                type:'warning',
                board:'new'
            }
        ]
    }
]

const member = [
    {
        name: 'Anna Adame',
        avatarURL:'assets/images/users/avatar-1.jpg'
    },
    {
        name: 'Frank Hook',
        avatarURL:'assets/images/users/avatar-3.jpg'
    },
    {
        name: 'Alexis Clarke',
        avatarURL:'assets/images/users/avatar-6.jpg'
    },
    {
        name: 'Herbert Stokes',
        avatarURL:'assets/images/users/avatar-2.jpg'
    },
    {
        name: 'Michael Morris',
        avatarURL:'assets/images/users/avatar-7.jpg'
    },
    {
        name: 'Nancy Martino',
        avatarURL:'assets/images/users/avatar-5.jpg'
    },
    {
        name: 'Thomas Taylor',
        avatarURL:'assets/images/users/avatar-8.jpg'
    },
    {
        name: 'Tonya Noble',
        avatarURL:'assets/images/users/avatar-10.jpg'
    }
]

export { kanbanData,member }