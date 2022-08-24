def es_primo(n):
  for i in range(2,n-1):
    if (n%i) == 0:
        return False
  return True
contador=range(2,100,1)
for i in contador:
    if es_primo(i):
        print(i)