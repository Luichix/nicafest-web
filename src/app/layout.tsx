import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.css';
import classNames from 'classnames';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Festividades Nicaragua',
  description: 'Pagina web dedicada a mostrar las festividades de Nicaragua',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames('bg-white')}>
        {/* Encabezado */}
        <header className={styles.backgroundHeader}>
          <div className={styles.customShape}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
          <span className="text-lg md:text-2xl lg:text-3xl pr-2 xl:text-5xl xl:leading-relaxed xl:pr-2 ">
            🪅
          </span>
          <div>
            <h1 className="text-lg md:text-2xl lg:text-3xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed ">
              Festividades de Nicaragua
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-medium xl:text-2xl xl:space-y-10 xl:pl-4 xl:leading-relaxed xl:tracking-wide">
              Bienvenido a nuestro sitio dedicado a las <br /> celebraciones
              festivas de Nicaragua.
            </p>
          </div>
          {/* Menú de Navegación */}
          <nav className="hidden  lg:pt-4 lg:block lg:relative  flex-grow xl:pt-8 xl:text-lg">
            <ul className="flex gap-10 justify-self-end justify-end">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/festividades">Festividades</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className={styles.backgroundFooter}>
          <div className={styles.shapeDivider}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>

          <div className="text-sm lg:text-lg pb-4 flex flex-col self-center text-center justify-self-center">
            <span>Copyright © 2023. Todos los derechos reservados</span>
            <span className="font-bold">Festivos de Nicaragua</span>
          </div>
          <span className="text-sm lg:text-lg self-center lg:self-end lg:absolute lg:bottom-10">
            Diseñado por:{' '}
            <a
              href="https://luichix.github.io/portafolio"
              target="_blank"
              className="font-bold"
            >
              Luichix
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
