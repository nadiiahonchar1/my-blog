import Link from 'next/link';
import type { UrlObject } from 'url';
import styles from './app-link.module.css';

export function MyLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
