import App from '@/App';
import ExamplesView from '@/pages/ExampleView';
import {lazyLoadPage} from '@/scripts/lazyLoad';
import MainDocumentationView from '@/pages/DocumentationChildrenComponent/MainDocumentationView';
import StartHereView from '@/pages/DocumentationChildrenComponent/StartHereView';

const DocumentationView = lazyLoadPage('DocumentationView');

export const publicRoutes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <ExamplesView />
      },
      {
        path: 'Documentation',
        element: <DocumentationView />,
        children: [
          {
            index: true,
            element: <MainDocumentationView/>
          },
          {
            path: 'StartHere',
            element: <StartHereView />,
          }
          // {
          //   path: "ButtonComponentDocumentation",
          //   element: <ButtonComponentDocumentationView />
          // },
          // {
          //   path: "RegisterComponentDocumentation",
          //   element: <RegisterComponentDocumentationView />
          // },
          // {
          //   path: "SubscriptionComponentDocumentation",
          //   element: <SubscriptionComponentDocumentationView />
          // }
        ]
      }
    ],
  },
];