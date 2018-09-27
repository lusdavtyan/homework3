 const a = function(n1, n2, n3) {
        return n1 + n2 * n3;
    }
    console.log(a(3, 2, 4));


    const b = function() {
        return 'Hello World'
    }
    const kim = b();
    console.log(kim);

    const c = function(aa, bb) {
        const cc = aa + bb;
        }
       

    const d = function(cc, dd, ee) {
        if (cc.length > dd.length && cc.length > ee.length) {
            return cc;
        } else if (dd.length > ee.length && dd.length > cc.length) {
            return dd;
        } else {
            return ee;
        }
    };
    console.log(d('Kim', 'Tae', 'Hyung'));

    //A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
    const e = function(num1,num2){
        
        if(num1===num2){
            return 0;
        }
        else if(num1>num2){
            return 1;
        }else if(num2>num1){
            return -1;
        }
    }
     console.log(e(32,55));

    //Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points
     const multiply = function(number1,number2){
        const result = number1*number2
        return result
    }
      console.log(c())
    console.log(multiply(5,6))
    //Create a divide function (that divides the first argument by the second and returns the result) - 2 points
    const divide = function(argument1,argument2){
        const resultt = argument1/argument2
        return resultt ;
    }
    console.log(divide(15,3))
//Create a triangleArea function that takes base and height as input and returns the area of a triangle 
//without using * or / (HINT: Use the multiply and divide functions you already wrote)
    const triangleArea = function(base, height){
        const areaTriangle = divide(multiply(base,height),2)
        return areaTriangle ;
    }
    console.log(triangleArea(5,10));
    //-Create a function called numLength that takes a number and returns the number of characters in the number 
    //(example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length 
const numLength = function(a) {
        let c = a + '';
          return c.length
    } 
    
     console.log(numLength(8525356411))
    //-Create a function that takes two strings and a number. 
    // If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.  - 6 points
     const f = function (a,b,c)
    {
        if(a.length + b.length > c){
            return 1;
        }
        else{
            return -1;
        }
    }
  
    
    console.log(f('library','aua',234))

    //Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area
     //of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle 
    //(you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1. 
       const runStuff= function(nn1, nn2, strng){
    if(strng==="rectangle") {return nn1*nn2
   }else if (strng ==="triangle"){return triangleArea(nn1, nn2)
    } else {return -1 }
  };
  console.log(runStuff(26,7, "rectangle"))



