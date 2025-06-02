import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './context/AuthContext.tsx'
import ProductContextProvider from './context/ProductContext.tsx'
import ThemeContextProvider from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AuthContextProvider>
  </ThemeContextProvider>
)
