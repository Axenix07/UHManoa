homework10:
	javac -h . homework10.java
	gcc -fPIC -shared -o libhomework10.so homework10.c \
	-I/usr/java/jdk1.8.0_131/include/ \
	-I/usr/java/jdk1.8.0_131/include/linux/

run: homework10
	java -Djava.library.path=. homework10
