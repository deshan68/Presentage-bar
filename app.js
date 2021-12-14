var htmlVal=0;
var sqlVal = 0;
var cssVal =0 ; 
var jsVal  = 0 ;

(function htmlCount(){
    
    document.querySelector('.value-html').textContent = htmlVal + '%';
    htmlVal++;
    if(htmlVal <= 60){
        setTimeout(htmlCount, 16.66666666666667 *2);      
    }

}());

(function cssCount(){
    
    document.querySelector('.value-css').textContent = cssVal + '%';
    cssVal++;
    if(cssVal <= 85){
        setTimeout(cssCount, 11.76470588235294 *2);      
    }

}());




(function jsCount(){
    
    document.querySelector('.value-js').textContent = jsVal + '%';
    jsVal++;
    if(jsVal <= 45){
        setTimeout(jsCount, 22.22222222222222 *2);      
    }

}());
(function sqlCount(){
    
    document.querySelector('.value-sql').textContent = sqlVal + '%';
    sqlVal++;
    if(sqlVal <= 90){
        setTimeout(sqlCount,11.11111111111111 * 2);      
    }

}());