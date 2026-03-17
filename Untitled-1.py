ex = input("Qual exercio? 1-Sequência Básica  2-Estrutura Condicional 3-Estrutura de Repetição ")

if ex == "1":
    num1 = float(input("Numero 1 = "))
    num2 = float(input("Numero 2 = "))
    
    soma = num1 + num2
    print (soma)
    
elif ex == "2":
    num1 = int(input("Qual o numero 1 = "))
    result = num1 % 2
    if result == 0:
        print("PAR")
        
    elif result == 1:
        print("Impar")
        
    else :
        print ("numero invalido")
        
elif ex == "3":
    num1 = float(input("Escolha um número: "))
    num2 = int(input("Qual o número máximo da tabuada? "))

    for i in range(num2 + 1):
        resultado = num1 * i
        print(f"{num1} x {i} = {resultado}")
        
else:
    print("Exercio INVALIDO")