import { series } from "./data";

export class Serie{
    constructor(public index: number, public name: string, public channel:string, public seasons: number, public description:string,public url:string, public image: string)
    {

    }
}