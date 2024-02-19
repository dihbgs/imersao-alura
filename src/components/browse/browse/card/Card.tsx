import "@/styles/Card.css";

interface CardProps {
  title: string;
  image: string;
  color: string;
}

const Card = ({ title, image, color }: CardProps) => {
  return (
    <div className="Card" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
