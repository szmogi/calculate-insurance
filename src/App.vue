<script setup>
import KalkulackaUloha from './components/Kalkulacka/kalkulacka-uloha.vue';
import Kalkulacka from './components/Kalkulacka/kalkulacka-uloha.vue'



</script>

<template>

  <main >
      

      <kalkulacka-uloha>

      </kalkulacka-uloha>

  
  </main>

     
</template>
<style>
@import './assets/base.css';

</style>


<script>
export default {
  components: {KalkulackaUloha},
  data () {
    

    return {
      window:{
                height:null,
                width:null,
            },

            heslo:null,
            openProjec:false
      
      
       
    }
  },watch:{
  
  } ,
  methods: {
        handleResize(){
             this.window.width = window.innerWidth;
             this.window.height = window.innerHeight;          
             

             

         },
         

  },
  
  created() {
       window.addEventListener('resize', this.handleResize);
       this.handleResize();    

    },
    unmounted() {
         window.removeEventListener('resize', this.handleResize);

   }
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss" scoped>
















</style>



