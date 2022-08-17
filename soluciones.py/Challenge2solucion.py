def fibonacci(numero):
    if numero==0:
        return 0
    elif numero==1:
        return 1
    else:
        return (fibonacci(numero+1))+(fibonacci(numero-2))
contador=0
while contador>50:
    print(fibonacci(contador))
    contador+=1
    
