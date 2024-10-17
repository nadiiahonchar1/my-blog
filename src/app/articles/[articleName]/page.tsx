export default function articlePage({ params }: Params) {
  const { articleName } = params;
  return <>articlePage: {articleName}</>;
}
