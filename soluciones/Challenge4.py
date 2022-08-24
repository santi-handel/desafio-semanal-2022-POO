def area_poligonos(p,l,h):
    if p==0:
        areaTriangulo=l*h/2
        print (f'el area del triangulo es {areaTriangulo}')
    elif p==1:
        areaCuadrado=l*l
        print (f'el area del cuadrado es {areaCuadrado}')
    elif p==2:
        areaRectangulo=l*h
        print (f'el area del rectangulo es {areaRectangulo}')
    else:
        print("ingrese una opcion válida")
alto=0
print("ingrese su tipo de poligono")
poligono=int(input("0=Triangulo\n1=Cuadrado\n2=Rectangulo\n"))
largo=int(input("ingrese la medida del largo\n"))
if poligono==0 or poligono==2:
    alto=int(input("ingrese la medida del alto\n"))
area_poligonos(poligono,largo,alto)
