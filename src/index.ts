export class stack <T> {
    private arr: T[];

    constructor () {
        this.arr = [];
    }

    public push(value:T):void{
        this.arr.push(value);
    }

    public pop(): T | void{
        if(this.arr.length)
            return this.arr[this.arr.length-1];
    }

    public isVoid(): boolean{
        if(this.arr.length) return false;
        return true;
    }

    public top(): T | undefined {
        if (this.arr.length === 0) {
            return undefined;
        }
        return this.arr[this.arr.length - 1];
    }
}