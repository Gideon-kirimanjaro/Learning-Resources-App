<template>
    <v-main>
        <v-container class="d-flex justify-md-center" >
        <v-card width="500"  class="d-flex px-4 flex-column">
            
            <slot ></slot>
        
        </v-card>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name:'BaseCard',
        
    }
</script>

<style>

</style>