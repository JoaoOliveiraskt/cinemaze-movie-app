import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import videos from "../json/videos.json";
import SearchVideoList from "@/components/searchVideoList";

export default function Search() {
    return (
        <main className="w-full flex flex-col items-center">
            <Header/>
            <Hero className="min-h-screen w-full flex">
                <section className="flex flex-col items-center justify-center gap-4 mt-14">
                    
                    <SearchVideoList videos={videos}/>
                </section>
            </Hero>
            <Footer/>
        </main>
    )
}