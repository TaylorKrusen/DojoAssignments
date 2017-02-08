import random
def coinToss(number):
    heads, tails = 0, 0 # multiple assignment
    for i in range(1,number+1): # do this 'number' amount of times seems to stop one coin before the last...
        flip = random.randint(0, 1)
        if (flip == 0):
            heads += 1
            print "Attempt #"+str(i)+": Throwing a coin...It's a heads! Got",heads,"heads so far and",tails,"tails so far."
        else:
            tails += 1
            print "Attempt #"+str(i)+": Throwing a coin...It's a tails! Got",tails,"tails so far and",heads,"heads so far."

    print "Ending the Program, Thank You!"

coinToss(10)
