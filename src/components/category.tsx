import videos from "../json/videos.json";

export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

export const filterCategory = (id: string | number) => {
  const categoryIndex = typeof id === 'number' ? id : categories.indexOf(id);
  return videos.filter((video) => video.category === categories[categoryIndex]);
};

type props = {
    category: string;
    children: React.ReactNode
}

export default function Category({category, children}: props) {
  return (
    <div className="mt-20 flex flex-col justify-center gap-5 px-4">
      <div className="px-6">
        <h2 className="text-2xl text-center font-semibold tracking-wide">
          {category}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {children}
      </div>
    </div>
  );
}
