import * as array from './01_arrays.js';

function getDefaultArray() {
    return [ 1, 2, 3, 4 ];
}

describe('arrays', () => {
    let a = getDefaultArray();

    beforeEach(() => {
        a = getDefaultArray();
    });

    test('you should be able to add the values of an array', () => {
        expect(arrays.sum(a)).toEqual(10);
        //function sumArray
        sumArray((a)=>{
            a.reduce((acc,val)=> acc+val, 0)
          })
    });
   
    test('you should be able to concatenate arrays', () => {
        const b = [ 'a', 'b' ];
        const c = [ 'c', 1 ];
        const result = arrays.concat(a, b, c);
        expect(result).toHaveLength(8);
        expect(result).toEqual([ 1, 2, 3, 4, 'a', 'b', 'c', 1 ]);
        expect(result).not.toEqual(a);
        //function concat arrays I will use shift and push instade to use concat
        concatArray((a,b,c)=>{
          return a.push(...b,...c)
        })

    });

 test('you should be able to count the occurrences of an item in an array', () => {
        const result = arrays.count([ 1, 2, 4, 4, 3, 4, 3 ], 4);
        expect(result).toEqual(3);
        //function count
    check((a,c)=>{
            var count=0
     for(var i=0;i<a.length;i++){
        if(a[i]===c){
            count++
        }
      }
            return count 
            
    })
});

    test('you should be able to find duplicates in an array', () => {
        const result = arrays.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

        expect(result).toHaveLength(3);
        expect(result.sort()).toEqual([ 1, 3, 4 ]);
        expect(result).not.toEqual(a);
        //finde the duplicates number
        duplicatesNumber=((x)=>{
            return ([...new Set(x.filter((value,index,self)=>self.indexOf(value)!==index))])
         })
    });

    test('you should be able to square each number in an array', () => {
        const result = arrays.square(a);
        expect(result).toHaveLength(4);
        expect(result).toEqual([1, 4, 9, 16]);
        expect(result).not.toEqual(a);

        //square function

        squareNumber((a)=>{
            var array=[]
           for(var i=0;i<a.length;i++){
                 array.push(a[i]*a[i])
           }
           return array
        })
    });
});
