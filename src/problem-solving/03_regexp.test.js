import answers from './03_regexp.js';

describe('regexp', () => {
    it('you should be able to detect a number in a string', () => {
        expect(answers.containsNumber('abc123')).toEqual(true);
        expect(answers.containsNumber('abc')).toEqual(false);
//check if there is number in a string or not 
        detectNumber((str)=>{
           if(str.match(/\d+/)){
                    return true
                }else{
                    return false
                }  
        })
    });

    it('you should be able to detect a repeating letter in a string', () => {
        expect(answers.containsRepeatingLetter('bookkeeping')).toEqual(true);
        expect(answers.containsRepeatingLetter('rattler')).toEqual(true);
        expect(answers.containsRepeatingLetter('ZEPPELIN')).toEqual(true);
        expect(answers.containsRepeatingLetter('cats')).toEqual(false);
        expect(answers.containsRepeatingLetter('l33t')).toEqual(false);
        //check repeating leter 
        repeatingString((str)=>{
         if((/(a-zA-Z]).*\1/).test(str)){
             return true
         }else{
             return false
         }
        })
    });

    it('you should be able to determine whether a string ends with a vowel (aeiou)', () => {
        expect(answers.endsWithVowel('cats')).toEqual(false);
        expect(answers.endsWithVowel('gorilla')).toEqual(true);
        expect(answers.endsWithVowel('I KNOW KUNG FU')).toEqual(true);

    //check if string end with vowel
    checkVowel((str)=>{
        var vowel='aeiou'
        for(var i=0;i<vowel.length;i++){
            if(str[str.length-1]===vowel[i]){
                return true
            }else{
                return false
            }
        }
    })
    });

    it('you should be able to capture the first series of three numbers', () => {
        expect(answers.captureThreeNumbers('abc123')).toEqual('123');
        expect(answers.captureThreeNumbers('9876543')).toEqual('987');
        expect(answers.captureThreeNumbers('abcdef')).toEqual(false);
        expect(answers.captureThreeNumbers('12ab12ab')).toEqual(false);

        //capture the first three numbers
      captureNumbers((str)=>{
          var array=[]
          if(!str.replace(/^\D+/g, '')){
              return false 
          }else if(str.replace(/^\D+/g, '').length<3) {
              return false  
          }else{
          return  array.push('abc13'.replace( /^\D+/g, '').slice(0,3))
          }
      })

    });

    it('you should be able to determine whether a string matches a pattern', () => {
        // the pattern is XXX-XXX-XXXX where all X's are digits
        expect(answers.matchesPattern('800-555-1212')).toEqual(true);
        expect(answers.matchesPattern('451-933-7899')).toEqual(true);
        expect(answers.matchesPattern('33-444-5555')).toEqual(false);
        expect(answers.matchesPattern('abc-def-hijk')).toEqual(false);
        expect(answers.matchesPattern('1800-555-1212')).toEqual(false);
        expect(answers.matchesPattern('800-555-12121')).toEqual(false);
        expect(answers.matchesPattern('800-5555-1212')).toEqual(false);
        expect(answers.matchesPattern('800-55-1212')).toEqual(false);

        matchParttern((string)=>{
            if(string.match(/^\d{3}-\d{3}-\d{4}$/)){
                return true
            }else{
                return false
            }
        })
    });

    it('you should be able to detect correctly-formatted monetary amounts in USD', () => {
        expect(answers.isUSD('$132.03')).toEqual(true);
        expect(answers.isUSD('$32.03')).toEqual(true);
        expect(answers.isUSD('$2.03')).toEqual(true);
        expect(answers.isUSD('$1,023,032.03')).toEqual(true);
        expect(answers.isUSD('$20,933,209.93')).toEqual(true);
        expect(answers.isUSD('$20,933,209')).toEqual(true);
        expect(answers.isUSD('$459,049,393.21')).toEqual(true);
        expect(answers.isUSD('34,344.34')).toEqual(false);
        expect(answers.isUSD('$,344.34')).toEqual(false);
        expect(answers.isUSD('$34,344.3')).toEqual(false);
        expect(answers.isUSD('$34,344.344')).toEqual(false);
        expect(answers.isUSD('$34,344_34')).toEqual(false);
        expect(answers.isUSD('$3,432,12.12')).toEqual(false);
        expect(answers.isUSD('$3,432,1,034.12')).toEqual(false);
        expect(answers.isUSD('4$3,432,034.12')).toEqual(false);

 usdAmount((str)=>{
     if(str.match(/^\$?[0-9]+(\.[0-9][0-9])?$/)){
         return true
     }else{
         return false
     }
 })

    });
});
