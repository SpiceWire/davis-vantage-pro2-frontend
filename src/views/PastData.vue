<template >
    <div>
        <v-container>
            <h2>Past Weather</h2>
            <br>
            <h3>Click a button to get past data</h3>
            <br>
            <v-chip v-for="name in btnNames" value="name" @click="getPastData">{{ name }}</v-chip>
            <br>

        </v-container>
        
        
    </div>
</template>
<script>


const btnNames = [
    "Yesterday",
    "Ereyesterday",
    "Last 3 days",
    "Last 7 days",
    "Last 24 hours",
    "Last 48 hours",
    "Last 30 days",
]

</script>
<style >
    
</style>