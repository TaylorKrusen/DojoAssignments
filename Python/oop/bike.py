class Bike(object):

    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "duh info:"
        print self.price, self.max_speed, self.miles
        return self

    def ride(self):
        print "riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing..."
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self

bike1 = Bike('$100', '35mph').ride().ride().ride().reverse().displayInfo()

bike2 = Bike('$300', '45mph').ride().ride().reverse().reverse().displayInfo()

bike = Bike('$400', '15mph').reverse().reverse().reverse().displayInfo()
