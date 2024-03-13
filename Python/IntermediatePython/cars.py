# import importlib
# importlib.reload(cars)

class Car:
    runs = True
    number_of_wheels = 4

    def __init__(self, name):
        print("New Car!")
        self.name = name
        
    def start(self):
        if self.runs:
            print(f"{self.name} car is started.")
        else:
            print(f"{self.name} car is broken.")

    @classmethod
    def get_number_of_wheels(cls):
        return cls.number_of_wheels
    
        


# if __name__ == "__main__":
#     my_car = Car("Lamborghini")
#     my_car.start()