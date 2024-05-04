import css from "./ArticleList.module.css";
import Article from "../Article/Article";
const ArticlesList = ({ items }) => {
  return (
    <div>
      <ul className={css.list}>
        <Article items={items} />
      </ul>
    </div>
  );
};
export default ArticlesList;
