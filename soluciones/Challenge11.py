def eliminarCaracteres(str1,str2):
    out1 = ""
    out2 = ""
    for i in str1:
        if i not in str2:
            out1 +=i
    for i in str2:
        if i not in str1:
            out2 +=i
    print(out1 +"  "+out2)
eliminarCaracteres("hola", "como")