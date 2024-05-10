import {series} from './data.js';
import {Serie} from './serie.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let averageTable: HTMLElement = document.getElementById("average")!;
let detalleTable: HTMLElement = document.getElementById("serieDetail")!;

mostrarDatosSeries(series);
mostrarAverage(series);

function mostrarDetalleSerie(serie: Serie): void {
    detalleTable.innerHTML = '';
    let imagen = document.createElement("tbody");
    imagen.innerHTML=`<img src=${serie.image} referrerpolicy="no-referrer" class="card-img-top" title="${serie.name}">`
    let tbodyDetalleSerie = document.createElement("tbody");
    tbodyDetalleSerie.innerHTML = `<div class="card-body">
    <h5 class="card-title">${serie.name}</h5>
    <p class="card-text">${serie.description}</span></p>
    <a href=${serie.url}>${serie.url}</a>`;
    detalleTable.appendChild(imagen);
    detalleTable.appendChild(tbodyDetalleSerie);
}


function mostrarDatosSeries(series: Serie[]): void{
    let tbodySerie = document.createElement("tbody");
    let index=0;
    for(let serie of series){
        let trElement: HTMLElement = document.createElement("tr");
        let linkId = "seriesLink" + index;
        trElement.innerHTML=`<td style="background-color: #f5f5f5e8;">${serie.index}</td>
        <td style="background-color: #f5f5f5e8;"><a href="#" class="serie-link" id="${linkId}"</a>${serie.name}</td>
        <td style="background-color: #f5f5f5e8;">${serie.channel}</td>
        <td style="background-color: #f5f5f5e8;">${serie.seasons}</td>`
        tbodySerie.appendChild(trElement);
        index++;
    }
    seriesTable.append(tbodySerie)
}

function mostrarAverage(series: Serie[]): void{
    let average:number = darAverage();
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML=`<tr><b> Seasons Average: </b></td><td>${average}</td>`;
    averageTable.appendChild(trElement);
}

function darAverage():number{
    let average: number=0;
    let total: number=0;
    for(let index=0; index< series.length; index++){
        let serie: Serie= series[index]
        total+=serie.seasons;
    }
    average=total/series.length
    return average;
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    let seriesContainer: HTMLElement = document.getElementById("series")!;
    seriesContainer.addEventListener("click", function(event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            const enlaceClickeado = event.target as HTMLAnchorElement;
            if (enlaceClickeado.classList.contains("serie-link")) {
                const serieNombre = enlaceClickeado.innerText;
                let serieSeleccionada: Serie | undefined;
                for (let serie of series) {
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