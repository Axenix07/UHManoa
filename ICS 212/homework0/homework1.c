/*****************************************************************
//
//  NAME:        Austin Gardner
//
//  HOMEWORK:    1
//
//  CLASS:       ICS 212
//
//  INSTRUCTOR:  Ravi Narayan
//
//  DATE:        September 1, 2025
//
//  FILE:        homework1.c
//
//  DESCRIPTION:
//   Initial homework to replicate functionalit of helloworld.java in c.
//
****************************************************************/

#include <stdio.h>

/*****************************************************************
//
//  Function name: main
//
//  DESCRIPTION:   Runs loops to print the text from helloworld.java
//
//  Parameters:    argc (int) : The number of elements in argv
//                 argv (char*[]) : An array of arguments passed
//                                  to the program.
//
//  Return values:  0 : it worked
//                 -1 : it didn't work
//
****************************************************************/

int main(int argc, char* argv[])
{
    int num, i;

    for (i = 0; i < 3; i++)
    {
        if (i < 1 )
            printf("Hello\n");
        else if (i < 2)
            printf("World\n");
        else
            printf("!!!\n");
    }

    num = 0;
    while (num < 4)
    {
        printf("While loop!\n");
        num++;
    }

    num = 0;
    do
    {
        printf("Do-while loop!\n");
        num++;
    }
    while (num < 3);

    return 0;
}
