/*****************************************************************
NAME:        Austin Gardner

HOMEWORK:    3b

CLASS:       ICS 212

INSTRUCTOR:  Ravi Narayan

DATE:        Sep 27, 2025

FILE:        user_interface.c

DESCRIPTION:
This file has the code for the user interface of the Bank Database Application.
****************************************************************/

#include <stdio.h>
#include <string.h>
#include "record.h"
#include "database.h"

int debugMode;

/*****************************************************************
Function name: getAddress

DESCRIPTION:   A userinterface function
               This takes the address values from the user

Parameters:    address (char*) : pointer to a char array to store the address
               length (int) : the length of the characters that the address should recieve from the user
****************************************************************/

void getAddress(char *address, int length);

/*****************************************************************
Function name: getName

DESCRIPTION:   A userinterface function
               This takes the name value from the user
Parameters:    name (char*) : pointer to a char array to store the name
****************************************************************/

void getName(char *name);

/*****************************************************************
Function name: getAccountNumber

DESCRIPTION:   A userinterface function
               This takes the account number value from the user
Parameters:    name (char*) : pointer to a int to store the account number
****************************************************************/

void getAccountNumber(int* accountNumber);

/*****************************************************************
//  Function name: main
//
//  DESCRIPTION:   A userinterface function
//                 The main function that creates the user interface
//  Parameters:    argc (int) : contains the number of arguments
//                               which will be processed
//                 argv (char*): contains the actual command arguments passed in
//  Return values:  0 : success
****************************************************************/

int main(int argc, char* argv[])
{
    extern int debugMode;
    struct record * start;

    char input[100];
    int loop;

    start = NULL;
    debugMode = 0;
    loop = 1;
    if (argc == 2)
    {
        if (strcmp(argv[1], "debug") == 0)
        {
            debugMode = 1;
        }
        else
        {
            loop = 0;
        }
    }

    readfile(&start, "AccountRecords.txt");

    printf("Welcome to the Bank Database Application\n\n");

    while (loop == 1)
    {
        printf("Please choose one of the following options by typing in the name of the function:\n");
        printf("add: Add a new record in the database\n");
        printf("printall: Print all records in the database\n");
        printf("find: Find record(s) with a specified account #\n");
        printf("delete: Delete existing record(s) from the database using the account # as a key\n");
        printf("quit: Quit the program\n");

        scanf("%s", input);

        if (strcmp(input, "add") == 0 || strcmp(input, "ad") == 0 || strcmp(input, "a") == 0)
        {
            char address[45];
            char name[25];
            int accountNumber;
            int *pAccountNumber;

            pAccountNumber = &accountNumber;
            getAccountNumber(pAccountNumber);

            getName(name);
            getAddress(address, 45);
            if ( addRecord(&start, accountNumber, name, address) == -1)
            {
                printf("There was an error adding the user.\n");
            }
            else
            {
                printf("The user was successfully added.\n");
            }
        }
        else if (strcmp(input, "printall") == 0 || strcmp(input, "printal") == 0 || strcmp(input, "printa") == 0 || strcmp(input, "print") == 0 || strcmp(input, "prin") == 0 || strcmp(input, "pri") == 0 || strcmp(input, "pr") == 0 || strcmp(input, "p") == 0)
        {
            printAllRecords(start);
        }
        else if (strcmp(input, "find") == 0 || strcmp(input, "fin") == 0|| strcmp(input, "fi") == 0 || strcmp(input, "f") == 0)
        {
            int accountNumber;
            int *pAccountNumber;
            pAccountNumber = &accountNumber;
            printf("Please enter the number for the account you want to find.\n");
            scanf("%d", pAccountNumber);
            while (*pAccountNumber <=0)
            {
                printf("Please enter a valid account number.  It must be a positive integer.\n");
                scanf("%d", pAccountNumber);
            }

            if (findRecord(start, accountNumber) == -1)
            {
                printf("This account is not in the records.\n");
            }
        }
        else if (strcmp(input, "delete") == 0|| strcmp(input, "delet") == 0 || strcmp(input, "dele") == 0||strcmp(input, "del") == 0||strcmp(input, "de") == 0|| strcmp(input, "d") == 0)
        {
            int accountNumber;
            int *pAccountNumber;

            pAccountNumber = &accountNumber;
            printf("Please enter the number for the account you want to delete.\n");
            scanf("%d", pAccountNumber);
            while (*pAccountNumber <= 0)
            {
                printf("Please enter a valid account number.  It must be a positive integer.\n");
                scanf("%d", pAccountNumber);
            }

            if(deleteRecord(&start, accountNumber) == -1)
            {
                printf("There was an error deleting this record, please confirm that you inputted the right account number.\n");
            }
        }
        else if (strcmp(input, "quit") == 0 || strcmp(input, "qui") == 0|| strcmp(input, "qu") == 0|| strcmp(input, "q") == 0)
        {
            loop = 0;
            writefile(start, "AccountRecords.txt");
        }
        else
        {
            printf("Please enter a valid command.\n");
        }
    }
    return 0;
}

/*****************************************************************
//  Function name: getAddress
//  //
//  //  DESCRIPTION:   A userinterface function
//  //                 This takes the address values from the user
//  //  Parameters:    address (char*) : pointer to a char array to store the address
//  //                 length (int) : the length of the characters that the address should recieve from the user
//  ****************************************************************/

void getAddress(char *address, int length)
{
    extern int debugMode;
    char temp[45];

    if (debugMode == 1)
    {
        printf("getAddress\n");
        printf("address: %p, length: %d\n", address, length);
    }

    temp[0] = '\0';
    printf("Please enter the address for this account.\n");
    printf("Enter 'done' on it's own line when you are finished entering the address\n");
    strcpy(address, temp);
    do
    {
        strcat(address, temp);
        fgets(temp, 45, stdin);
    } while (strcmp(temp, "done\n") != 0);
    if (strlen(address) > 0 && address[strlen(address) - 1] == '\n')
    {
        address[strlen(address) - 1] = '\0';
    }
}

/*****************************************************************
//  Function name: getName
//  //  //
//  //  //  DESCRIPTION:   A userinterface function
//  //  //                 This takes the name value from the user
//  //  //  Parameters:    name (char*) : pointer to a char array to store the name
//  //  ****************************************************************/

void getName(char *name)
{
    extern int debugMode;
    char trash[10];

    if (debugMode == 1)
    {
        printf("getName\n");
        printf("name: %p\n", name);
    }

    printf("Please enter the customer's name for this record\n");
    fgets(trash, 10, stdin);
    fgets(name, 25, stdin);
    if (strlen(name) > 0 && name[strlen(name) - 1] == '\n') {
        name[strlen(name) - 1] = '\0';
    }
}

/*****************************************************************
//  Function name: getAccountNumber
//
//  DESCRIPTION:   A userinterface function
//                 This takes the account number value from the user
//  Parameters:    name (char*) : pointer to a int to store the account number
****************************************************************/

void getAccountNumber(int* accountNumber)
{
    extern int debugMode;

    if (debugMode == 1)
    {
        printf("getAccountNumber\n");
        printf("accountNumber: %p\n", (void *)accountNumber);
    }
    printf("Please enter the account number for the new account.  It must be a positive integer.\n");
    scanf("%d", accountNumber);
    while (*accountNumber <= 0)
    {
        printf("Please enter a valid account number.  It must be a positive integer.\n");
        scanf("%d", accountNumber);
    }
}
