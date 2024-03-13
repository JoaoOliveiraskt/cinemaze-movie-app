import { useState } from "react";
import { Input } from "./ui/input";
import VideoList from "./videoList";

type Video = {
  id: string;
  title: string;
  url: string;
  cover: string;
  category: string;
};

type Props = {
    videos: Video[];
};

function filterVideos(videos: Video[], searchTerm: string | undefined) {
    const term = searchTerm ?? "";
    return videos.filter(
        (video) =>
            video.category.toLowerCase().includes(term.toLowerCase()) || video.title.includes(term.toLowerCase())
    );
}

export default function SearchVideoList({ videos }: Props) {
const [searchTerm, setSearchTerm] = useState<string>("");
const foundVideos = filterVideos(videos, searchTerm);

return (
    <section className="space-y-5">
      <div className="w-full min-w-72">
      <Input
            type="search"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full"
        />
      </div>
        <VideoList videos={foundVideos} emptyHeading={`Nenhum video sobre ${searchTerm}`} />
    </section>
);
}
