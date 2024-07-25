const invoicesList = [
    {   
        id:'1',
        invoice_no: '24301901',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Themesbrand',
        email: "themesbrand@vixon.com",
        createDate: "28 Mar, 2023",
        dueDate: "06 Apr, 2023",
        invoice_amount: '381.76',
        status: 'Paid',
        billing_address: {
            full_name: 'Themesbrand',
            address: '5114 Adipiscing St. Puno United States 46782',
            phone: '(926) 817-7835',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Quamar Payne',
            address: '534-1477 Non, Av. Bury St. Edmunds France 10846',
            phone: '(926) 817-7835',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 1,
            amount: 24.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 381.76
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789'
        },
        order_summary: {
            sub_total: 359.96,
            estimated_tex: 64.79,
            discount: 107.99,
            shipping_charge: 65.00,
            total_amount: 381.76,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'2',
        invoice_no: '24301902',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Ayaan Bowen',
        email: "ayaan@vixon.com",
        createDate: "21 Mar, 2023",
        dueDate: "21 Mar, 2023",
        invoice_amount: '359.77',
        status: 'Unpaid',
        billing_address: {
            full_name: 'Ayaan Bowen',
            address: 'P.O. Box 900 Ireland, 6694 Ullamcorper Avenue Port Pirie 37176',
            phone: '1-862-423-3347',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Quamar Payne',
            address: '7288 Dignissim Rd. Villa Alegre Germany 891315',
            phone: '1-862-423-3347',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 359.77
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 334.97,
            estimated_tex: 60.29,
            discount: 100.49,
            shipping_charge: 65.00,
            total_amount: 359.77,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'3',
        invoice_no: '24301903',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Zachary Stokes',
        email: "zachary@vixon.com",
        createDate: "16 Mar, 2023",
        dueDate: "21 Mar, 2023",
        invoice_amount: '276.18',
        status: 'Paid',
        billing_address: {
            full_name: 'Zachary Stokes',
            address: 'Ap #957-7519 Vel, Belgium St. Diêm Điền 88188-296',
            phone: '1-634-649-4101',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'MacKensie Peterson',
            address: '572-7561 Tempus Ave Alajuela Spain 86558',
            phone: '1-634-649-4101',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 276.18
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 239.98,
            estimated_tex: 43.20,
            discount: 71.99,
            shipping_charge: 65.00,
            total_amount: 276.18,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'4',
        invoice_no: '24301904',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Nelson Schaden',
        email: "nelson@vixon.com",
        createDate: "27 Feb, 2023",
        dueDate: "05 Mar, 2023",
        invoice_amount: '509.34',
        status: 'Pending',
        billing_address: {
            full_name: 'Nelson Schaden',
            address: '983-8399 Egestas, Rd Spain. Penza 6596',
            phone: '(922) 264-4841',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Emerson Riggs',
            address: '916-4370 Aliquet Avenue Nordhorn Spain 3200',
            phone: '(922) 264-4841',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 2,
            amount: 189.98
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 3,
            amount: 74.97
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 509.34
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 504.93,
            estimated_tex: 90.89,
            discount: 151.48,
            shipping_charge: 65.00,
            total_amount: 509.34,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'5',
        invoice_no: '24301905',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Ophelia Steuber',
        email: "ophelia@vixon.com",
        createDate: "06 Apr, 2023",
        dueDate: "12 Apr, 2023",
        invoice_amount: '170.58',
        status: 'Unpaid',
        billing_address: {
            full_name: 'Ophelia Steuber',
            address: 'Ap #552-1397 Ac Rd Germany. Barmouth 8574',
            phone: '1-434-874-6805',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Britanni Daniel',
            address: 'P.O. Box 998, 9293 Quisque Avenue Puerto Montt Poland 82862',
            phone: '1-434-874-6805',
            tax: '123456789'
        },
        products: [{
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 1,
            amount: 24.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 170.58
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 119.98,
            estimated_tex: 21.60,
            discount: 35.99,
            shipping_charge: 65.00,
            total_amount: 170.58
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'6',
        invoice_no: '24301906',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Sarai Schmidt',
        email: "sarai@vixon.com",
        createDate: "20 Feb, 2023",
        dueDate: "26 Feb, 2023",
        invoice_amount: '254.18',
        status: 'Paid',
        billing_address: {
            full_name: 'Sarai Schmidt',
            address: '5642 Aliquam, Avenue Zielona Costa Rica Góra 21204',
            phone: '1-546-878-8131',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Salvador Carney',
            address: '715-6973 Non St. Samara Peru 10513',
            phone: '1-546-878-8131',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 1,
            amount: 119.99
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 254.18
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 214.98,
            estimated_tex: 38.70,
            discount: 64.49,
            shipping_charge: 65.00,
            total_amount: 254.18,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'7',
        invoice_no: '24301907',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Deondre Huel',
        email: "deondre@vixon.com",
        createDate: "13 Feb, 2023",
        dueDate: "19 Feb, 2023",
        invoice_amount: '86.99',
        status: 'Paid',
        billing_address: {
            full_name: 'Deondre Huel',
            address: 'P.O. Box 332 Italy, 5256 Dignissim St. Juazeiro do Norte 646442',
            phone: '(587) 848-3170',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Kieran Holland',
            address: '150-7530 Egestas Av. Panchià Russian Federation 16807',
            phone: '(587) 848-3170',
            tax: '123456789'
        },
        products: [
            {
                product_name: '350 ml Glass Grocery Container',
                product_details: 'Glass Grocery Container (Pack of 3, White)',
                rates: 24.99,
                quantity: 1,
                amount: 24.99
            }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 86.99
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 24.99,
            estimated_tex: 4.50,
            discount: 7.50,
            shipping_charge: 65.00,
            total_amount: 86.99,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'8',
        invoice_no: '24301908',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Nelson Schaden',
        email: "nelson@vixon.com",
        createDate: "01 Feb, 2023",
        dueDate: "07 Feb, 2023",
        invoice_amount: '213.49',
        status: 'Unpaid',
        billing_address: {
            full_name: 'Nelson Schaden',
            address: '2935 Senectus Av. Tvedestrand Germany 66479',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Yoshio Skinner',
            address: '101-9784 Metus Rd. Minitonas Mexico 19-154',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 1,
            amount: 24.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 415.96
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 359.96,
            estimated_tex: 44.99,
            discount: 53.99,
            shipping_charge: 65.00,
            total_amount: 415.96,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'9',
        invoice_no: '24301909',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Prezy Mark',
        email: "prezy@vixon.com",
        createDate: "29 Jan, 2023",
        dueDate: "06 Feb, 2023",
        invoice_amount: '381.76',
        status: 'Paid',
        billing_address: {
            full_name: 'Prezy Mark',
            address: '414-240 Odio. Rd Vietnam. Louisville 41715',
            phone: '1-681-342-7158',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Linus Pitts',
            address: 'Ap #280-7347 Libero. Rd. Yurimaguas Italy 881484',
            phone: '1-681-342-7158',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        },
        {
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 1,
            amount: 24.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 381.76
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 359.96,
            estimated_tex: 64.79,
            discount: 107.99,
            shipping_charge: 65.00,
            total_amount: 381.76,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'10',
        invoice_no: '24301910',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Domenic Dach',
        email: "domenic@vixon.com",
        createDate: "17 Jan, 2023",
        dueDate: "23 Jan, 2023",
        invoice_amount: '276.18',
        status: 'Refund',
        billing_address: {
            full_name: 'Domenic Dach',
            address: 'Ap #322-2982 Lacinia Road India Moss 309511',
            phone: '1-514-596-7650',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Otto Farrell',
            address: 'Ap #827-2319 Eu Ave Bima Norway 1663',
            phone: '1-514-596-7650',
            tax: '123456789'
        },
        products: [{
            product_name: 'Sweatshirt for Men (Pink)',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 119.99,
            quantity: 2,
            amount: 239.98
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 276.18
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 239.98,
            estimated_tex: 43.20,
            discount: 71.99,
            shipping_charge: 65.00,
            total_amount: 276.18,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }, {
        id:'11',
        invoice_no: '24301911',
        logo_img: 'assets/images/logo-light.png',
        customer: 'Paki Edwards',
        email: "sdwards@vixon.com",
        createDate: "17 Jan, 2023",
        dueDate: "23 Jan, 2023",
        invoice_amount: '170.58',
        status: 'Paid',
        billing_address: {
            full_name: 'Paki Edwards',
            address: '2935 Senectus Av. Tvedestrand Germany 66479',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Yoshio Skinner',
            address: '101-9784 Metus Rd. Minitonas Mexico 19-154',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        products: [{
            product_name: 'Noise NoiseFit Endure Smart Watch',
            product_details: '32.5mm (1.28 Inch) TFT Color Touch Display',
            rates: 94.99,
            quantity: 1,
            amount: 94.99
        },
        {
            product_name: '350 ml Glass Grocery Container',
            product_details: 'Glass Grocery Container (Pack of 3, White)',
            rates: 24.99,
            quantity: 1,
            amount: 24.99
        }],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 170.58
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'vixon@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '+(01) 234 6789',
        },
        order_summary: {
            sub_total: 119.98,
            estimated_tex: 21.60,
            discount: 35.99,
            shipping_charge: 65.00,
            total_amount: 170.58
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
        sign_img: 'assets/images/invoice-signature.svg',
    }
]

export { invoicesList }