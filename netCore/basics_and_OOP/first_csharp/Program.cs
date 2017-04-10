using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // print all numbers 1 - 255
            // for (int i = 1; i <256; i++) 
            // {
            //     Console.WriteLine(i);
            // }
            // print 1-100 divisible by 3 or 5 but not both
            // for (int num = 1; num < 101; num++)
            // {
            //     if (num % 3 == 0 || num % 5 == 0)
            //     {
            //         if (num % 3 == 0 && num % 5 ==0);
            //         else 
            //         {
            //             Console.WriteLine(num);
            //         }
            //     }
            // }
            // Fizz Buzz
            // for (int num = 1; num < 101; num++)
            // {
            //     if (num % 3 == 0 && num % 5 == 0)
            //     {
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     else if ( num % 3 == 0)
            //     {
            //         Console.WriteLine("Buzz");
            //     }
            //     else if (num % 5 == 0)
            //     {
            //         Console.WriteLine("Fizz");
            //     }
            // }
            // change to multiples
            //    for (int num = 1; num < 101; num++){
            //        int m = num;
            //        int n = num;
            //        while (m >= 3){
            //            m = m - 3;
            //        }
            //        while (n >= 5){
            //            n = n - 5;
            //        }
            //        if (m == 0 && n == 0) {
            //            Console.WriteLine("FizzBuzz");
            //         } else if (m == 0 && n != 0) {
            //             Console.WriteLine("Fizz");
            //         } else if (m != 0 && n == 0) {
            //             Console.WriteLine("Buzz");
            //         }
            //     }
            
            //Optional Generate 10 random values 1-100 and output Fizz or Buzz
            Random rand = new Random();
            for (int num = 0; num <= 10; num++){
                int val = rand.Next(1, 100);

                string output = "For attempt " + num + " the value is " + val + " and the word is ";

                if(val % 3 == 0 && val % 5 == 0)
                {
                    output += "FizzBuzz";
                }
                else if (val % 3 == 0)
                {
                    output += "Fizz";
                }
                else if (val % 5 == 0)
                {
                   output += "Buzz";
                } else {
                    output += "Neither";
                }

                Console.WriteLine(output);
            }
        }
    }
}
