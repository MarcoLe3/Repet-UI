import App from '@/App';
import {lazy} from 'react';
import ExamplesView from '@/pages/ExampleView';
const LazyDocumentationView = lazy(() => import('@/pages/DocumentationView'));

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
        element: <LazyDocumentationView />
      }
    ],
  }
];