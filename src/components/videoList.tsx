import Card from "./card";

type Video = {
    id: string;
    title: string;
    url: string;
    cover: string;
    category: string;
}

type Props = {
  videos: Video[];
  emptyHeading: string;
};

export default function VideoList({ videos, emptyHeading }: Props) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "videos" : "video";
    heading = `${count} ${noun}`;
  }

  return (
    <div className="space-y-4">
      <h2 className="">{heading}</h2>
      <section className="flex flex-wrap w-full items-center justify-center gap-5">
        {videos.map((video) => {
          return (
              <Card key={video.id} id={video.id} />
          );
        })}
      </section>
    </div>
  );
}
