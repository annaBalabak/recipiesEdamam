import check from "./check.png";

function MyRecipesComponent({ label, image, calories, ingridients }) {
  return (
    <div>
      <div className="container">
        <h1>{label}</h1>
      </div>
      <div className="container">
        <img src={image} alt="dish" />
      </div>
      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>
      <ul className="container list">
        {ingridients.map((ingridient, index) => (
          <li key={index}>
            {" "}
            <img src={check} alt="check mark" width="30px" /> {ingridient}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MyRecipesComponent;
