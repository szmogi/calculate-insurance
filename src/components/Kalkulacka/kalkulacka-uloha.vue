<template>   
    
   

     <transition name="slide-left">
                <div style=" height: 16rem; 
                            box-shadow: 0 0 5px 3px;               
                            background: #54c1f5;
                            padding: 1rem;
                            border-bottom-right-radius: 1pc;
                            border-top-right-radius: 1pc;
                    font-size: .8rem;" v-if="this.poistenie.visible" class="rates">
                        <h1>Sadzby</h1>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;</th>                        
                            <th scope="col">Krátkodobé poistenie</th>
                            <th scope="col">Celoročné poistenie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                    <th scope="row">základný balík</th>
                                    <td>1,2 € / deň</td>
                                    <td>39 €</td>                       
                            </tr>
                            <tr>
                            <th scope="row">rozšírený balík</th>

                                    <td>1,8 € / deň</td>
                                    <td>49 €</td>                            
                            </tr>
                            <tr>
                            <th scope="row">extra balík</th>
                                    <td>2.4 € / deň</td>
                                    <td>59 €</td>    
                            </tr>
                            <tr>
                            <th scope="row">storno cesty</th>
                                    <td>50% prirážka k sadzbe</td>
                                    <td>20% prirážka k sadzbe</td>    
                            </tr>
                            <tr>
                            <th scope="row">športové aktivity</th>
                                    <td>20% prirážka k sadzbe</td>
                                    <td>10% prirážka k sadzbe</td>    
                            </tr>
                            
                        </tbody>
                        </table>                                                  
                </div>

        </transition>
  
      
        
        
        <div>
            <h1  style="font-size: 3rem;
                padding: 1rem;
                background: #7df5ca;
                border-radius: 1pc;
                box-shadow: 0 0 5px 2px;
                    font-size: 3rem;">Kalkulačka poistenia</h1>
                    
                    <h3 style="padding:1rem; padding: 1rem 0 .5rem;
                            border-bottom: 1px solid;" for="">Vyberte variant poistenia</h3>
                    <div style=" padding: .5rem 1rem; display: flex;align-items: center; justify-content: space-between;" v-for="item in this.variantList" :key="item.id" class="form-check">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{item.name}}
                        </label>
                        <input style=" transform: scale(1.3);" class="form-check-variant" @click="this.variantChecked(item.id)"   type="checkbox" v-bind:value="item.name" :id="item.id">
                    
                    </div>        
                    
             <transition-group name="slide-up">               
                    <div v-if="ifVarian" style="padding: 1rem; display: flex; flex-direction: row; justify-content: space-between;  align-items: center;" class="startPoi">
                        <h3 for="">Začiatok poistenia</h3>
                        <input type="date" id="start" @change="starDate()"  name="trip-start" :value="this.startDate" min="2022-30-05" max="2030-12-31">
                    </div>
            

                    <div v-if="this.shortTerm" style="padding: 1rem; display: flex; flex-direction: row; justify-content: space-between;  align-items: center;" :class="'endPoi '+this.fillIn">
                        <h3 for="">Koniec  poistenie</h3>
                        <input type="date" id="start" @change="dateEnd()" name="trip-start" :value="this.endDate" min="2022-30-05" max="2030-12-31">
                    </div>
            

                    <div v-if="this.ifDate" class="pack-group">
                        <h3 style="padding: 1rem 0 .5rem;
                            border-bottom: 1px solid;" for="">Balíky</h3>
                        <div style=" padding: .5rem 1rem; display: flex;align-items: center; justify-content: space-between;" v-for="item in this.packList" :key="item.id"  class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{item.name}}
                            </label>
                            <input style=" transform: scale(1.3);" class="form-check-pack" @click="this.packedChecked(item.id)"  type="checkbox" v-bind:value="item.name" :id="item.id">               
                    </div>     
                    </div> 

                    <div v-if="this.ifPack" class="addInsurance-group">
                        <h3 style="padding: 1rem 0 .5rem;
                            border-bottom: 1px solid;" for="">Pripoistenie</h3>
                            <label>nepovinné</label>
                        <div style=" padding: .5rem 1rem; display: flex;align-items: center; justify-content: space-between;" v-for="item in this.addInsurance" :key="item.id"  class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{item.name}}
                            </label>
                            <input style=" transform: scale(1.3);" class="form-check-insurance" @click="this.addInsuranceChecked(item.id)"  type="checkbox" v-bind:value="item.name" :id="item.id">               
                    </div>     
                    </div> 

                    <div v-if="this.ifinsurance" class="number-person">
                        <h3 style="padding: 1rem 0 .5rem;
                            border-bottom: 1px solid;" for="">Počet osôb</h3>
                        <div style=" padding: .5rem 1rem; display: flex;align-items: center; justify-content: space-evenly;" class="form-check">         
                        <div>Osôb:&nbsp;{{ numberPerson }}</div>
                                <input type="radio" id="one" value="1" v-model="numberPerson" />
                                <label for="one">1</label>

                                <input type="radio" id="two" value="2" v-model="numberPerson" />
                                <label for="two">2</label>           

                                <input type="radio" id="three" value="3" v-model="numberPerson" />
                                <label for="two">3</label>                                   
                        </div>     
                    </div> 


                    <div style="margin: 3rem 0rem;" v-if="this.ifCalculate" class="calculate">
                      <transition name="slide-up">                      
                          <h1 v-if="this.finaliSum > 0 " style="padding: 1rem;">Vaše poistenie ma hodnotu:&nbsp;{{this.finaliSum}}&nbsp;€</h1>                        
                      </transition>
                        <button style="padding: 0.5rem 1rem;  font-size: 1.5rem;   background: #89ffd5;    border: none;    border-radius: 1pc;   box-shadow: 0 0 5px 2px; font-weight: bold;
                        cursor: pointer;" @click="this.calculate()">Calculate</button>
                        <button @click="reset()" v-if="this.finaliSum > 0 " style="margin-left: 1rem; padding: 0.5rem .5rem;  font-size: 1.2rem; cursor: pointer;   background: #89ffd5;    border: none;    border-radius: 1pc;   box-shadow: 0 0 5px 2px; font-weight: bold;">Reset</button>
                    </div>
              </transition-group>         
                    




        </div>

       
       <transition name="slide-fade">     
            <div style="max-height: 40rem;  
                        box-shadow: 0 0 5px 3px;                                          
                        background: #54c1f5;
                        padding: 2rem;
                        border-bottom-left-radius: 1pc;
                        border-top-left-radius: 1pc;
                font-size: .8rem;" v-if="this.poistenie.visible" class="your-insurance">
                       <h1>Vaše poistenie</h1>


                            <div style="padding:1rem;"  class="variant">
                                    <h3 style="border-bottom:1px solid black" for="">Variant</h3>

                                <transition name="slide-fade">

                                  <h4 style="border-radius: 0.3pc;padding: 1px 0.1rem; box-shadow: 0 0 5px 1px;" v-if="variantSpan">Prosim vyberte jeden variant</h4>

                                </transition> 
                                <transition name="slide-fade">

                                    <h3 style="background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" v-if="this.variantPoi.length > 0">{{this.variantPoi}}</h3>

                                </transition>

                             </div>

                   

                              <div  style="padding: 1rem; display: flex;flex-direction: column;" class="dateTime">
                                    <h3 style="border-bottom:1px solid black" for="">Trvanie poistenia</h3>    
                             
                              <transition-group name="slide-fade">

                                    <div v-if="this.startDate.length > 0" class="startDate">
                                          <label for="">Začiatok poistenia</label>
                                            <h3 style="background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" >{{this.formatDate(this.startDate)}}</h3>
                                    </div>    
                                    
                                    <div   v-if="this.variantPoi === 'Krátkodobé poistenie' && this.startDate.length > 0" class="endDate">
                                            <label for="">Koniec poistenia</label>
                                            <h3 style="background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" >{{this.formatDate(this.endDate)}}</h3>
                                    </div>     
                                    
                              </transition-group>      
                              </div>                        


                            <div style="padding:1rem;"   class="pack">
                                <h3 style="border-bottom:1px solid black" for="">Balík</h3>

                                <transition name="slide-fade">

                                    <h3 v-if="this.packSpan">Prosím vyberte jeden balík</h3>

                                </transition> 
                                <transition name="slide-fade">

                                    <h3 style="background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" v-if="this.packPoi.length > 0">{{this.packPoi}}</h3>

                                </transition>

                             </div>


                             <div style="padding:1rem;"   class="insurance">

                                <h3 style="border-bottom:1px solid black" for="">Pripoistenie</h3>                             
                              
                                <transition name="slide-fade">

                                    <h3 style="    margin: 0.3rem 0; background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" v-if="this.storno.length > 0">{{this.storno}}</h3>

                                </transition>

                                  <transition name="slide-fade">

                                    <h3 style="     margin: 0.3rem 0; background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;" v-if="this.sport.length > 0">{{this.sport}}</h3>

                                </transition>


                             </div>


                                <div style="padding:1rem;"   class="number-Person">

                                <h3 style="border-bottom:1px solid black" for="">Počet osôb</h3>                             
                              
                                <transition name="slide-fade">

                                 <h3 v-if="this.numberPerson.length > 0" style="background: #7df5ca; padding: 0.2rem 1rem; border-radius: 0.3pc; box-shadow: 0 0 5px 0px;">{{this.numberPerson}}</h3>

                                </transition>                            


                             </div>
                         
                 
            </div>
        </transition>  
      




</template>

<script>
 import moment, { duration } from 'moment'
export default {
    data () {        

        return {
         
           //varinat
           variantPoi:'',
           variantSpan:false,
           varSpanCount:0,
           ifVarian:false,

           //date
           startDate:'',
           endDate:'',
           shortTerm:false,
           ifDate:false,
           fillIn:'',

     
            //pack
            packPoi:'',
            packSpan:false,
            packSpanCount:0,      
            ifPack:false,  


            //addInsurance
             insurance:[],
             storno:'',
             sport:'',
             ifinsurance:false,

           //personNumber
             numberPerson:'',
        

             
             finaliSum:0,

             ifCalculate:false,
  
         

          variantList:[
              {id:1 , name:'Krátkodobé poistenie'},
              {id:2 , name:'Celoročné poistenie'}
          ],

          packList:[
              {id:1 , name:'Základný' , celRoc:39, den:1.2},
              {id:2 , name:'Rozšírený', celRoc:49, den:1.8 },
              {id:3 , name:'Extra', celRoc:59, den:2.4}
          ],

          addInsurance:[
             {id:1 , name:'Storno cesty' , rocStor:20 , denStor:50},
             {id:2 , name:'Športové cesty' ,rocSport:10 , denSport:30},
          ],

          poistenie:{
              visible:true,
 
          },


         


        }
    },
    watch:{
       actualDate:function(newVal){ console.log(newVal) ,this.startDate = newVal},      
       variantPoi:function(newVal){
           newVal === 'Krátkodobé poistenie' ? this.shortTerm = true : this.shortTerm = false
           if(newVal.length> 0){this.ifVarian = true}else{this.ifVarian = false}           
        },
       startDate:function(newVal){if(newVal.length > 0) {this.ifDate = true} else{this.ifDate = false}},
     
       packPoi:function(newVal){if(newVal.length > 0) {
            this.ifinsurance = true
            this.ifPack = true} else{this.ifPack = false}},

       numberPerson:function(newVal){if(newVal.length>0){this.ifCalculate = true}else{this.ifCalculate = false}},
       endDate:function(newVal){if(newVal.length > 0 ){this.fillIn = ''}}     

       
    },
    mounted(){
      
     
    },methods:{
       variantChecked(data){
           this.variantPoi = event.target.value           
           if(this.variantPoi.length > 0){              
               this.varSpanCount +=1               
               if(this.varSpanCount % 2 == 0 ){
                   this.variantSpan = true
                   this.varSpanCount = 0 
                  setTimeout(()=>{this.variantSpan = false},2000)    
               }
                  
               document.querySelectorAll('.form-check-variant').forEach(function(item){
                  if(item.id == data){item.checked = true                  
                  }else{item.checked = false} })                 
                

           }else{
           
                if(event.target.checked == true){
                 this.variantPoi = event.target.value
                 
              }

           }
          
       },
        packedChecked(data){          
            this.packPoi = event.target.value                
           if(this.packPoi.length > 0){

               this.packSpanCount +=1               
               if(this.packSpanCount % 2 == 0 ){
                   this.packSpan = true
                   this.packSpanCount = 0
                  setTimeout(()=>{this.packSpan = false},1000)    
               }
                           
              document.querySelectorAll('.form-check-pack').forEach(function(item){
                  if(item.id == data){item.checked = true
                  }else{item.checked = false} })

             

           }else{
                if(event.target.checked == true){
                 this.packPoi = event.target.value
                 console.log(this.packPoi)
              }

           }
          
       },
       starDate(){this.startDate = event.target.value
       },
       dateEnd(){this.endDate = event.target.value
       },
       addInsuranceChecked(){           
           if(event.target.value === this.addInsurance[0].name){
               if(this.storno.length > 0 ){this.storno = ''
               }else{this.storno = event.target.value}               
           }

           if(event.target.value === this.addInsurance[1].name){
               if(this.sport.length > 0 ){this.sport = ''
               }else{this.sport = event.target.value}                    
           }
   
       },
       formatDate(value){
         if (value) {
           return moment(String(value)).format('DD.MM.YYYY')
          }
       },
       calculate(){
        
        
           if(this.variantPoi === this.variantList[0].name){
               this.shortTime()   
                

           }else{               
               this.longTime()
               
             }
       },shortTime(){             
           if(this.endDate == ''){      
               this.fillIn = 'style-fill-in'

               var element =  document.querySelector('.endPoi')
               element.style.position = 'relative'

               element.animate([{left:'-.5rem'},{left:'.5rem'},{left:'-.5rem'},{left:'.5rem'}],{duration:500,loop:true})
        
           }else{ 
           
            var baseSum = 0              
            var storDay = 0
            var sportDay = 0
            var day = 0
            var count = 0
           
              this.packList.filter(item=>{if(this.packPoi === item.name){baseSum = item.den}})           
          
                day = this.getNumberOfDays(this.formatDateCount(this.startDate),this.formatDateCount(this.endDate)) 

                    count = day * baseSum
                    count = count * this.numberPerson 
              
              
                      this.addInsurance.filter(item=>{
                         if(this.storno === item.name){                
                               storDay = (count / 100) * item.denStor        
                                count += storDay
                            }

                         if(this.sport === item.name){
                                sportDay = (count / 100) * item.denSport                
                                count += sportDay                              

                            
                            }
                        })                              

              this.finaliSum = count.toFixed(2)     
          } 

       },longTime(){
            var sum = 0   
            var count = 0   
            var baseSum = 0                    

       this.packList.filter(item=>{if(this.packPoi === item.name){baseSum = item.celRoc}})
             
          this.addInsurance.filter(item=>{
            if(this.storno === item.name){
                 count = (baseSum / 100) * item.rocStor 
                 sum += count                   
            }

            if(this.sport === item.name){
                 count = (baseSum / 100) * item.rocSport
                 sum += count
             }
          })         

            baseSum = (sum + baseSum) * parseInt(this.numberPerson)
       
                this.finaliSum  = baseSum.toFixed(2)
                 
       } ,
        formatDateCount(value){
         if (value) {
           return moment(String(value)).format('M/D/YYYY')
          }
        },
         getNumberOfDays(start, end) {
                    const date1 = new Date(start);
                    const date2 = new Date(end);          

                    const oneDay = 1000 * 60 * 60 * 24;
          
                    const diffInTime = date2.getTime() - date1.getTime();
                    
                    const diffInDays = Math.round(diffInTime / oneDay);

                    return diffInDays;
       },reset(){
           this.variantPoi='',
           this.variantSpan = false,
           this.varSpanCount=0,
           this.ifVarian=false,         
           this.startDate='',
           this.endDate= '',
           this.shortTerm = false,
           this.ifDate=false,
           this.fillIn='',
           this.packPoi='',
           this.packSpan=false,
           this.packSpanCount= 0,      
           this.ifPack=false,       
           this.insurance=[],
           this.storno='',
           this.sport='',
           this.ifinsurance=false,
           this.numberPerson='',     
           this.finaliSum=0,
           this.ifCalculate=false
  
            document.querySelectorAll('.form-check-variant').forEach(function(item){
                         item.checked = false
            })

       }
    }
}
</script>

<style lang="scss" scoped>


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


  .style-fill-in{
    background: #f5748c;
    box-shadow: 0 0 5px 5px;
    border-radius: 1pc;
   }


    /*
    Enter and leave animations can use different
    durations and timing functions.
    */
    .slide-up-enter-active {
    transition: all 1s ease-out;
    }

    .slide-up-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-up-enter-from,
    .slide-up-leave-to {
    transform: translateY(100px);
    opacity: 0;
    }



    /* Removes the clear button from date inputs */
input[type="date"]::-webkit-clear-button {
    display: none;
}

/* Removes the spin button */
input[type="date"]::-webkit-inner-spin-button { 
    display: none;
}

/* Always display the drop down caret */
input[type="date"]::-webkit-calendar-picker-indicator {
    color: #2c3e50;
}

/* A few custom styles for date inputs */
input[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    color: #a6e2ff;
    font-family: "Helvetica", arial, sans-serif;
    font-size: 18px;
    border:1px solid #7df5ca;
    background:#7df5ca;
    border-radius:.3pc;
    padding:5px;
    display: inline-block !important;
    visibility: visible !important;
}

input[type="date"], focus {
    color: #2c3e50;
    border:1px solid #7df5ca;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
}



</style>