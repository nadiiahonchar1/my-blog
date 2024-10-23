import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { MyLink } from './shared/components/app-link';

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      <h1>My blog</h1>
      <ul>
        {allArticles.map((article) => (
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
