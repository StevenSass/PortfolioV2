import "./CarouselItem.scss";
import data from "../../data/project.json";

export default function CarouselItem({ index }) {
  return (
    <div>
      <div>{data[index].description}</div>
    </div>
  );
}
