<template>
    <v-main>
      <card-component>
          
          <div class="d-flex justify-md-center" >
           <v-btn @click="toggleAddResources=!toggleAddResources"    color="blue"  class="ml-4  white--text  " >ADD RESOURCES</v-btn>
           </div>
          <div class="d-flex justify-md-center">
              
          <v-form v-if="toggleAddResources" >
              <v-col cols="12">
              <v-text-field v-model=" enteredTitle" label="Add Title"></v-text-field>
              </v-col>
              <v-col cols="12">
              <v-text-field v-model=" enteredDescription" label="Add description"></v-text-field>
              </v-col>
              <v-col cols="12">
              <v-text-field v-model="enteredLink" label="Add Link"></v-text-field>
              </v-col>
              <v-btn @click="[submitResource(), clearData()]" style="margin-left: 50px" depressed color="green" class="white--text ">Add</v-btn>
          </v-form>
          </div>
      </card-component>

    </v-main>
</template>

<script>
    export default {
        name: 'Form',
        inject:['addResources'],
        methods:{
            clearData(){
                this.enteredTitle='',
                this.enteredDescription='',
                this.enteredLink = ''  },
            submitResource(){
                return this.addResources(this.enteredTitle, this.enteredDescription, this.enteredLink);
                
                
            }
        },
        data(){
            return{
                toggleAddResources: false,
                enteredTitle:'',
                enteredDescription:'',
                enteredLink:'',
    
      
            }   
        
        }
    }
</script>

<style lang="scss" scoped>

</style>