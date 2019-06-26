// 初始化整个游戏的精灵, 作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
    }

    onResourceFirstLoaded(map) {
        // ctx 长期保持在内存中，放在DataSource中
        // 不同于 其他Sprite类，需要销毁，所以放在map中，便于销毁
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.dataStore.put('background',
            new BackGround(this.ctx,
                this.dataStore.res.get('background')));
        Director.getInstance().run();
    }
}