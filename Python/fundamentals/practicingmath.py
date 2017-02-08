
numbers = range(1,101,2)
print numbers
#this works but does not use a for loop like they asked

for x in range (0,1000):
    if (x % 2 != 0):
        print x
#this works if you know the range of your list

for x in range (0,100):
    if (x % 5 == 0):
        print x
#printing multiples of 5 between 1 and 100 (can be changed to 1m to solve challenge)

a = [1, 2, 5, 10, 255, 3]
print sum(a)
#printing sum of numbers in a

a = [1, 2, 5, 10, 255, 3]
avg = sum(a)/len(a)
print avg

#gives average of list a
