import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Hero from "./components/hero";
import { ThemeProvider } from "./components/theme-provider";
import Card from "./components/card";
import Category, { categories, filterCategory } from "./components/category";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite">
      <main className="min-h-screen w-full bg-background flex flex-col">
        <Header />
        <Banner url="favoritos"/>

        <Hero>
          {categories.map((category, index) => (
            <Category key={index} category={category}>
              {filterCategory(index).map(({ id }) => {
                return <Card key={id} id={id} />;
              })}
            </Category>
          ))}
        </Hero>

        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
