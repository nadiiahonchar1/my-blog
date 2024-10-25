'use client';

type LikeButtonProps = {
  liked: boolean;
  onLike: () => void;
};

export default function LikeButton({ liked, onLike }: LikeButtonProps) {
  return (
    <button type="button" onClick={onLike}>
      {liked ? '👍' : 'like'}
    </button>
  );
}
