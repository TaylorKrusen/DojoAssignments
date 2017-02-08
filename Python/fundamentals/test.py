x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(listToPrint):
    for num in listToPrint:
        if (type(num) is str):
            stars = num[0].lower()*len(num)
            print stars
        else:
            stars = "*" * num
            print stars

draw_stars (x)

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(arr):
    for val in arr:
        if (type(val) is str):
            print val[0].lower()*len(val)
        else:
            stars = "*" * val
        print stars

draw_stars (y)
