<script setup>
    import { ref, onMounted, watch, onBeforeUnmount } from "vue";
    import headSrc from "@/assets/head.png";
    import groundSrc from "@/assets/ground.png";
    import foodSrc from "@/assets/foods.png";
    const head = new Image();
    const ground = new Image();
    const food = new Image();
    const emit = defineEmits(["next-stage"]);

    food.src = foodSrc;
    head.src = headSrc;
    ground.src = groundSrc;
    const score = ref(0);
    const cvs = ref(null);
    const ctx = ref(null);
    const box = 32;
    const status = ref("Пусть Артём насосёт как можно больше хуёв");
    let dir = "";
    let foodCoordination = {
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 15 + 3) * box
    };
    let snake = ref([
        {
            x: 9 * box,
            y: 10 * box
        }
    ]);

    function eatTail(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game);
                status.value = `Насосано ${score.value}`;
                restart();
            }
        }
    }

    let game;
    const drawCanvas = () => {
        ctx.value.drawImage(ground, 0, 0);
        ctx.value.drawImage(food, foodCoordination.x, foodCoordination.y);
        for (let i = 0; i < snake.value.length; i++) {
            if (i == 0) {
                ctx.value.drawImage(head, snake.value[i].x, snake.value[i].y);
                console.log(snake.value);
            } else {
                ctx.value.fillStyle = "red";
                ctx.value.fillRect(
                    snake.value[i].x + 8,
                    snake.value[i].y + 8,
                    box / 2,
                    box / 2
                );
            }
        }
        ctx.value.fillStyle = "white";
        ctx.value.font = "50px Arial";
        ctx.value.fillText(score.value, box * 2.5, box * 1.8);

        let snakeHeadX = snake.value[0].x;
        let snakeHeadY = snake.value[0].y;
        if (
            snakeHeadX < box ||
            snakeHeadX > box * 17 ||
            snakeHeadY < 3 * box ||
            snakeHeadY > box * 17
        ) {
            status.value = `Насосано ${score.value}`;
            snake.value = [
                {
                    x: 9 * box,
                    y: 10 * box
                }
            ];
            setTimeout(() => {
                restart();
            });
        }
        if (
            snakeHeadX == foodCoordination.x &&
            snakeHeadY == foodCoordination.y
        ) {
            score.value++;
            foodCoordination = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            };
        } else snake.value.pop();

        if (dir == "left") snakeHeadX -= box;

        if (dir == "right") snakeHeadX += box;
        if (dir == "up") snakeHeadY -= box;
        if (dir == "down") snakeHeadY += box;
        let newHead = {
            x: snakeHeadX,
            y: snakeHeadY
        };
        eatTail(newHead, snake);
        snake.value.unshift(newHead);
    };

    onMounted(() => {
        ctx.value = cvs.value.getContext("2d");
        game = setInterval(drawCanvas, 180);
    });

    const restart = () => {
        dir = "";
        score.value = 0;
        foodCoordination = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        };
        snake.value = [
            {
                x: 9 * box,
                y: 10 * box
            }
        ];
        clearInterval(game);

        game = setInterval(drawCanvas, 180);
        console.log("restart");
    };

    watch(score, (val) => {
        if (val == 5) emit("next-stage");
    });

    onBeforeUnmount(() => clearInterval(game));
</script>

<template>
    <div>
        <canvas
            id="canvas"
            ref="cvs"
            class="canvas"
            width="608"
            height="608"></canvas>
        <div class="controls">
            <v-btn
                size="large"
                @click="dir = 'up'">
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <div class="arrs">
                <v-btn
                    size="large"
                    @click="dir = 'left'">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-btn
                    size="large"
                    @click="dir = 'down'">
                    <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
                <v-btn
                    size="large"
                    @click="dir = 'right'">
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<style>
    .canvas {
        display: block;
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 364px;
        margin-bottom: 10px;
    }

    .none {
        display: none;
    }

    .game {
        padding: 10px;
    }

    .show {
        display: block;
    }

    .controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .arrs {
        display: flex;
        gap: 5px;
        margin-top: 5px;
    }

    .div {
        box-shadow: 4px 4px 8px 0 rgb(163 208 243 / 20%);
        padding: 4px;
        margin: 10px;
        width: 40px;
        background-color: rgb(0 99 49);
        border-radius: 10px;
    }

    .another_arrs {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .another_arrs * {
        margin: 0 10px;
    }
</style>
