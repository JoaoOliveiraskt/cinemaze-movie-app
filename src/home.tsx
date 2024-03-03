import Category, { categories, filterCategory } from "@/components/category";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Card from "@/components/card";
import { Input } from "./components/ui/input";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("")

  function getName(e: React.ChangeEvent<HTMLInputElement>) {
     setName(e.target.value)  
  }


  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <Hero>

        <Input
        type="text"
        placeholder="Nome"
        onChange={getName}
        className="mt-20 max-w-72"
        />
        <h2 className="text-primary mt-3">{name}</h2>

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
