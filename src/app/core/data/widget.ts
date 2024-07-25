const widgetsourceData = [
    {
        platform: "Facebook",
        logo: 'brand-facebook',
        logocolor: 'secondary',
        badge: {
            value: "2.59%",
            color: "success",
            direction: "up-right"
        },
        visitors: {
            count: 354620,
            unit: "k"
        }
    },
    {
        platform: "Instagram",
        logo: 'brand-instagram',
        logocolor: 'danger',
        badge: {
            value: "4.05%",
            color: "success",
            direction: "up-right"
        },
        visitors: {
            count: 245631,
            unit: "k"
        }
    },
    {
        platform: "Twitter",
        logo: 'brand-twitter',
        logocolor: 'info',
        badge: {
            value: "1.67%",
            color: "danger",
            direction: "down-right"
        },
        visitors: {
            count: 154832,
            unit: "k"
        }
    },
    {
        platform: "Website",
        logo: 'world',
        logocolor: 'dark',
        badge: {
            value: "3.12%",
            color: "success",
            direction: "up-right"
        },
        visitors: {
            count: 489012,
            unit: "k"
        }
    }

]
const widgetproducts = [
    {
        category: "Fashion & Clothing",
        percentage: 90,
        type: 'success'
    },
    {
        category: "Lighting",
        percentage: 64,
        type: 'warning'
    },
    {
        category: "Footwear",
        percentage: 77,
        type: 'danger'
    },
    {
        category: "Electronics",
        percentage: 53,
        type: 'info'
    },
    {
        category: "Beauty & Personal Care",
        percentage: 81,
        type: 'primary'
    },
    {
        category: "Books",
        percentage: 96,
        type: 'secondary'
    },
    {
        category: "Furniture",
        percentage: 69,
        type: 'success'
    }
]
const widgetcustomer = [
    {
        name: "Tommy Carey",
        date: "02 Jan, 2023",
        email: "careytommy@toner.com",
        avatar: "assets/images/users/avatar-2.jpg"
    },
    {
        name: "Cassius Brock",
        date: "24 Nov, 2022",
        email: "brock@toner.com",
        avatar: "assets/images/users/avatar-1.jpg"
    },
    {
        name: "Gabrielle Holden",
        date: "17 Nav, 2022",
        email: "gabrielle@toner.com",
        avatar: "assets/images/users/avatar-3.jpg"
    },
    {
        name: "Alfred Hurst",
        date: "18 Dec, 2021",
        email: "",
        avatar: "assets/images/users/avatar-5.jpg"
    },
    {
        name: "Kristina Hooper",
        date: "04 Oct, 2022",
        email: "alfredH@toner.com",
        avatar: "assets/images/users/avatar-6.jpg"
    },
    {
        name: "Jacques Leon",
        date: "02 Jan, 2023",
        email: "jacques@toner.com",
        avatar: "assets/images/users/avatar-8.jpg"
    },
    {
        name: "Edward Rogers",
        date: "25 Nov, 2022",
        email: "edwardro@toner.com",
        avatar: "assets/images/users/avatar-7.jpg"
    },
    {
        name: "Alina Holland",
        date: "11 Jan, 2023",
        email: "hollandalina@toner.com",
        avatar: "assets/images/users/avatar-10.jpg"
    }
]

const widgetincome = [
    {
        "metric": "Annual Profit",
        "metricValue": 368.24,
        "countFront":"$",
        "counttype":"M",
        "icon": "bg-primary-subtle text-primary",
        "percentageChange": "4.65%",
        "type": 'primary',
        "logo":"briefcase",
        "progress": {
            "percentage": 76,
        }
    },
    {
        "metric": "Daily Average Income",
        "metricValue": 1454.71,
        "countFront":"$",
        "counttype":"K",
        "percentageChange": "1.33%",
        "type": 'secondary',
        "logo":"wallet",
        "icon": "bg-secondary-subtle text-secondary",
        "progress": {
            "percentage": 88,
        }
    },
    {
        "metric": "Lead Conversations",
        "metricValue": 33.37,
        "counttype":"%",
        "percentageChange": "2.69%",
        "type": 'danger',
        "logo":"broadcast",
        "icon": "bg-danger-subtle text-danger",
        "progress": {
            "percentage": 18,
        }
    },
    {
        "metric": "Campaign Sent",
        "metricValue": 648,
        "percentageChange": "0.78% ",
        "type": 'success',
        "logo":"rocket-launch",
        "icon": "bg-success-subtle text-success",
        "progress": {
            "percentage": 49,
        }
    },
    {
        "metric": "Annual Deals",
        "metricValue": 1742,
        "percentageChange": "7.93%",
        "type": 'warning',
        "logo":"heartbeat",
        "icon": "bg-warning-subtle text-warning",
        "progress": {
            "percentage": 83,
        }
    }
]


export { widgetsourceData, widgetproducts, widgetcustomer, widgetincome }