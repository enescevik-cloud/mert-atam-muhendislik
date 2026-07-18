import { useRoutes } from "react-router-dom";

import routes from "./router/routes.jsx";

function App() {
  return useRoutes(routes);
}

export default App;
