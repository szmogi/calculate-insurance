


         // Export a progress bar count.
         export function progressBarCount(){
            
               var progressBar = document.querySelectorAll('.skills-meter > div')
               var timeout = 500;              
               var count = progressBar.length
            
            
               for (let i = 0; i < count; i++) {
               var element = document.getElementById('progress-bar'+i)             
               var interval = parseInt(element.getAttribute('data-interval'))          
                        
                     setTimeout(() => {
                        var element = document.getElementById('progress-bar'+i)
                        var icon = document.getElementById('icon-'+i)
                        var endWidth = parseInt(element.getAttribute('data-endwidth'))
                        var nextElement = element.nextElementSibling
                        var duration = parseInt(nextElement.getAttribute('data-duration'))                          
                        var counte = 0;   
                        
                        if(i == count-1){
                           document.querySelector('.skills-meter').setAttribute('id','end-animated')                 
                        }


                        icon.animate([{opacity:'0%'},{opacity:'100%'}],{duration:1000})
                        icon.style.opacity = '100%'
                        
                        var intervalCount = 60 - (endWidth / 10 ) * 5;
                            intervalCount = (intervalCount.toFixed(0))                     
                        
                     
                              element.animate([{width:'0%'},                                                   
                                              {width:endWidth+'%'}],{duration:duration})                     
                                 
                                 element.style.width = endWidth+'%'                 
                                 const updateCounter = () => {
                                    const countTarget = parseInt(nextElement.getAttribute('data-counttarget'));
                                    counte++;                       
                                    if (counte <= countTarget) {
                                       nextElement.innerHTML = counte + '%';                          
                                       setTimeout(updateCounter, intervalCount );
                                    } else {
                                       return
                                    }
                                 };
                                 updateCounter();        

                           setTimeout(()=>{nextElement.setAttribute('class','bounce-enter-active')},1500)
                                    
                           }, timeout);              

                        timeout = timeout + interval       

                  }   


         }





    // Resets the progress bar.
  export function resetProgressBar(){
     
         var progressBar = document.querySelectorAll('.skills-meter > div')
         var timeout = 500;              
         var count = progressBar.length
        
        
         for (let i = count ; --i >= 0;) {
         var element = document.getElementById('progress-bar'+i)             
         var interval = parseInt(element.getAttribute('data-interval'))          
                    
               setTimeout(() => {
                  var element = document.getElementById('progress-bar'+i)
                  var icon = document.getElementById('icon-'+i)
                  var endWidth = parseInt(element.getAttribute('data-endwidth'))
                  var nextElement = element.nextElementSibling
                  var duration = parseInt(nextElement.getAttribute('data-duration'))                          
                  var counte = 0;   
                  
                  if(i == count-1){
                     document.querySelector('.skills-meter').setAttribute('id','end-animated')                 
                    }
   
   
                  icon.animate([{opacity:'100%'},{opacity:'0%'}],{duration:3000})
                  icon.style.opacity = '0%'        
                  element.animate([{width:endWidth+'%'},                                                   
                         {width:'0%'}],{duration:duration})                            
                         element.style.width ='0%'                 
                         nextElement.innerHTML ='';                                       
   
                    
                              
                     }, timeout);              
   
                  timeout = timeout + interval       
   
            }   
   
   
   }