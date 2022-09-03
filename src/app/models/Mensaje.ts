
export class Mensaje {
    public name: string;
    public type: number; // 1 rojo, 2 verde, 3 amarillo
    public subTitle: string;
    public body: string;

    constructor(name: string, type: number, subTitle: string, body: string) {
        this.name = name;
        this.type = type;
        this.subTitle = subTitle;
        this.body = body;
    }
 }
