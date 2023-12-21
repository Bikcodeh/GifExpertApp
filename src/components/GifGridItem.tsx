import { GifInfo } from "../interfaces";

interface Props {
  gif: GifInfo;
}

export const GifGridItem = ( { gif } : Props) => {
  const {title, url} = gif;
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}