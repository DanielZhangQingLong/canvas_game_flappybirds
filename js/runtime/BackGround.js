// 背景类
import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite{
    constructor(ctx, image) {
        console.log(image.width, image.height)
        super(ctx, image,
            0, 0,
            image.width, image.height,
            0, 0,
            image.width, image.height);
        // window.innerWidth, window.innerHeight);
    }
}