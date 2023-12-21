import PropTypes from 'prop-types';
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Loading...</h4>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};