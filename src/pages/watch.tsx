import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { useParams } from "react-router-dom";
import videos from "../json/videos.json";
import PageNotFound from "@/pageNotFound";

export default function Watch() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === params.id;
  });
  if(!video) {return <PageNotFound/>}


  return (
    <main className="w-full bg-background flex flex-col items-center">
      <Header />
      <Hero className="w-full min-h-screen items-center">
        <iframe
          className="mt-20"
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${video?.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Hero>
      <Footer />
    </main>
  );
}
