import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './variables/arrays/routes'

const AppRoutes = () => {
  const routesConsume = useRoutes(routes)
  return routesConsume
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
