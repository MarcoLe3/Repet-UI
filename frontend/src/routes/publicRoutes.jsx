import App from '@/App';
import ExamplesView from '@/pages/ExampleView';
import {lazyLoadPage} from '@/scripts/lazyLoad';

const DocumentationView = lazyLoadPage('DocumentationView');
const LoginView = lazyLoadPage('LoginView');

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
        element: <DocumentationView />
      }
    ],
  },
  {
    path: '/login',
    element: <LoginView />
  }
];