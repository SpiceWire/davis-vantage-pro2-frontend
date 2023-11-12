<script setup>
import { onMounted } from 'vue'

const props = defineProps(
    ["speed", "direction", 'key']
)

onMounted(() => {
    let bigArrow = document.createElement('div');
    bigArrow.classList.add('bigArrow');
    bigArrow.style.transform = ('rotate(' + props.direction + 'deg)')
    bigArrow.style.background = colorWindArrow();
    console.log("key is " + props.key)
    console.log("speed is " + props.speed)
})

function pointArrow() {
    return ('rotate(' + props.direction + 'deg)')
}

function colorWindArrow() {
    console.log("colorWindArrow triggered")
    if (props.speed <= 1) {
        console.log("lime")
        return "lime";
    }
    else if (props.speed <= 4) {
        console.log("yellow")
        return "olive";
    }
    else {
        console.log("problem")
        return "maroon";
    }
}

</script>

<template>
    <div class="bigArrow" :style="{ backgroundColor: colorWindArrow(), transform: pointArrow() }">

    </div>
</template>

<style>
.bigArrow {
    display: grid;
    position: absolute;
    width: 150px;
    height: 150px;
    justify-self: start;
    background: purple;
    border-top-left-radius: 100%;
    clip-path: polygon(30% 0, 60% 60%, 0 30%);
    transform-origin: bottom right;
    z-index: 2;

}
</style>