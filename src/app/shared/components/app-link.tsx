import Link from 'next/link';

export function MyLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return <Link href={href}>{children}</Link>;
}
