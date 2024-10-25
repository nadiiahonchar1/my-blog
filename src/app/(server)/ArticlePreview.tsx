'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { articleStorage } from '../ArticleStorage';
import { MyLink } from '../shared/components/app-link';
import { ROUTING } from '../routing';
const LikeButton = dynamic(() => import('../LikeButton'), {
  ssr: false,
});

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));
  // useEffect(() => {
  //   const likeKey = getLikeKey(name);
  //   const likeValue = localStorage.getItem(likeKey);
  //   setLiked(likeValue === 'like');
  // }, [name]);

  const like = () => {
    // const likeKey = getLikeKey(name);
    // localStorage.setItem(likeKey, 'like');
    articleStorage.like(name);
    setLiked(true);
  };
  return (
    <>
      <MyLink href={ROUTING.article(name)}>{text}</MyLink>
      {/* <button type="button" onClick={like}>
        {liked ? '👍' : 'like'}
      </button> */}
      <LikeButton liked={liked} onLike={like} />
    </>
  );
}
