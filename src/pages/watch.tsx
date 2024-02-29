import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Watch() {
    return (
        <main className="w-full bg-background flex flex-col items-center">
            <Header/>
                <Hero className="w-full min-h-screen items-center">
                <iframe className="mt-20" width="854" height="480" src="https://www.youtube.com/embed/B_nq7VTJZds?si=pbdSC7FvCQ3vbE_B" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Hero>
            <Footer/>
        </main>
    )
}