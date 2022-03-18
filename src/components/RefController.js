import { makeAutoObservable } from "mobx";

export class RefController {
    constructor (ref, component) {
        this.ref = ref;
        this.component = component;

        makeAutoObservable(this);
    }

    get width() {
        return this.ref.current && this.ref.current.clientWidth
    }

    get height() {
        return this.ref.current && this.ref.current.clientHeight;
    }

    updateDivisions(){
        this.component.setWidth(this.width);
        this.component.setHeight(this.height);
        debugger
    }
};