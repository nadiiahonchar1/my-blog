'use client';
import { getLikeKey } from './(server)/ArticlePreview';

class ArticleStorage {
  constructor(private readonly _storage: Storage) {}
  like(articleName: string) {
    const likeKey = getLikeKey(articleName);
    localStorage.setItem(likeKey, 'like');
  }
  liked(articleName: string): boolean {
    if (!this._storage) {
      return false;
    }
    const likeKey = getLikeKey(articleName);
    return localStorage.getItem(likeKey) === 'like';
  }
}

export const articleStorage = new ArticleStorage(localStorage);
