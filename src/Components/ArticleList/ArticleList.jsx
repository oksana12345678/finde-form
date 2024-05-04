import css from "./ArticleList.module.css";

const ArticlesList = ({ items }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map(({ objectID, url, title, story_title, story_url }) => (
          <li key={objectID}>
            <a
              href={url ? url : story_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title ? title : story_title ? story_title : "No title available"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesList;
