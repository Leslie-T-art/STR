import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        icon: 'ti ti-brand-google-home',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
                link: '/',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
                link: '/ecommerce',
                parentId: 2
            }
        ]
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 9,
        label: 'MENUITEMS.APPS.LIST.CALENDAR',
        icon: 'ti ti-calendar',
        link: '/apps/calendar',
        parentId: 8
    },
    {
        id: 10,
        label: 'MENUITEMS.APPS.LIST.CHAT',
        icon: 'ti ti-messages',
        link: '/apps/chat',
        parentId: 8
    },
    {
        id: 11,
        label: 'MENUITEMS.APPS.LIST.EMAIL',
        icon: 'ti ti-mail',
        link: '/apps/email',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.FILEMANAGER',
        icon: 'ti ti-folders',
        link: '/apps/file-manager',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.TODO',
        icon: 'ti ti-list',
        link: '/apps/to-do',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.CONTACTS',
        icon: 'ti ti-address-book',
        link: '/apps/contacts',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.KANBANBOARD',
        icon: 'ti ti-subtask',
        link: '/apps/kanbanboard',
        parentId: 8,
    },
    {
        id: 39,
        label: 'MENUITEMS.APPS.LIST.INVOICES',
        icon: 'ti ti-file-invoice',
        parentId: 8,
        subItems: [
            {
                id: 40,
                label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                link: '/invoices/list',
                parentId: 39
            },
            {
                id: 41,
                label: 'MENUITEMS.APPS.LIST.OVERVIEW',
                link: '/invoices/overview',
                parentId: 39
            },
            {
                id: 42,
                label: 'MENUITEMS.APPS.LIST.CREATEINVOICE',
                link: '/invoices/create',
                parentId: 39
            }
        ]
    },
    {
        id: 60,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 61,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'ti ti-user-circle',
        subItems: [
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
                link: '/auth/signin',
                parentId: 61,
            },
            {
                id: 63,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
                link: '/auth/signup',
                parentId: 61,
            },
            {
                id: 64,
                label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDRESET',
                link: '/auth/pass-reset',
                parentId: 61,
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDCREATE',
                link: '/auth/pass-change',
                parentId: 61,
            },
            {
                id: 66,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/auth/lockscreen',
                parentId: 61
            },
            {
                id: 67,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
                link: '/auth/logout',
                parentId: 61
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SUCCESSMESSAGE',
                link: '/auth/success-msg',
                parentId: 61
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/auth/twostep',
                parentId: 61
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.ERRORS',
                parentId: 61,
                subItems: [
                    {
                        id: 71,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404ERROR',
                        link: '/auth/404',
                        parentId: 70
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.500',
                        link: '/auth/500',
                        parentId: 70
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.OFFLINE',
                        link: '/auth/offline',
                        parentId: 70
                    },
                ]
            },
        ]
    },
    {
        id: 75,
        label: 'MENUITEMS.EXTRAPAGES.TEXT',
        icon: 'ti ti-brand-adobe',
        subItems: [
            {
                id: 76,
                label: 'MENUITEMS.EXTRAPAGES.LIST.STARTER',
                link: '/pages/starter',
                parentId: 75
            },
            {
                id: 77,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PROFILE',
                link: '/pages/profile',
                parentId: 75,
            },
            {
                id: 78,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PROFILESETTINGS',
                link: '/pages/profile-settings',
                parentId: 75,
            },
            {
                id: 80,
                label: 'MENUITEMS.EXTRAPAGES.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 75
            },
            {
                id: 81,
                label: 'MENUITEMS.EXTRAPAGES.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 75
            },
            {
                id: 82,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 75
            },
            {
                id: 83,
                label: 'MENUITEMS.EXTRAPAGES.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 75
            },
            {
                id: 84,
                label: 'MENUITEMS.EXTRAPAGES.LIST.COMINGSOON',
                link: '/pages/coming-soon',
                parentId: 75
            },
            {
                id: 85,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PRIVACYPOLICY',
                link: '/pages/privacy-policy',
                parentId: 75
            },
            {
                id: 86,
                label: 'MENUITEMS.EXTRAPAGES.LIST.TERMS&CONDITIONS',
                link: '/pages/term-conditions',
                parentId: 75
            }
        ]
    },
    {
        id: 87,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 88,
        label: 'MENUITEMS.BOOTSTRAPUI1.TEXT',
        icon: "ti ti-atom",
        subItems: [
            {
                id: 89,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 88
            },
            {
                id: 90,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.BADGES',
                link: '/ui/badges',
                parentId: 88
            },
            {
                id: 91,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 88
            },
            {
                id: 92,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.COLORS',
                link: '/ui/colors',
                parentId: 88
            },
            {
                id: 93,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.CARDS',
                link: '/ui/cards',
                parentId: 88
            },
            {
                id: 94,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 88
            },
            {
                id: 95,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 88
            },
            {
                id: 96,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.GRID',
                link: '/ui/grid',
                parentId: 88
            },
            {
                id: 97,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.IMAGES',
                link: '/ui/images',
                parentId: 88
            },
            {
                id: 98,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.TABS',
                link: '/ui/tabs',
                parentId: 88
            },
            {
                id: 99,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.ACCORDION&COLLAPSE',
                link: '/ui/accordions',
                parentId: 88
            },
            {
                id: 100,
                label: 'MENUITEMS.BOOTSTRAPUI1.LIST.MODALS',
                link: '/ui/modals',
                parentId: 88
            },
        ]
    },
    {
        id: 88,
        label: 'MENUITEMS.BOOTSTRAPUI2.TEXT',
        icon: "ti ti-atom",
        subItems: [
            {
                id: 105,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.MEDIAOBJECT',
                link: '/ui/media',
                parentId: 88
            },
            {
                id: 106,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.EMBEDVIDEO',
                link: '/ui/embed-video',
                parentId: 88
            },
            {
                id: 107,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 88
            },
            {
                id: 108,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.LISTS',
                link: '/ui/lists',
                parentId: 88
            },
            {
                id: 109,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.LINKS',
                link: '/ui/links',
                parentId: 88
            },
            {
                id: 110,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.GENERAL',
                link: '/ui/general',
                parentId: 88
            },
            {
                id: 111,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 88
            },
            {
                id: 101,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.OFFCANVAS',
                link: '/ui/offcanvas',
                parentId: 88
            },
            {
                id: 102,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.PLACEHOLDERS',
                link: '/ui/placeholders',
                parentId: 88
            },
            {
                id: 103,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.PROGRESS',
                link: '/ui/progress',
                parentId: 88
            },
            {
                id: 104,
                label: 'MENUITEMS.BOOTSTRAPUI2.LIST.NOTIFICATIONS',
                link: '/ui/notifications',
                parentId: 88
            }
        ]
    },
    {
        id: 112,
        label: 'MENUITEMS.ADVANCEUI.TEXT',
        icon: "ti ti-bat",
        subItems: [
            {
                id: 113,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERTS',
                link: '/advance-ui/sweetalerts',
                parentId: 112
            },
            {
                id: 115,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
                link: '/advance-ui/scrollbar',
                parentId: 112
            },
            {
                id: 116,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
                link: '/advance-ui/swiper',
                parentId: 112
            },
            {
                id: 117,
                label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
                link: '/advance-ui/ratings',
                parentId: 112
            },
            {
                id: 118,
                label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
                link: '/advance-ui/highlight',
                parentId: 112
            },
            {
                id: 119,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
                link: '/advance-ui/scrollspy',
                parentId: 112
            }
        ]
    },
    {
        id: 124,
        label: 'MENUITEMS.WIDGETS.TEXT',
        icon: "ti ti-bow",
        link: '/apps/widgets'
    },
    {
        id: 125,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'ti ti-file-stack',
        subItems: [
            {
                id: 126,
                label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
                link: '/forms/elements',
                parentId: 125
            },
            {
                id: 127,
                label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
                link: '/forms/select',
                parentId: 125
            },
            {
                id: 128,
                label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
                link: '/forms/checkboxs-radios',
                parentId: 125
            },
            {
                id: 129,
                label: 'MENUITEMS.FORMS.LIST.PICKERS',
                link: '/forms/pickers',
                parentId: 125
            },
            {
                id: 130,
                label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
                link: '/forms/masks',
                parentId: 125
            },
            {
                id: 131,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/forms/advanced',
                parentId: 125
            },
            {
                id: 132,
                label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
                link: '/forms/range-sliders',
                parentId: 125
            },
            {
                id: 133,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/forms/validation',
                parentId: 125
            },
            {
                id: 134,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/forms/wizard',
                parentId: 125
            },
            {
                id: 135,
                label: 'MENUITEMS.FORMS.LIST.EDITORS',
                link: '/forms/editors',
                parentId: 125
            },
            {
                id: 136,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOADS',
                link: '/forms/file-uploads',
                parentId: 125
            },
            {
                id: 137,
                label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
                link: '/forms/layouts',
                parentId: 125
            }
        ]
    },
    {
        id: 138,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'ti ti-brand-airtable',
        subItems: [
            {
                id: 139,
                label: 'MENUITEMS.TABLES.LIST.BASICTABLES',
                link: '/tables/basic',
                parentId: 138
            },
            {
                id: 140,
                label: 'MENUITEMS.TABLES.LIST.GRIDJS',
                link: '/tables/gridjs',
                parentId: 138
            },
            {
                id: 141,
                label: 'MENUITEMS.TABLES.LIST.LISTJS',
                link: '/tables/listjs',
                parentId: 138
            }
        ]
    },
    {
        id: 142,
        label: 'MENUITEMS.CHARTS.TEXT',
        icon: 'ti ti-chart-donut',
        subItems: [
            {
                id: 143,
                label: 'MENUITEMS.CHARTS.LIST.LINE',
                link: '/charts/apex-line',
                parentId: 142
            },
            {
                id: 144,
                label: 'MENUITEMS.CHARTS.LIST.AREA',
                link: '/charts/apex-area',
                parentId: 142
            },
            {
                id: 145,
                label: 'MENUITEMS.CHARTS.LIST.COLUMN',
                link: '/charts/apex-column',
                parentId: 142
            },
            {
                id: 146,
                label: 'MENUITEMS.CHARTS.LIST.BAR',
                link: '/charts/apex-bar',
                parentId: 142
            },
            {
                id: 147,
                label: 'MENUITEMS.CHARTS.LIST.MIXED',
                link: '/charts/apex-mixed',
                parentId: 142
            },
            {
                id: 148,
                label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
                link: '/charts/apex-timeline',
                parentId: 142
            },
            {
                id: 149,
                label: 'MENUITEMS.CHARTS.LIST.CANDLSTICK',
                link: '/charts/apex-candlestick',
                parentId: 142
            },
            {
                id: 150,
                label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
                link: '/charts/apex-boxplot',
                parentId: 142
            },
            {
                id: 151,
                label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
                link: '/charts/apex-bubble',
                parentId: 142
            },
            {
                id: 152,
                label: 'MENUITEMS.CHARTS.LIST.SCATTER',
                link: '/charts/apex-scatter',
                parentId: 142
            },
            {
                id: 153,
                label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
                link: '/charts/apex-heatmap',
                parentId: 142
            },
            {
                id: 154,
                label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
                link: '/charts/apex-treemap',
                parentId: 142
            },
            {
                id: 155,
                label: 'MENUITEMS.CHARTS.LIST.PIE',
                link: '/charts/apex-pie',
                parentId: 142
            },
            {
                id: 156,
                label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
                link: '/charts/apex-radialbar',
                parentId: 142
            },
            {
                id: 157,
                label: 'MENUITEMS.CHARTS.LIST.RADAR',
                link: '/charts/apex-radar',
                parentId: 142
            },
            {
                id: 158,
                label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
                link: '/charts/apex-polar',
                parentId: 142
            },
        ]
    },
    {
        id: 159,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'ti ti-triangle-square-circle',
        subItems: [
            {
                id: 160,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 159
            },
            {
                id: 161,
                label: 'MENUITEMS.ICONS.LIST.BOOTSTRAP',
                link: '/icons/bootstrap',
                parentId: 159
            },
            {
                id: 164,
                label: 'MENUITEMS.ICONS.LIST.PHOSPHOR',
                link: '/icons/phosphor',
                parentId: 159
            },

        ]
    },
    {
        id: 165,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'ti ti-map',
        subItems: [
            {
                id: 166,
                label: 'MENUITEMS.MAPS.LIST.GOOGLE',
                link: '/maps/google',
                parentId: 165
            },
            {
                id: 167,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 165
            }
        ]
    },
    {
        id: 168,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'ti ti-brand-stackshare',
        subItems: [
            {
                id: 169,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 168
            },
            {
                id: 170,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 168,
                subItems: [
                    {
                        id: 171,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 170
                    },
                    {
                        id: 172,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 170,
                        subItems: [
                            {
                                id: 173,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.1',
                                parentId: 172
                            },
                            {
                                id: 174,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.2',
                                parentId: 172,

                            }
                        ]
                    }
                ]
            }
        ]
    }
]