import {createRoot} from 'react-dom/client'
import ThemeProvider from './ThemeProvider'
import App from './App'
import ThemeContext from './ThemeContex'
import './index.css'
const root = createRoot(document.getElementById("root"))
root.render(
    <ThemeProvider>
         <App/>
    </ThemeProvider>
   
)