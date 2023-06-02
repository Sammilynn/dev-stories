import Button from "../UI/Button";
import styles from "../App.module.css";

const Item = ({
  item,
  onRemoveItem,
}: {
  item: {
    objectID: string;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  };
  onRemoveItem: (item: {
    objectID: string;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  }) => void;
}) => {
  return (
    <li className={styles.item}>
      <span style={{ width: "40%" }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: "30%" }}>{item.author}</span>

      <span style={{ width: "10%" }}>{item.num_comments}</span>
      <span style={{ width: "10%" }}>{item.points}</span>
      <span style={{ width: "10%" }}>
        <Button
          type="button"
          onClick={() => onRemoveItem(item)}
          className={`${styles.button} ${styles.buttonSmall}`}
        >
          Dismiss
        </Button>
      </span>
    </li>
  );
};

export default Item;