/*****************************************************************
NAME:        Austin Gardner
HOMEWORK:    Project 2
CLASS:       ICS 212
INSTRUCTOR:  Ravi Narayan
DATE:        Nov 29, 2025
FILE:        user_interface.cpp

DESCRIPTION: This file contains the user interface for the Bank Database
             Application using the llist class.
****************************************************************/

#include <iostream>
#include <string>
#include <cstring>
#include "llist.h"

#ifdef DEBUG
#define DEBUG_PRINT(x) std::cout << x << std::endl
#else
#define DEBUG_PRINT(x)
#endif

void getAddress(std::string& address);
void getName(std::string& name);
void getAccountNumber(int& accountNumber);

int main(int argc, char* argv[])
{
    llist llist;
    std::string input;
    bool loop;
    loop = true;

    
    DEBUG_PRINT("Program started in debug mode.");


    std::cout << "Welcome to the Bank Database Application\n\n";

    while (loop)
    {
        std::cout << "Please choose one of the following options:\n"
                  << "add     : Add a new record\n"
                  << "printall: Print all records\n"
                  << "find    : Find records by account #\n"
                  << "delete  : Delete records by account #\n"
                  << "quit    : Quit the program\n";

        std::cin >> input;
        std::cin.ignore(1000, '\n'); // clear leftover newline

        // --- ADD ---
        if (input == "add" || input == "a" || input == "ad")
        {
            int accountNumber;
            std::string name;
            std::string address;

            getAccountNumber(accountNumber);
            getName(name);
            getAddress(address);

            char name_c[25];
            char address_c[45];

            strncpy(name_c, name.c_str(), sizeof(name_c));
            name_c[sizeof(name_c) - 1] = '\0';

            strncpy(address_c, address.c_str(), sizeof(address_c));
            address_c[sizeof(address_c) - 1] = '\0';

            if (llist.addRecord(accountNumber, name_c, address_c) == -1)
            {
                std::cout << "There was an error adding the user.\n";
            }
            else
            {
                std::cout << "The user was successfully added.\n";
            }
        }
        // --- PRINT ALL ---
        else if (input == "printall" || input == "printal" || input == "printa" 
            || input == "print" || input == "prin" || input == "pri" || input == "pr"
            || input == "p")
        {
            llist.printAllRecords();
        }
        // --- FIND ---
        else if (input == "find" || input == "fin" || input == "fi"|| input == "f")
        {
            int accountNumber;
            std::cout << "Enter account number to find: ";
            std::cin >> accountNumber;
            std::cin.ignore(1000, '\n');

            if (accountNumber <= 0)
            {
                std::cout << "Invalid account number.\n";
                continue;
            }

            if (llist.findRecord(accountNumber) == -1)
                std::cout << "This account is not in the records.\n";
        }
        // --- DELETE ---
        else if (input == "delete" || input == "delet" || input == "dele" ||
             input == "del" || input == "de" || input == "d")
        {
            int accountNumber;
            std::cout << "Enter account number to delete: ";
            std::cin >> accountNumber;
            std::cin.ignore(1000, '\n');

            if (accountNumber <= 0)
            {
                std::cout << "Invalid account number.\n";
                continue;
            }

            if (llist.deleteRecord(accountNumber) == -1)
                std::cout << "Error deleting record.\n";
        }
        // --- QUIT ---
        else if (input == "quit" || input == "qui" || input == "qu" || input == "q")
        {
            loop = false;
        }
        else
        {
            std::cout << "Please enter a valid command.\n";
        }
    }

    return 0;
}

void getAddress(std::string& address)
{
    DEBUG_PRINT("Calling getAddress with address=" <<address);
    bool stop;
    stop = false;

    address.clear();

    char buffer[256];  // temporary buffer for each line

    std::cout << "Enter address (type 'done' on its own line to finish):\n";

    while (!stop)
    {
        std::cin.getline(buffer, sizeof(buffer));

        if (std::strcmp(buffer, "done") == 0)
        {
            stop = true;
        }

        if (!address.empty() && !stop)
            {
                address += "\n";
            }
        if (!stop)
        {
            address += buffer;
        }
    }
}


void getName(std::string& name)
{
    DEBUG_PRINT("Calling getName with name=" << name);
    bool loop;
    loop = true;
    while (loop)
    {
        std::cout << "Enter customer name:\n";
        std::getline(std::cin, name);

        if (name.size() > 24)
        {
            std::cout << "Please enter a name under 24 characters";
            name = "";
        }
        else
        {
            loop = false;
        }
    }
    
}

void getAccountNumber(int& accountNumber)
{
    DEBUG_PRINT("Calling getAccountNumber with accountNumber=" << accountNumber);

    std::cout << "Enter a positive account number:\n";
    std::cin >> accountNumber;
    std::cin.ignore(1000, '\n');

    while (accountNumber <= 0)
    {
        std::cout << "Invalid. Enter a positive account number:\n";
        std::cin >> accountNumber;
        std::cin.ignore(1000, '\n');
    }
}
