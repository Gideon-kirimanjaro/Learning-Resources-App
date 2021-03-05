<template>
    <div>
        <v-btn @click="deleteEvent()" style="border-radius: 0px 5px" color="red" class="white--text mt-3 pa-2"><slot></slot></v-btn>

    </div>
</template>
<script>
export default{
    name:'ButtonDelete',
    methods:{
        deleteEvent(){
            return  this.$emit('delete-event');
        }
         
    }
}



</script>