import random

comp = random.choice([-1,0,1])

chose = input("Enter s, w or g ")
yourdict = {"s":1,"w":-1,"g":0}
actual = {1: "Snake", -1: "Water", 0: "Gun"}
selectedNum = yourdict[chose]

print(f"You chose {actual[selectedNum]}\nComputer chose {actual[comp]}")

if(comp == -1 and selectedNum == 1):
    print("You won")

elif(comp == -1 and selectedNum == 0):
    print("You Lose")

elif(comp == 1 and selectedNum == -1):
    print("You Lose")

elif(comp == 1 and selectedNum == 0):
    print("You Win")

elif(comp == 0 and selectedNum == -1):
    print("You Win")

elif(comp == 0 and selectedNum == 1):
    print("You Lose")
else:
    print("Draw")