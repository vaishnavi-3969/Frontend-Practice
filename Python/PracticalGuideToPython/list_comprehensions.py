from pprint import pprint

names = ['nina', 'max', 'rose', 'jimmy']

my_list = [] #empty list
for name in names:
    my_list.append(name)
print(my_list)

new_list = [len(name) for name in names if len(name) > 3]
pprint(new_list)
