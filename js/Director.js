// 导演类，控制游戏的逻辑
import {DataStore} from "./base/DataStore.js";

export class Director {
    constructor() {
        this.dataStore = DataStore.getInstance();
    }
    // 一个游戏只能有一个导演，所以需要使用单例模式
    static getInstance() {
        if (!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }

    run() {
        const backgroundSprite = this.dataStore.get('background');
        backgroundSprite.draw();
    }
}