export default function RecipeCardImage({ imgSrc, pt }) {
  return (
    <div className="card-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
