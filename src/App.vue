<template>
  <v-app>
    <v-main>
      <title-tag></title-tag>
      <header-tag ></header-tag>
     <resources-component
    :key="resource.id"
    v-for="resource in learningResources"
    :id="resource.id"
    :title="resource.title"
    :description="resource.description"
    :link="resource.link">
    </resources-component>
    <form-component></form-component>



    </v-main>
  </v-app>
</template>

<script>
import Title from './components/Ui/Title'

export default {
  name: 'App',
  methods:{
    removeResource(resourceId){
     
    const resourceIndex= this.learningResources.findIndex(resource => resource.Id === resourceId);
    this.learningResources.splice( resourceIndex, 1);

    },
    addResources(title,description,link){
      const newResource={
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      }
      this.learningResources.unshift(newResource);
      
    }
  },
  provide(){
    return{
      addResources: this.addResources,
      removeResource : this.removeResource,
      
    }
  }
  ,
  data(){
    return{
      toggle: true,
      learningResources:[
        {id:'Resource', title:'Official Guide', description:'This is the Vue learning page', link:'https://vuejs.org/'},
        {id:'Google', title:'Google', description:'Search for a resource on google', link:'https://www.google.com/'},
      ]
    }

  },

  components: {
    'title-tag': Title,
    
   
    
  },
}
</script>
<style>
*{
  font-family: 'Montserrat';
  src: url('./assets/Montserrat-Regular.otf');
}
</style>