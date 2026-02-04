#include <iostream>
#include <fstream>
#include <cstring>
#include <string>
#include <cstdlib>
//included because my version of the c compiler on uhunix doesn't have stoi
#include "llist.h"

#ifdef DEBUG
#define DEBUG_PRINT(x) std::cout << x << std::endl
#else
#define DEBUG_PRINT(x)
#endif

/*
 * Constructors / destructor
 */

llist::llist()
{
    this->start = NULL;
    strcpy(this->filename, "AccountRecords.txt");

    DEBUG_PRINT("Calling llist");

    this->readfile();
}

llist::llist(char fname[])
{
    DEBUG_PRINT("Calling llist with fname=" << fname);
    start = NULL;
    strncpy(this->filename, fname, 19);
    filename[19] = '\0';

    readfile();
}

// Copy constructor
llist::llist(const llist& oldLlist)
{
    this->start = NULL;
    strcpy(this->filename, oldLlist.filename);

    DEBUG_PRINT("Calling copy constructor");

    if (oldLlist.start == NULL)
    {
        // Empty list, nothing to copy
        return;
    }

    // Copy the first node
    record* current = oldLlist.start;
    record* prev = NULL;

    while (current != NULL)
    {
        // Create a new node
        record* newRecord = new record;
        newRecord->accountno = current->accountno;

        strncpy(newRecord->name, current->name, 24);
        newRecord->name[24] = '\0';

        strncpy(newRecord->address, current->address, 49);
        newRecord->address[49] = '\0';

        newRecord->next = NULL;

        if (prev == NULL)
        {
            this->start = newRecord;
        }
        else
        {
            prev->next = newRecord;
        }

        prev = newRecord;
        current = current->next;
    }
}


llist::~llist()
{
    DEBUG_PRINT("Calling ~llist");

    this->writefile();
    this->cleanup();
}

/*
 * addRecord
 */

int llist::addRecord(int accountNumber, char name[], char address[])
{
    DEBUG_PRINT("Calling addRecord with accountNumber=" << accountNumber << ", name=" << name <<", and Address=" << address);

    record* newRecord = new record;

    newRecord->accountno = accountNumber;
    strncpy(newRecord->name, name, 24);
    newRecord->name[24] = '\0';

    strncpy(newRecord->address, address, 49);
    newRecord->address[49] = '\0';

    newRecord->next = NULL;

    // empty list
    if (this->start == NULL)
    {
        this->start = newRecord;
        return 0;
    }

    record* current = this->start;
    record* previous = NULL;

    while (current != NULL && current->accountno < accountNumber)
    {
        previous = current;
        current = current->next;
    }

    if (current != NULL && current->accountno == accountNumber)
    {
        delete newRecord;
        return -1;   // duplicate account
    }

    if (previous == NULL)
    {
        newRecord->next = this->start;
        this->start = newRecord;
    }
    else
    {
        previous->next = newRecord;
        newRecord->next = current;
    }

    return 0;
}

/*
 * findRecord
 */

int llist::findRecord(int accountNumber)
{
    DEBUG_PRINT("Calling findRecord with accountNumber=" << accountNumber);

    record* current = this->start;

    while (current != NULL)
    {
        if (current->accountno == accountNumber)
        {
            std::cout << "Account Number: " << current->accountno << "\n";
            std::cout << "Name: " << current->name << "\n";
            std::cout << "Address:\n" << current->address << "\n\n";
            return 1;
        }
        current = current->next;
    }

    return -1;
}

/*
 * printAllRecords
 */

void llist::printAllRecords()
{
    DEBUG_PRINT("Calling printAllRecords");

    record* current = this->start;

    if (current == NULL)
    {
        std::cout << "The list is empty.\n";
        return;
    }

    while (current != NULL)
    {
        std::cout << "Account Number: " << current->accountno << "\n";
        std::cout << "Name: " << current->name << "\n";
        std::cout << "Address:\n" << current->address << "\n\n";

        current = current->next;
    }
}

/*
 * deleteRecord
 */

int llist::deleteRecord(int accountNumber)
{
    DEBUG_PRINT("Calling deleteRecord with accountNumber=" << accountNumber);

    record* current = this->start;
    record* previous = NULL;

    while (current != NULL)
    {
        if (current->accountno == accountNumber)
        {
            if (previous == NULL)
                this->start = current->next;
            else
                previous->next = current->next;

            delete current;
            return 1;
        }

        previous = current;
        current = current->next;
    }

    return -1;
}

/*
 * writefile
 */

int llist::writefile()
{
    DEBUG_PRINT("Calling writefile");
    int error = 0;

    std::ofstream out(this->filename);
    if (!out.is_open()) 
    {
        error = -1;
    }

    record* current = this->start;
    while (current != NULL) {
        out << current->accountno << "\n";
        out << current->name << "\n";
        out << current->address << "\n";
        out << "addDone\n";

        current = current->next;
    }

    out.close();
    return error;
}


/*
 * readfile
 */

int llist::readfile()
{
    DEBUG_PRINT("Calling readfile");
    int error;
    int stop;

    error = 0;
    stop = 0;

    std::ifstream in(this->filename);
    if (!in)
        error = -1;

    std::string line;
    std::string name;
    std::string address;

    while (error == 0 && stop == 0)
    {

        char name_c[25];
        char address_c[45];
        char line_c[20];
        // --- Read account number line ---
        if (!std::getline(in, line))
        {
            stop = 1;  
        }

        if (stop == 0)
        {
            int accountNumber = 0;
            try {
                strncpy(line_c, line.c_str(), sizeof(line_c));
                line_c[sizeof(line_c) - 1] = '\0';
                accountNumber = std::atoi(line_c);
            } 
            catch (...) {
                continue;
            }

            
            if (!std::getline(in, name))
                break;

            strncpy(name_c, name.c_str(), sizeof(name_c));
            name_c[sizeof(name_c) - 1] = '\0';

            address.clear();
            std::string temp;

            while (std::getline(in, temp))
            {
                if (temp == "addDone")
                    break;

                address += temp + "\n";
            }

            strncpy(address_c, address.c_str(), sizeof(address_c));
            address_c[sizeof(address_c) - 1] = '\0';

            addRecord(accountNumber, name_c, address_c);
        } 
        
    }

    return error;
}



/*
 * cleanup
 */

void llist::cleanup()
{
    DEBUG_PRINT("Calling cleanup");
    record* current = this->start;

    while (current != NULL)
    {
        record* next = current->next;
        delete current;
        current = next;
    }

    this->start = NULL;
}
