const fliedata = [
    {
        id: 1,
        color: 'primary',
        icon: 'bi bi-file-earmark-text',
        num: 345,
        type: 'Files'
    },
    {
        id: 2,
        color: 'danger',
        icon: 'bi bi-images',
        num: 3124,
        type: 'Images'
    },
    {
        id: 3,
        color: 'secondary',
        icon: 'bi bi-camera-reels',
        num: 213,
        type: 'Video'
    },
    {
        id: 4,
        color: 'warning',
        icon: 'bi bi-filetype-doc',
        num: 469,
        type: 'Docs Files'
    },
    {
        id: 5,
        color: 'success',
        icon: 'bi bi-google-play',
        num: 18,
        type: 'Application'
    },
];

const fliefolder = [
    {
        id: 1,
        icon: "ti-file-description",
        title: 'Document',
        files: '1,324',
        gb: '14.5',
        color: 'danger',
        valuenow: 63
    },
    {
        id: 2,
        icon: "ti-photo",
        title: 'Image',
        files: '210',
        gb: '1.23',
        color: 'info',
        valuenow: 46
    },
    {
        id: 3,
        icon: "ti-brand-youtube",
        title: 'Video',
        files: '102',
        gb: '34',
        color: 'warning',
        valuenow: 79
    },
    {
        id: 4,
        icon: "ti-music",
        title: 'Music',
        files: '154',
        gb: '2.7',
        color: 'secondary',
        valuenow: 87
    },
    {
        id: 5,
        icon: "ti-gradienter",
        title: 'Other',
        files: '30',
        gb: '45',
        color: 'primary',
        valuenow: 71
    },
];
const folder = [
    {
        id: 1,
        title: 'My Documents',
        feb: '24',
        files: 733,
        gb: 1.4
    },
    {
        id: 2,
        title: 'Steex - Admin & Dashboard Templates',
        feb: '08',
        files: 2473,
        gb: 1.6
    },
    {
        id: 3,
        title: 'Database',
        feb: '16',
        files: 269,
        gb: 716
    }
];

const access = [
    {
        id: '1',
        icon: 'ti-file',
        title: 'Sprix.docs',
        size: '256 KB',
        selected: true,
        color:'primary'
    },
    {
        id: '2',
        icon: 'ti-photo',
        title: 'Fotoimg.png',
        size: '2.85 MB',
        color:'success'
    },
    {
        id: '3',
        icon: 'ti-file-text',
        title: 'Lemberen.txt',
        size: '0.9 MB',
        color:'info'
    }
]

const filerecent = [
    {
        id: 1,
        icon: "bi bi-filetype-scss",
        color: 'danger',
        title: 'app.scss',
        item: "01",
        mb: "0.234 KB",
        date: '07 May, 2023'
    },
    {
        id: 2,
        icon: "bi bi-filetype-scss",
        color: 'danger',
        title: '_variables.scss',
        item: "01",
        mb: "0.234 KB",
        date: '03 April, 2023'
    },
    {
        id: 3,
        icon: "bi bi-filetype-gif",
        color: 'success',
        title: 'Offline Pages.gif',
        item: "01",
        mb: "0.987 MB",
        date: '12 Nov, 2022'
    },
    {
        id: 4,
        icon: "bi bi-filetype-pdf",
        color: 'danger',
        title: 'Velzon Docs File',
        item: 24,
        mb: "2.5 MB",
        date: '15 Feb, 2023'
    },
    {
        id: 5,
        icon: "bi bi-filetype-mp4 ",
        color: 'warning',
        title: 'Velzon Docs Video.mp4',
        item: "19",
        mb: "149.33 MB",
        date: '28 Nov, 2022'
    },
    {
        id: 6,
        icon: "bi bi-filetype-psd ",
        color: 'primary',
        title: 'Steex Design Kit.psd',
        item: "148",
        mb: "234.87 MB",
        date: '29 Jan, 2023'
    },
    {
        id: 7,
        icon: "bi bi-filetype-mp4",
        color: 'warning',
        title: 'Steex_customizes.mp4',
        item: "02",
        mb: "875 MB",
        date: '16 May, 2023'
    },
]

export { fliedata, fliefolder, folder, filerecent, access };