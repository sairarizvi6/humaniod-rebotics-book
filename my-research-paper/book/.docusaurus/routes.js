import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '09c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6a1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '259'),
            routes: [
              {
                path: '/chapter-1',
                component: ComponentCreator('/chapter-1', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-10',
                component: ComponentCreator('/chapter-10', '371'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-11',
                component: ComponentCreator('/chapter-11', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-12',
                component: ComponentCreator('/chapter-12', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-13',
                component: ComponentCreator('/chapter-13', 'e98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-14',
                component: ComponentCreator('/chapter-14', '8e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-15',
                component: ComponentCreator('/chapter-15', '9c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-16',
                component: ComponentCreator('/chapter-16', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-17',
                component: ComponentCreator('/chapter-17', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-2',
                component: ComponentCreator('/chapter-2', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-3',
                component: ComponentCreator('/chapter-3', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-4',
                component: ComponentCreator('/chapter-4', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-5',
                component: ComponentCreator('/chapter-5', '34a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-6',
                component: ComponentCreator('/chapter-6', 'd70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-7',
                component: ComponentCreator('/chapter-7', 'd17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-8',
                component: ComponentCreator('/chapter-8', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chapter-9',
                component: ComponentCreator('/chapter-9', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
