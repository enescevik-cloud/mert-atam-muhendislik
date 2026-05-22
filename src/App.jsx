import { useRoutes } from 'react-router-dom';
import { routes } from './router/routes.jsx';

export default function App() {
  return useRoutes(routes);
}
