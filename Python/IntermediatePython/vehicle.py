# import importlib
# importlib.reload(cars)

class Vehicle:
    def __init__(self, make, model, fuel="gas"):
        self.make = make
        self.model = model
        self.fuel = fuel
    
class Car(Vehicle):
    def __init__(self, make, model, fuel="gas", num_wheels=4):
        super().__init__(make, model, fuel)
        self.num_wheels = num_wheels
        # my_car = Car("Toyota", "Corolla")
        # print(my_car.make + " " + my_car.model)  # Outputs: Toyota Corolla


    def is_eco_friendly(self):
        if self.fuel == "gas":
            return False
        else:
            return True
        
four_by_four = Car("zoom", "goes fast", fuel='cooking oil')
print(four_by_four)
print(four_by_four.model)
print(four_by_four.make)
print(four_by_four.fuel)
print(four_by_four.is_eco_friendly())
print("Is car a subclass of vehicle?",issubclass(Car, Vehicle))
print("Is vehicle a subclass of car?",issubclass(Vehicle, Car))
print("Is car a subclass of Car?",issubclass(Car, Car))
print("Is vehicle a subclass of vehicle?",issubclass(Vehicle, Vehicle))