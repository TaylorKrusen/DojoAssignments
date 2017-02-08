x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(arr):
    for val in arr:
        str = ""
        for count in range(val):
            str += "*"
        print str

draw_stars(x)

# function that takes in a list of strings and integers, and if a string is passed, instead of displaying *, it displays the first letter of the string a len(string) number of times
y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(arr):
    for val in arr:
        if (type(val) is str):
            print val[0].lower()*len(val)
        else:
            print "*" * val

draw_stars (y)
