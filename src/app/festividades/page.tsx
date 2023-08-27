import classNames from "classnames";
import allFestivities from '../../../public/data/festivities.json'
import styles from './festividades.module.css'

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
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();

    return `${month} ${day}`;
}
function formatFinalDate(dateStartString: string, dateEndString: string) {
    const startDate = new Date(dateStartString);
    const endDate = new Date(dateEndString);
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
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
    id: number
    fechaInicio: string
    fechaFin?: string
    celebracion: string
    regiones: string[]
    descripcion: string
    feriado: boolean
}


// Puedes utilizar este objeto "festividades" en tu aplicación React con el tipo de dato DataFestive.


// Puedes utilizar este objeto "festividades" en tu aplicación React para llenar la tabla.


export default function Festivities() {
    return <div className="min-h-screen px-20 pb-20" >

        <h2 className="text-2xl leading-relaxed tracking-wide py-10 text-center font-bold text-gray-700">Celebraciones en Nicaragua en 2023</h2>
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
                {allFestivities.map(({ id, fechaInicio, fechaFin, celebracion, regiones, feriado }: DataFestive) => (
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {id}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span>{formatDate(fechaInicio)}</span> {fechaFin && <span>- {formatFinalDate(fechaInicio, fechaFin)}</span>}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {celebracion}
                        </td>
                        <td className="px-6 py-4  border-b border-gray-200">
                            <div className={styles.gridRegion}>
                                {regiones.map((region) => (
                                    <span className={classNames(`${getColor(region)}`, "max-w-min text-ellipsis overflow-hidden text-white rounded-xl whitespace-nowrap  px-3 text-center py-1 font-medium text-sm")}> {region}</span>
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
}