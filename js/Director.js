// 导演类，控制游戏的逻辑
export class Director {
    constructor() {
        console.log('Director inited!')
    }
    // 一个游戏只能有一个导演，所以需要使用单例模式
    static getInstance() {
        if (!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }
}