module.exports = class DepthCalculator {
    calculateDepth(arr,i= 0,res = []) {
        i++;
        res.push(i);
        arr.forEach(elem => {
        if (Array.isArray(elem)) {
            this.calculateDepth(elem,i,res);
            }
        });
/*  console.log("u");
    console.log(res);
    console.log("g");
    console.log(...res);*/
        return Math.max(...res);
    }
};   