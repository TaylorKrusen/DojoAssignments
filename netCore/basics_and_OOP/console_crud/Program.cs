using System;
using System.Collections.Generic;
using DbConnection;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
                //Placed inside the code block where you want to query the database
                List<Dictionary<string, object>> the_query = DbConnector.Query("SELECT * FROM Users");
                // //or
                DbConnector.Execute("INSERT INTO Users (FirstName, LastName, Created_At) VALUES ('Annabelle', 'The Baby', NOW());");
                
                Console.WriteLine(the_query);

        }
    }
}
