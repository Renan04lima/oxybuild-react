export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'offcanvas-text',
    },
    {
        id: 2,
        title: 'O Quintal',
        path: '/projects/project-fullwidth',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/projects/project-2-columns',
                text: 'Quem Somos',
            },
            {
                id: 'submenu-02',
                link: '/projects/project-gallery',
                text: 'Unidades',
            },
            {
                id: 'submenu-03',
                link: '/projects/project-slider',
                text: 'Matrículas',
            },
        ],
    },
    {
        id: 3,
        title: 'Etapas de Ensino',
        path: '/projects/project-fullwidth',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/projects/project-2-columns',
                text: 'Materna',
            },
            {
                id: 'submenu-02',
                link: '/projects/project-gallery',
                text: 'Ninho I',
            },
            {
                id: 'submenu-03',
                link: '/projects/project-slider',
                text: 'Ninho II',
            },
            {
                id: 'submenu-04',
                link: '/projects/project-slider',
                text: 'Ciclo I',
            },
        ],
    },
    {
        id: 4,
        title: 'Fale Conosco',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
