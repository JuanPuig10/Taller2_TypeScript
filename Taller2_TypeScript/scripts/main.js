import { series } from './data.js';
var seriesTable = document.getElementById("series");
var averageTable = document.getElementById("average");
var detalleTable = document.getElementById("serieDetail");
mostrarDatosSeries(series);
mostrarAverage(series);
function mostrarDetalleSerie(serie) {
    detalleTable.innerHTML = '';
    var imagen = document.createElement("tbody");
    imagen.innerHTML = "<img src=".concat(serie.image, " referrerpolicy=\"no-referrer\" class=\"card-img-top\" title=\"").concat(serie.name, "\">");
    var tbodyDetalleSerie = document.createElement("tbody");
    tbodyDetalleSerie.innerHTML = "<div class=\"card-body\">\n    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n    <p class=\"card-text\">").concat(serie.description, "</span></p>\n    <a href=").concat(serie.url, ">").concat(serie.url, "</a>");
    detalleTable.appendChild(imagen);
    detalleTable.appendChild(tbodyDetalleSerie);
}
function mostrarDatosSeries(series) {
    var tbodySerie = document.createElement("tbody");
    var index = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        var linkId = "seriesLink" + index;
        trElement.innerHTML = "<td style=\"background-color: #f5f5f5e8;\">".concat(serie.index, "</td>\n        <td style=\"background-color: #f5f5f5e8;\"><a href=\"#\" class=\"serie-link\" id=\"").concat(linkId, "\"</a>").concat(serie.name, "</td>\n        <td style=\"background-color: #f5f5f5e8;\">").concat(serie.channel, "</td>\n        <td style=\"background-color: #f5f5f5e8;\">").concat(serie.seasons, "</td>");
        tbodySerie.appendChild(trElement);
        index++;
    }
    seriesTable.append(tbodySerie);
}
function mostrarAverage(series) {
    var average = darAverage();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<tr><b> Seasons Average: </b></td><td>".concat(average, "</td>");
    averageTable.appendChild(trElement);
}
function darAverage() {
    var average = 0;
    var total = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        total += serie.seasons;
    }
    average = total / series.length;
    return average;
}
document.addEventListener("DOMContentLoaded", function (event) {
    var seriesContainer = document.getElementById("series");
    seriesContainer.addEventListener("click", function (event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            var enlaceClickeado = event.target;
            if (enlaceClickeado.classList.contains("serie-link")) {
                var serieNombre = enlaceClickeado.innerText;
                var serieSeleccionada = void 0;
                for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
                    var serie = series_2[_i];
                    if (serie.name === serieNombre) {
                        serieSeleccionada = serie;
                        break;
                    }
                }
                console.log(serieSeleccionada);
                if (serieSeleccionada) {
                    mostrarDetalleSerie(serieSeleccionada);
                }
            }
        }
    });
});
