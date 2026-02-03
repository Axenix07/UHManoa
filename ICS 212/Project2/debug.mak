project_debug: user_interface.o llist.o
	g++ -std=c++11 -o project_debug user_interface.o llist.o

user_interface.o: user_interface.cpp
	g++ -std=c++11 -ansi -pedantic-errors -Wall -D DEBUG -c user_interface.cpp

llist.o: llist.cpp
	g++ -std=c++11 -ansi -pedantic-errors -Wall -D DEBUG -c llist.cpp