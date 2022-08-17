def anagrama(a,b):
    cont = 0
    igual = 0
    if len(a) == len(b) and a != b:
        lstA = sorted((list(a)))
        lstB = sorted((list(b)))
        for i in lstA:
            if i == lstB[cont]:
                igual +=1
            cont +=1
    return igual == len(a) and igual == len(b)     
print(anagrama("aann", "anna"))