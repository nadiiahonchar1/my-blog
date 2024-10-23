import Link from 'next/link';
import styles from './app-link.module.css';

export function MyLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
