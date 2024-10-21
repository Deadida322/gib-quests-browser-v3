<script setup>
    import { onMounted, nextTick, ref } from "vue";
    import bgImage from "@/assets/flappy_bird_bg.png";
    import birdImage from "@/assets/flappy_bird_bird.png";
    import fgImage from "@/assets/flappy_bird_fg.png";
    import pipeUpImage from "@/assets/flappy_bird_pipeUp.png";
    import pipeBottomImage from "@/assets/flappy_bird_pipeBottom.png";
    let cvs = ref(null);
    let ctx = ref(null);
    const emit = defineEmits(["next-stage"]);
    let bird = new Image();
    let bg = new Image();
    let fg = new Image();
    let p_up = new Image();
    let p_down = new Image();
    bird.src = birdImage;
    bg.src = bgImage;
    fg.src = fgImage;
    p_up.src = pipeUpImage;
    p_down.src = pipeBottomImage;

    let gap = 140;
    let xPos = 10;
    let yPos = 150;
    let default_grav = 1.2;
    let grav = 1.2;
    let distance = 100;
    let speed = 2;
    let jump = 30;
    let endgame = false;
    let score = 0;

    const init = () => {
        gap = 140;
        xPos = 10;
        yPos = 150;
        default_grav = 1.2;
        grav = 1.2;
        distance = 100;
        speed = 2;
        jump = 30;
        endgame = false;
        score = 0;
        p = [
            {
                x: 278,
                y: 0
            }
        ];
    };

    function moveUp() {
        yPos -= jump;
        grav = default_grav;
    }

    let p = [
        {
            x: 278,
            y: 0
        }
    ];
    function drawCanvas() {
        ctx.value.drawImage(bg, 0, 0);
        for (let item of p) {
            ctx.value.drawImage(p_up, item.x, item.y);
            ctx.value.drawImage(p_down, item.x, item.y + p_up.height + gap);
            item.x -= speed;
            console.log(item.x);
            if (item.x == distance) {
                p.push({
                    x: cvs.value.width,
                    y: Math.floor(Math.random() * p_up.height - p_up.height)
                });
            }
            if (
                (xPos + bird.width >= item.x &&
                    xPos + bird.width <= item.x + p_up.width &&
                    (yPos <= p_up.height + item.y ||
                        yPos + bird.height >= item.y + p_up.height + gap)) ||
                yPos + bird.height >= cvs.value.height - fg.height
            ) {
                speed = 0;
                grav = 0;
                jump = 0;
                endgame = true;
            }
            if (item.x == 0) {
                score++;
                console.log(score);
            }
        }

        ctx.value.drawImage(fg, 0, cvs.value.height - fg.height);

        ctx.value.drawImage(bird, xPos, yPos);
        ctx.value.fillText(score, cvs.value.width / 2 - 15, 40);
        if (endgame) {
            init();
        }
        grav *= 1.02;
        yPos += grav;
        if (yPos < 0) {
            yPos = 0;
        }

        if (score == 10) emit("next-stage");
        setTimeout(drawCanvas, 12);
    }
    onMounted(async () => {
        await nextTick();
        setTimeout(() => {
            ctx.value = cvs.value.getContext("2d");
            ctx.value.fillStyle = "000";
            ctx.value.font = "30px Verdana";
            drawCanvas();
        }, 1000);
    });

    document.addEventListener("click", moveUp);
    document.addEventListener("keydown", moveUp);
</script>

<template>
    <div class="d-flex justify-center">
        <canvas
            id="canvas"
            ref="cvs"
            width="280"
            height="512"></canvas>
    </div>
</template>
