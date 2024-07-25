const orders = [
    {
        orderNumber: "#TB010331",
        productName: "Daybook Pro",
        customer: {
            avatar: "assets/images/users/avatar-2.jpg",
            name: "Terry White"
        },
        price: "$658.00",
        orderDate: "17 Dec, 2022",
        deliveryDate: "26 Jan, 2023",
        country: "Brazil",
        rating: "4.5",
        status: "New"
    },
    {
        orderNumber: "#TB010332",
        productName: "Borosil Paper Cup",
        customer: {
            avatar: "assets/images/users/avatar-4.jpg",
            name: "Daniel Gonzalez"
        },
        price: "$345.00",
        orderDate: "02 Jan, 2023",
        deliveryDate: "26 Jan, 2023",
        country: "Namibia",
        rating: "4.8",
        status: "Out Of Delivery"
    },
    {
        orderNumber: "#TB010333",
        productName: "Stillbirth Helmet",
        customer: {
            avatar: "assets/images/users/avatar-3.jpg",
            name: "Stephen Bird"
        },
        price: "$80.00",
        orderDate: "20 Dec, 2022",
        deliveryDate: "29 Dec, 2022",
        country: "USA",
        rating: "4.3",
        status: "Delivered"
    },
    {
        orderNumber: "#TB010334",
        productName: "Bentwood Chair",
        customer: {
            avatar: "assets/images/users/avatar-10.jpg",
            name: "Ashley Silva"
        },
        price: "$349.99",
        orderDate: "31 Nov, 2022",
        deliveryDate: "13 Dec, 2022",
        country: "Argentina",
        rating: "3.9",
        status: "Pending"
    },
    {
        orderNumber: "#TB010335",
        productName: "Apple Headphone",
        customer: {
            avatar: "assets/images/users/avatar-9.jpg",
            name: "Scott Wilson"
        },
        price: "$264.37",
        orderDate: "23 Nov, 2022",
        deliveryDate: "03 Dec, 2022",
        country: "Jersey",
        rating: "4.7",
        status: "Shipping"
    },
    {
        orderNumber: "#TB010336",
        productName: "Smart Watch for Man's",
        customer: {
            avatar: "assets/images/users/avatar-8.jpg",
            name: "Heather Jimenez"
        },
        price: "$741.98",
        orderDate: "02 Nov, 2022",
        deliveryDate: "12 Nov, 2022",
        country: "Spain",
        rating: "4.4",
        status: "Delivered"
    }
]

const customer = [
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

const products = [
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

const report = [
    {
        productNumber: "#00541",
        productImage: "assets/images/products/img-1.png",
        productName: "Rockerz Ear Bluetooth Headphones",
        date: "16 Aug, 2022",
        price: "$658.00",
        stockStatus: "In Stock",
        quantity: "15 PCS"
    },
    {
        productNumber: "#07484",
        productImage: "assets/images/products/img-5.png",
        productName: "United Colors Of Benetton",
        date: "05 Sep, 2022",
        price: "$145.00",
        stockStatus: "Low Stock",
        quantity: "05 PCS"
    },
    {
        productNumber: "#01641",
        productImage: "assets/images/products/img-4.png",
        productName: "Striped Baseball Cap",
        date: "28 Sep, 2022",
        price: "$215.00",
        stockStatus: "Out of Stock",
        quantity: "0 PCS"
    },
    {
        productNumber: "#00065",
        productImage: "assets/images/products/img-3.png",
        productName: "350 ml Glass Grocery Container",
        date: "02 Oct, 2022",
        price: "$79.99",
        stockStatus: "In Stock",
        quantity: "37 PCS"
    },
    {
        productNumber: "#00156",
        productImage: "assets/images/products/img-2.png",
        productName: "One Seater Sofa",
        date: "11 Oct, 2022",
        price: "$264.99",
        stockStatus: "In Stock",
        quantity: "23 PCS"
    },
    {
        productNumber: "#09102",
        productImage: "assets/images/products/img-8.png",
        productName: "Men's Running Shoes Active Grip",
        date: "19 Nov, 2022",
        price: "$264.99",
        stockStatus: "Low Stock",
        quantity: "23 PCS"
    }
]

export { orders, customer, products, report }