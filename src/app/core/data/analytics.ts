const sourceData = [
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
        logocolor: 'body',
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

const campaign = [
    {
        source: 'Facebook Ads',
        impression: '165,148,541',
        clicks: '124,587,415',
        cost: '$498,340',
        conversation: '415,260'
    },
    {
        source: 'Instagram Ads',
        impression: '324,159,321',
        clicks: '257,951,346',
        cost: '$743,654',
        conversation: '247,254,410'
    },
    {
        source: 'Youtube Ads',
        impression: '954,321,875',
        clicks: '738,192,465',
        cost: '$987,623,145',
        conversation: '632,184,952'
    },
    {
        source: 'Google Ads',
        impression: '21,154,309,318',
        clicks: '12,018,992,301',
        cost: '$1,543,243,019',
        conversation: '4,309,318,287'
    }
];

const sessionData = [
    {
        avatar: "assets/images/brands/chrome.png",
        sessions: "12.74k",
        browser: "Chrome"
    },
    {
        avatar: "assets/images/brands/firefox.png",
        sessions: "9.04k",
        browser: "Firefox"
    },
    {
        avatar: "assets/images/brands/cloud-computing.png",
        sessions: "6.3k",
        browser: "Google Cloud"
    },
    {
        avatar: "assets/images/brands/safari.png",
        sessions: "9.36k",
        browser: "Safari"
    },
    {
        avatar: "assets/images/brands/opera.png",
        sessions: "9.14k",
        browser: "Opera"
    },
    {
        avatar: "assets/images/brands/microsoft.png",
        sessions: "7.48k",
        browser: "Microsoft Edge"
    },
    {
        avatar: "assets/images/brands/chromium.png",
        sessions: "11.63k",
        browser: "Chromium"
    }
]

export { sourceData, campaign, sessionData }