# Make animal class with name and health attributes. Give 3 methods: walk, run, displayHealth. Each method does a specific action.

class Animal(object):

    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print self.name
        print self.health
        return self

# Create an instance of the animal called 'animal' and have this animal walk three times, run twice, and have it display its health.

animal = Animal('RapidBiscuits').walk().walk().walk().run().run().displayHealth()

# Make a Dog class that inherits stuff from animal with specific changes.

class Dog(Animal):

    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

# Have the Dog walk() three times, run() twice, pet() once, and have it displayHealth().

dog = Dog('Cleotus').walk().walk().walk().run().run().pet().displayHealth()

# Make a Dragon class that inherits stuff from animal with specific changes.

class Dragon(Animal):

    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print "BURNINATING THE PEASENTS"
        super(Dragon, self).displayHealth()

# Have the Dragon walk() three times, run() twice, fly() twice, and have it displayHealth()

dragon = Dragon('Trogdor').walk().walk().walk().run().run().fly().fly().displayHealth()
