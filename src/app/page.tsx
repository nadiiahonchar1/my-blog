import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { MyLink } from './shared/components/app-link';
const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allArticles = await getAllArticles();
  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );
  return (
    <>
      <h1>My blog, page {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <MyLink href={ROUTING.article(article.name)}>
              {article.header}
            </MyLink>
          </li>
        ))}
      </ul>
    </>
  );
}
