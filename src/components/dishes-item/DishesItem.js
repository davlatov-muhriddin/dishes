import Styles from "./dishes-item.module.css";

function DishesItem({ title, image, description, price, category }) {
  return (
    <div className={Styles.dishesCard}>
      <img src={image} alt={title} />

      <div className={Styles.dishesCardBody}>
        <h3>{title}</h3>
        <p>{description.slice(0, 150)}...</p>

        <div className="wrapper">
          <span>${price}</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}

export default DishesItem;
