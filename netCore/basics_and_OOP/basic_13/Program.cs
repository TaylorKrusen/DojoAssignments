using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void print1to255() {
            for (int i = 1; i <=255; i++) {
                Console.WriteLine(i);
            }
        }
        public static void printOdds() {
            for (int i = 1; i <=255; i++) {
                if (i % 2 != 0) {
                    Console.WriteLine(i);
                }
            }
        }
        public static void printSum() {
            int sum = 0;
            for (int i = 1; i<=255; i++) {
                sum += i;
                Console.WriteLine("New Number: " + i + ", Sum: " + sum);
            }
        }
        public static void arrIterate(int[] arr) {
            string newArr = "[";
            for (int i = 0; i < arr.Length; i++) {
                newArr += arr[i] + ", ";
            }
            newArr += "]";
            Console.WriteLine(newArr);
        }
        public static void Main(string[] args)
        {
            // print1to255();
            // printOdds();
            // printSum();
            int[] myArr = new int[6] {1,2,420,13,7,2};
            arrIterate(myArr);
            // MaxInArray(myArr);
            // AvgOfArray(myArr);
            // CreateOddArray();
            // GreaterThanY(myArr, 4);
            // SquareArrayValues(myArr); //Passed by reference
            // ReplaceNegatives(myArr); //Passed by reference
            // ShiftLeft(myArr);
            // MinMaxAvg(myArr);
            // ShiftLeft(myArr);
            // object[] boxedArray = new object[] {-1, 3, 2 -16};
            // ReplaceNumberWithString(boxedArray);
        }
    }
}
