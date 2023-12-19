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

})

function pointArrow() {
    return ('rotate(' + props.direction + 'deg)')
}

function colorWindArrow() {
    
    if (props.speed <= 10) {
  
        return "lime";
    }
    else if (props.speed <= 20) {
      
        return "olive";
    }
    else {
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