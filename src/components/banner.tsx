type props = {
    url: string;
};

export default function Banner({url}: props) {
  return (
    <div className="w-full max-h-[20rem] overflow-hidden mt-14 flex items-center justify-center">
      <img
        src={`public/${url}.webp`}
        alt="banner do filme"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
