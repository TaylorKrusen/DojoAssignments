my_string = "If monkeys like bananas, then I must be a monkey!"
print "Length of our string ",len(my_string)
location = -1
# Loop while true.
while True:
    # keeps it moving forward by one, searching
    location = my_string.find("monkey", location + 1)
    # Break if not found.
    if location == -1: break
    # prints the index of where monkey is
    print "Found monkey at index: ",location
    #find location of 'monkey'

my_string = "If monkeys like bananas, then I must be a monkey!"
print my_string.replace("monkey", "alligator")
#replace 'monkey' with 'alligator'

x = [-12,54,-2,7,400,98]
print min(x)
print max(x)
#this prints the min and max values. Find out how to display them in line?

x = ["hello",2,54,-2,7,12,98,"world"]
x.sort()
print x[6:8]
#this rearranges the numbers and pushes hello to the back of the array. Then we specify where we want to print.

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
newList = []
for negNum in x:
    if negNum < 0:
        newList.append(negNum)
for negNum in newList:
    x.remove(negNum)
x.insert(0,newList)

print x
print newList

#the problem asked us to "slice" out the values but I couldn't figure out how to use slice in this instance. The remove command seemed to work just fine. Find out the correct way to use slice here.
