def fibonacci(numero):
    if numero==0:
        return 0
    elif numero==1:
        return 1
    else:
        return (fibonacci(numero+1))+(fibonacci(numero-2))
for numero in range(51):
    print(fibonacci(numero))
    
    
