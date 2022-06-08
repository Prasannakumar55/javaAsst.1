// 1. You are provided with two numbers A and B. Your task is to add these two numbers.
//Note: You have to complete AddTwoNumbers function. No need to take any input.

// 1.
const AddTwoNumbers = (a,b) => {
    let result = a+b
    return result
    };
    console.log(AddTwoNumbers(2,5))
    
// 2. You are given two number first as A and second as B and check if both conditions ( A < 10 and A > B )
//are satisfied or not with the help of operators. 

//2. 

const Is_Valid = (a,b) => {
    if (a<10 && a>b) 
      { return true
        }
        
    else {
      return false
    }    
  };
  console.log(Is_Valid(5,3))
  
  

// 7. You are provided with two numbers A and B.Your task is to multiply these two numbers.
//Note: You have to complete Multiply_two_number function. No need to take any input.   

//7.

const Multiply_two_number = (a,b) => {
    let result = a*b
    return result
};
console.log(Multiply_two_number(2,5))
 

// 3. You are given two numbers A and B. You need to do the following checks:
// 1.if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this

//3.
const Check = (A, B) => 
{
 if((A%10==0 && B%10==0 ) || (A%10==0 || B%10==0)) {return true}
 else { return false}
}; 
console.log(Check(12, 20))

// 6. You are provided with two numbers A and B
//where A as  divisor and B as  dividend.Your task is find the remainder.
//6.
const Find_the_remainder = (a,b) => {
  return  b%a
};
console.log(Find_the_remainder(2,9))


// 4.You are provided a four digit number N only. Your task is to print out
// the first digit of that number. 


const First_Digit = (n) => {
  while(n>=10)
  n/=10;
  return Math.floor(n);
  }
console.log(First_Digit(4567));


// 5. You are provided a four digit number N only. Your task is to print out
// the last digit of that number.

const Last_Digit = (n) => {
  n=n%10;
  return n;
};
console.log(Last_Digit(4567));

// 8. Shyam has got his marks in three subjects as 
// A ,  B , and C (out of 100).
// Write a program to calculate his total marks and his average.

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
  let total=Sum(A,B,C);

   return (total/300)*100;
};
console.log(Sum(20,50,100));
console.log(Average(20,50,100));

 