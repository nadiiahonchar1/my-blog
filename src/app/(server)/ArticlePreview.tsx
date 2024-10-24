'use client';

import { MyLink } from '../shared/components/app-link';
import { ROUTING } from '../routing';
import { useEffect, useState } from 'react';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

const getLikeKey = (articleName: string) => `my_blog_like${articleName}`;

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'like');
  }, [name]);

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, 'like');
    setLiked(true);
  };
  return (
    <>
      <MyLink href={ROUTING.article(name)}>{text}</MyLink>
      <button type="button" onClick={like}>
        {liked ? '👍' : 'like'}
      </button>
    </>
  );
}
