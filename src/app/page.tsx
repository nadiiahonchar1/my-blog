import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      <h1>My blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>
            <Link href={ROUTING.article(article.name)}>{article.header}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
