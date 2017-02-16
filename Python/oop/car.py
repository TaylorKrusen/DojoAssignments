class Car(object):

    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
        if price > 10000:
            self.tax = 0.15

    def display_all(self):
        print "----------------------"
        print "Price:", self.price
        print "Speed:", self.speed
        print "Gas:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax
        print "----------------------"
        return self

car1 = Car(8000, '28mph', 'quarter tank remaining', '5mpg (hummer)').display_all()

car2 = Car(11000, '200mph', 'full', '1mpg').display_all()

car3 = Car(3000, '10mph', 'empty', '30mph').display_all()

car4 = Car(20000, '80mph', 'mostly full', '30mph').display_all()

car5 = Car(10001, '177mph', 'empty', '30mph').display_all()

car6 = Car(7423, '2mph', 'after eating beans', '... the car is actually Taylor.').display_all()
