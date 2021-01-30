// fo :  1  0;


const fo = (function(){
    let count = 0;
    return () => {
        count ++;
        if(count < 4){
            return 1;
        }else{
            return 0;
        }
    }
})()




console.log(fo()) // 1

console.log(fo()) //0