/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let Stringnum=n.toString()
    let sum=0
    let prdouct=1
    for(let i=0;i<Stringnum.length;i++){
        let digits=Stringnum[i] * 1
        sum+=digits;
        prdouct*=digits;
    }
    return prdouct-sum
};

subtractProductAndSum (250)