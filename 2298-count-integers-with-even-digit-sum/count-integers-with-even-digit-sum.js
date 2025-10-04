/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0;
    for(let i=1;i<=num;i++){
      let sum=i.toString()
        let str=0;
        for(let ah of sum){
            str+=Number(ah)
        }
        if(str%2==0){
            count++
        }
    
    }
            return count

};