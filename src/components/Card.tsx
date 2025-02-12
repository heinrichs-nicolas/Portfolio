type props = {
  title: string;
  content?: string;
};

const Card = ({ title }: props) => {
  return <div>{title}</div>;
};

export default Card;
