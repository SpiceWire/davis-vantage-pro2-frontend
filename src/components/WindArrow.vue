<script setup>
import { onMounted } from 'vue'

const props = defineProps(
    ["speed", "direction", 'key']
)


var arrow

onMounted(() => {
    arrow = document.createElement('div');
    arrow.classList.add('arrow');
    arrow.style.transform = ('rotate(' + props.direction + 'deg)')
    arrow.style.background = colorWindArrow();
   
    if (props.key > 7) {
        
        arrow.style.clipPath = ("polygon(30% 0, 70% 70%, 0 30%)")
    }
})

function pointArrow() {
    return ('rotate(' + props.direction + 'deg)')
}

function colorWindArrow() {
   
    if (props.speed <= 10) {
       
        return "green";
    }
    else if (props.speed <= 20) {
       
        return "yellow";
    }
    else {
        
        return "red";
    }
}

</script>

<template>
    <div class="arrow" :style="{ backgroundColor: colorWindArrow(), transform: pointArrow() }">
    </div>
</template>

<style>
.arrow {
    display: grid;
    position: absolute;
    width: 150px;
    height: 150px;
    justify-self: start;
    border-top-left-radius: 100%;
    clip-path: polygon(30% 0, 50% 50%, 0 30%);
    transform-origin: bottom right;
    z-index: 3;
}
</style>