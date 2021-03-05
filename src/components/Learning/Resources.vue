<template>
<v-main>
    <div>
     <card-component >
        <v-row>
       <button-component> {{title}} </button-component>
       <v-spacer></v-spacer>
       <delete-component @delete-event="removeResource(id)" > Delete</delete-component>
     </v-row>
     <p class="mt-2">{{description}} </p>
     <a :href="link">View Resource</a>
     </card-component>
    </div>
    </v-main>
</template>

<script>
 
    export default {
        name:'Resources',
        methods:{
        },
        inject:['removeResource'],

        components:{
            
            

        },
        data(){
            return{
                
                
                
                 
            }
        },
        props:[
             'id',
            'title',
            'description',
            'link',
        ]
    }
</script>

<style scoped>

</style>