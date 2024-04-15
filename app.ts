// Importa la clase Serie y el array de series
import {series} from './data.ts';

// Función para renderizar la tabla de series
function renderSeriesTable(series): void {
    const seriesTableBody = document.getElementById("series-table-body")!;

    series.forEach((serie) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;

        seriesTableBody.appendChild(row);
    });
}

// Función para calcular y renderizar el promedio de temporadas
function renderAverageSeasons(series): void {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    const averageSeasonsElement = document.getElementById("average-seasons")!;
    averageSeasonsElement.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;
}

// Cuando la ventana se cargue, renderiza la tabla de series y el promedio de temporadas
window.onload = () => {
    renderSeriesTable(series);
    renderAverageSeasons(series);
};
