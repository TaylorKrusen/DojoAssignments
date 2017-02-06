def oddEven(x):
    if (x % 2 == 0):
        print "Number is "+str(x)+". This is an even number."
    else:
        print "Number is "+str(x)+". This is an odd number."
#this function determines if a number is even or odd and then concactenates it to a string.

for num in range(1,101):
    oddEven(num)

#this loops through a range of numbers and feeds that number into our function


def loopMultiply(x,y):
    for value in range(len(x)):
        x[value] *= y
    return x

a = [2,4,10,16]
b = loopMultiply(a, 5)
print b

def layered_multiples(arr):  # returns arrays of 1s for each multiplied value
    new_array = []
    for i in arr:
        i_array = []
        for j in range(i):
            i_array.append(1)
        new_array.append(i_array)
    return new_array

#had to get some help on this one. Make sure to ask Colty for clarification this week.

x = layered_multiples(loopMultiply([2,4,5],2))
print x
