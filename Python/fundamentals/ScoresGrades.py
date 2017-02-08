from random import randrange

def scores(x):
    print "Scores and Grades"
    for count in range(0, x):
        num = randrange(40)+60

        if(num <= 69):
            print "Score:",str(num)+"; Your grade is D"
        elif(num <= 79):
            print "Score:",str(num)+"; Your grade is C"
        elif(num <= 89):
            print "Score:",str(num)+"; Your grade is B"
        else:
            print "Score:",str(num)+"; Your grade is A"
    print "End of the program. Bye!"

scores(10)
