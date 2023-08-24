import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import classNames from 'classnames';

const departments = [
  {
    id: 1,
    name: "Boaco",
    abbreviation: "BO",
    climate: "☀️ 30°C",
    municipalities: 6
  },
  {
    id: 2,
    name: "Carazo",
    abbreviation: "CA",
    climate: "🌦️ 28°C",
    municipalities: 8
  },
  {
    id: 3,
    name: "Chinandega",
    abbreviation: "CH",
    climate: "🌤️ 32°C",
    municipalities: 13
  },
  {
    id: 4,
    name: "Chontales",
    abbreviation: "CT",
    climate: "🌦️ 29°C",
    municipalities: 10
  },
  {
    id: 5,
    name: "Estelí",
    abbreviation: "ES",
    climate: "🌤️ 28°C",
    municipalities: 6
  },
  {
    id: 6,
    name: "Granada",
    abbreviation: "GR",
    climate: "⛅ 31°C",
    municipalities: 4
  },
  {
    id: 7,
    name: "Jinotega",
    abbreviation: "JI",
    climate: "🌦️ 27°C",
    municipalities: 8
  },
  {
    id: 8,
    name: "León",
    abbreviation: "LE",
    climate: "☀️ 33°C",
    municipalities: 10
  },
  {
    id: 9,
    name: "Madriz",
    abbreviation: "MZ",
    climate: "🌤️ 30°C",
    municipalities: 9
  },
  {
    id: 10,
    name: "Managua",
    abbreviation: "MA",
    climate: "🌤️ 31°C",
    municipalities: 9
  },
  {
    id: 11,
    name: "Masaya",
    abbreviation: "MY",
    climate: "🌤️ 32°C",
    municipalities: 9
  },
  {
    id: 12,
    name: "Matagalpa",
    abbreviation: "MT",
    climate: "🌦️ 29°C",
    municipalities: 13
  },
  {
    id: 13,
    name: "Nueva Segovia",
    abbreviation: "NS",
    climate: "⛅ 30°C",
    municipalities: 12
  },
  {
    id: 14,
    name: "RACCN",
    abbreviation: "RN",
    climate: "🌧️ 26°C",
    municipalities: 8
  },
  {
    id: 15,
    name: "RACCS",
    abbreviation: "RS",
    climate: "🌧️ 26°C",
    municipalities: 12
  },
  {
    id: 16,
    name: "Río San Juan",
    abbreviation: "RJ",
    climate: "🌧️ 26°C",
    municipalities: 6
  },
  {
    id: 17,
    name: "Rivas",
    abbreviation: "RI",
    climate: "⛅ 32°C",
    municipalities: 10
  }
];



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-20  ">
      {/* Introducción */}

      {/* ... Agrega el resto del contenido aquí ... */}

      <section className='w-full px-20 pb-20'>
        <div className='text-center p-20 text-gray-700 text-lg'>
        <h2 className='text-center font-bold text-3xl '>Explora nuestras tradiciones culturales y festividades regionales</h2>
        <p>Bienvenido a nuestro sitio dedicado a las celebraciones festivas de Nicaragua.</p>
        <p>Sumérgete en la riqueza cultural y las tradiciones de nuestro país a medida que exploras nuestros días festivos y festividades regionales únicas.</p>
        </div>
        <div>

        </div>
        <ul className={styles.gridView}>
          {departments.map(({ id, name, climate, municipalities, abbreviation }, index) => (
            <li key={index} className={classNames(styles.department,styles[abbreviation])}>
              <div className='flex justify-between'>
              <span className='underline decoration-2 underline-offset-4'>{id}</span>
              <span>{abbreviation}</span>
              </div>
              <Link className='self-center' href={`/departamento/`}>
                <span className='text-center text-3xl'>{name}</span>
              </Link>
              <div className='flex justify-between'>
                <span className="icono-clima">{climate}</span>
                <span>Municipios: {municipalities}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
