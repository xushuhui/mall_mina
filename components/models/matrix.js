class Matrix{
    m
    constructor(matrix){
        this.m = matrix
    }
    get rowsNum(){
        return this.m.length
    }
    get colsNum(){
        return this.m[0].length
    }
    forEach(callback){
        for (let j = 0; j < this.colsNum; j++) {
           for (let i = 0; i < this.rowsNum; i++) {
               const element =this.m[i][j];
               callback(element,i,j)
           }
            
        }
    }
    transpose(){
        const desArr = []
        for (let j = 0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] =this.m[i][j];
               
            }
             
         }
    }
}
export {
    Matrix
}