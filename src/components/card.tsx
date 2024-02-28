type props = {
    id: string
}

export default function Card({id}: props) {
  return (
    <div className="w-72 h-40 flex border items-center justify-center rounded-xl overflow-hidden">
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer noopener"
        target="_blank"
        className=""
      >
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="capa do vídeo"
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}
