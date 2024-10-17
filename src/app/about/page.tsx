import Image from 'next/image';
import myImg from './img.jpg';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImg} alt="my funny photo" loading="eager" />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quam
        culpa ea totam adipisci eum nostrum placeat corporis excepturi nam nulla
        maiores dicta aliquid molestias nihil voluptate quibusdam atque iure
        sint hic expedita quidem. Cumque minima harum veritatis. Veniam
        temporibus vitae ea architecto reprehenderit expedita.
      </div>
    </article>
  );
}
