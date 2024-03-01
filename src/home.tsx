import Category, { categories, filterCategory } from "@/components/category";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Card from "@/components/card";

function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
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
  );
}

export default Home;
