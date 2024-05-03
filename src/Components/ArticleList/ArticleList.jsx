import css from "./ArticleList.module.css";

const ArticlesList = ({ items }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesList;
