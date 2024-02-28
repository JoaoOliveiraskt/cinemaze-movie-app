import Footer from "./components/footer"
import Header from "./components/header"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite">
        <main className="min-h-screen overflow-x-hidden w-full">
            <Header/>

            <Footer/>
        </main>
    </ThemeProvider>
  )
}

export default App
