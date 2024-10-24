import { getAricleByName } from '@/app/(server)/api';

export default async function articlePage({ params }: Params) {
  const { articleName } = params;
  const article = await getAricleByName(articleName);
  return (
    <>
      <h1>{article.header}</h1>
      {article.text.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}
