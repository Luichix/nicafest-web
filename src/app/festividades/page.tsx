import classNames from 'classnames';
import allFestivities from '../../../public/data/festivities.json';

import styles from './festividades.module.css';

const departamentos = [
  'Chinandega',
  'León',
  'Managua',
  'Masaya',
  'Granada',
  'Rivas',
  'Carazo',
  'Matagalpa',
  'Jinotega',
  'Nueva Segovia',
  'Estelí',
  'Madriz',
  'Río San Juan',
  'Chontales',
  'Boaco',
  'Atlántico Norte',
  'Atlántico Sur',
];

const meses = [
  { id: 1, nombre: 'Enero' },
  { id: 2, nombre: 'Febrero' },
  { id: 3, nombre: 'Marzo' },
  { id: 4, nombre: 'Abril' },
  { id: 5, nombre: 'Mayo' },
  { id: 6, nombre: 'Junio' },
  { id: 7, nombre: 'Julio' },
  { id: 8, nombre: 'Agosto' },
  { id: 9, nombre: 'Septiembre' },
  { id: 10, nombre: 'Octubre' },
  { id: 11, nombre: 'Noviembre' },
  { id: 12, nombre: 'Diciembre' },
];

function getColor(region: string) {
  switch (region) {
    case 'Boaco':
      return 'bg-red-400';
    case 'Carazo':
      return 'bg-green-400';
    case 'Chinandega':
      return 'bg-blue-400';
    case 'Chontales':
      return 'bg-yellow-400';
    case 'Estelí':
      return 'bg-indigo-400';
    case 'Granada':
      return 'bg-purple-400';
    case 'Jinotega':
      return 'bg-pink-400';
    case 'León':
      return 'bg-teal-500';
    case 'Madriz':
      return 'bg-orange-400';
    case 'Managua':
      return 'bg-blue-500';
    case 'Masaya':
      return 'bg-yellow-500';
    case 'Matagalpa':
      return 'bg-green-500';
    case 'Nueva Segovia':
      return 'bg-red-500';
    case 'RACCN':
      return 'bg-purple-500';
    case 'RACCS':
      return 'bg-pink-500';
    case 'Río San Juan':
      return 'bg-indigo-500';
    case 'Rivas':
      return 'bg-teal-600';

    // Agrega más casos para otros departamentos o regiones aquí

    default:
      return 'bg-sky-600'; // Si no se encuentra la región, se establece un color predeterminado
  }
}

// Función para formatear la fecha
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();

  return `${month} ${day}`;
}
function formatFinalDate(dateStartString: string, dateEndString: string) {
  const startDate = new Date(dateStartString);
  const endDate = new Date(dateEndString);
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const startMonth = monthNames[startDate.getUTCMonth()];
  const endMonth = monthNames[endDate.getUTCMonth()];
  const day = endDate.getUTCDate();

  if (startMonth === endMonth) {
    return `${day}`;
  }
  return `${endMonth} ${day}`;
}

interface DataFestive {
  id: number;
  fechaInicio: string;
  fechaFin?: string;
  celebracion: string;
  regiones: string[];
  descripcion: string;
  feriado: boolean;
}

export default function Festivities() {
  const onPageChange = (page: number) => {
    console.log(page);
  };

  return (
    <div className="min-h-screen px-20 pb-20">
      <h2 className="text-2xl leading-relaxed tracking-wide py-10 text-center font-bold text-gray-700">
        Celebraciones en Nicaragua en 2023
      </h2>
      {/* <div className="flex pb-8 gap-8">
        <label
          htmlFor="festividad"
          className="flex text-sm text-gray-500 gap-2 items-center font-medium"
        >
          Festividad:
          <input
            id="festividad"
            name="festividad"
            type="text"
            placeholder="Buscar"
            className="py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100 placeholder:text-gray-600"
          />
        </label>
        <label
          htmlFor="departamento"
          className="flex text-sm text-gray-500 gap-2 items-center font-medium"
        >
          Departamentos:
          <select
            id="departamento"
            name="departamento"
            // value={selectedDepartamento}
            // onChange={handleSelectChange}
            className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 outline-none bg-gray-100 text-gray-600"
          >
            <option value="">Todos</option>
            {departamentos.map((departamento) => (
              <option key={departamento} value={departamento}>
                {departamento}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="meses"
          className="flex text-sm text-gray-500 gap-2 items-center font-medium"
        >
          Mes:
          <select
            id="meses"
            name="meses"
            // value={selectedDepartamento}
            // onChange={handleSelectChange}
            className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 outline-none bg-gray-100 text-gray-600"
          >
            <option value="">Todos</option>
            {meses.map((mes) => (
              <option key={mes.id} value={mes.nombre}>
                {mes.nombre}
              </option>
            ))}
          </select>
        </label>
      </div> */}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              N°
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Celebración
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Departamentos
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Feriado
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Aquí se agregarán las filas de datos --> */}
          {allFestivities.map(
            ({
              id,
              fechaInicio,
              fechaFin,
              celebracion,
              regiones,
              feriado,
            }: DataFestive) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span>{formatDate(fechaInicio)}</span>{' '}
                  {fechaFin && (
                    <span>- {formatFinalDate(fechaInicio, fechaFin)}</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {celebracion}
                </td>
                <td className="px-6 py-4  border-b border-gray-200">
                  <div className={styles.gridRegion}>
                    {regiones.map((region, index) => (
                      <span
                        key={index}
                        className={classNames(
                          `${getColor(region)}`,
                          'max-w-min text-ellipsis overflow-hidden text-white rounded-xl whitespace-nowrap  px-3 text-center py-1 font-medium text-sm'
                        )}
                      >
                        {' '}
                        {region}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="pl-10 pr-6 py-4 whitespace-no-wrap border-b  border-gray-200">
                  {feriado ? <>🎉</> : <>-</>}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
