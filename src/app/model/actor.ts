//clase pura JS
export class Actor {
//atributos
    #id: number;
    #name: string;
    #skill: string | undefined;     //"undefined" solo si es optativo
    #studio?: string;    //"?" = No obligatorio
//constructor, 
    constructor(id: number, name: string, skill?: string, studio?: string) {
        this.#id = id;
        this.#name = name;
        this.#skill = skill;
        this.#studio = studio;
    }
//3 ejemplos
    // actor1 = new Actor(1, "Hector", "programa");
    // actor2 = new Actor(2, "Hector", "programa", "Proven");
    // actor3 = new Actor(3, "Hector");

//gets: metodos de acceso publico
    get id():number {
        return this.#id;
    }
    get name():string {
        return this.#name;
    }
    get skill():string | undefined {
        return this.#skill;
    }
    get studio():string | undefined {
        return this.#studio;
    }
//sets
    set id(id:number) {
        this.#id = id;
    }
    set name(name:string) {
        this.#name = name;
    }
    set skill(skill:string) {
        this.#skill = skill;
    }
    set studio(studio:string) {
        this.#studio = studio;
    }
    //metodos extra
    #changingType():void {  //metodo privado

    }
    changingSkill(skill:string):string {    //metodo publico
        return "";
    }

}