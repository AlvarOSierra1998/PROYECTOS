ArrayPersonas={'Alvaro':24,'Manuel':20, 'Jorge':32, 'Ramirez':21}
print("Conjunto de personas y edades:",ArrayPersonas)
print("Claves y valores del Array:")
for clave,valor in ArrayPersonas.items():
    print("clave:",clave,"valor:",valor)

persona = 'Alvaro'
if persona in ArrayPersonas:
    print(persona,"esta en el conjunto de personas")
else:
    print(persona,"no esta en el conjunto de personas")        
    
    