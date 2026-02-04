#include <stdio.h>
#include <string.h>
#include "record.h"


int addRecord(struct record ** pStart, int accountNumber, char name[], char address[])
{
    extern int debugMode;
    struct record *pTemp;
    int cont;

    cont = 1;

    if (debugMode == 1)
    {
        printf("addRecord\n");
        printf("accountNumber: %d, name: %s, address: %s\n", accountNumber, name, address);
    }

    if (*pStart == NULL)
    {
        pTemp = (struct record *)malloc(sizeof(struct record));
        pTemp->accountno = accountNumber;
        name[24] = '\0';
        strncpy(pTemp->name, name, 25);
        address[44] = '\0';
        strncpy(pTemp->address, address, 45);
        pTemp->next = *pStart;
        *pStart = pTemp;
        cont = 0;
    }
    else
    {
        struct record *pCurrent;
        struct record *pNext;

        pCurrent = *pStart;
        pNext = pCurrent->next;

        while (pTemp->accountno <= accountNumber && cont == 1)
        {
            if (accountNumber == pCurrent->accountno)
            {
                cont = -1;
            }
            else if (pCurrent->next == NULL || pNext->accountno > accountNumber)
            {
                pTemp = malloc(sizeof(struct record));
                pTemp->accountno = accountNumber;
                name[24] = '\0';
                strncpy(pTemp->name, name, 25);
                address[44] = '\0';
                strncpy(pTemp->address, address, 45);
                pCurrent->next = pTemp;
                pTemp->next = pNext;
                cont = 0;
            }
            else
            {
                pTemp = pNext;
                pNext = pCurrent->next;
            }
        }
    }

    return cont;
}

void printAllRecords(struct record * start)
{
    extern int debugMode;
    
    if (debugMode == 1)
    {   
        printf("printAllRecords\n");
    }
    
    struct record *pCurrent;
    
    if (start == NULL)
    {
        printf("The list is empty.");
    }

    pCurrent = start;
    
    while (pCurrent != NULL)
    {   
        printf("Account Number: %d\n", pCurrent->accountno);
        printf("Name: %s\n", pCurrent->name);
        printf("Address: %s\n", pCurrent->address);
        printf("\n");
        
        pCurrent = pCurrent->next;
    }
}

int findRecord(struct record * start, int accountNumber)
{   
    extern int debugMode;
    struct record *pCurrent;
    int result;
    
    if (debugMode == 1)
    {   
        printf("findRecord\n");
        printf("accountNumber: %d\n", accountNumber);
    }
    
    result = -1;
    pCurrent = start;;
    
    while (pCurrent != NULL)
    {   
        if (pCurrent->accountno == accountNumber)
        {   
            printf("Account Number: %d\n", pCurrent->accountno);
            printf("Name: %s\n", pCurrent->name);
            printf("Address: %s\n", pCurrent->address);
            printf("\n");
            result = 1;
            pCurrent = pCurrent->next;
        }
        else
        {   
            pCurrent = pCurrent->next;
        }
    }

    return result;
}

int deleteRecord(struct record ** pStart, int accountNumber)
{
    extern int debugMode;
    struct record *pTemp;
    struct record *pPrev;
    int result;

    if (debugMode == 1)
    {
        printf("deleteRecord\n");
        printf("accountNumber: %d\n", accountNumber);
    }

    result = -1;
    pTemp = NULL;

    if (*pStart != NULL)
    {
        pTemp = *pStart;
        pPrev = NULL;
    }

    while (pTemp != NULL)
    {
        if (pTemp->accountno == accountNumber)
        {
            if (pPrev == NULL)
            {
                *pStart = pTemp->next;
            }
            else
            {
                pPrev->next = pTemp->next;
            }
            free(pTemp);
            pTemp = NULL;
            result = 1;
        }
        else
        {
            pPrev = pTemp;
            pTemp = pTemp->next;
        }
    }

    return result;
}

int writefile(struct record *start, char filename[])
{
    extern int debugMode;
    FILE *file;
    struct record *pCurrent;
    int error;

    if (debugMode == 1)
    {
        printf("writefile\n");
    }

    error = 0;
    pCurrent = start;

    file = fopen(filename, "w");

    if (file == NULL)
    {   
        error = -1;
    }
    
    while(error == 0 && pCurrent != NULL)
    {
        fprintf(file, "%d\n", pCurrent->accountno);
        fprintf(file, "%s\n", pCurrent->name);
        fprintf(file, "%s\n", pCurrent->address);
        fprintf(file, "addDone\n");

        pCurrent = pCurrent->next;
    }

    if (file != NULL)
    {
        fclose(file);
    }

    return error;
}

int readfile(struct record **start, char filename[])
{
    extern int debugMode;
    FILE *file;
    int error;
    int stop;

    if (debugMode == 1)
    {
        printf("readfile\n");
    }

    stop = 0;
    error = 0;

    file = fopen(filename, "r");

    if (file == NULL)
    {
        error = -1;
    }

    while (file != NULL && stop == 0)
    {
        int accountNumber;
        char accountNumberHolder[20];
        char name[25];
        char temp[45];
        char address[45];

        address[0] = '\0';
        temp[0] = '\0';
        name[0] = '\0';
        if (fgets(accountNumberHolder, 20, file) == NULL)
        {
            stop = 1;
        }
        if (stop == 0)
        {
            if (strlen(accountNumberHolder) > 0 && accountNumberHolder[strlen(accountNumberHolder) - 1] == '\n')
            {
                accountNumberHolder[strlen(accountNumberHolder) - 1] = '\0';
            }
            accountNumber = atoi(accountNumberHolder);

            fgets(name, 25, file);
            if (strlen(name) > 0 && name[strlen(name) - 1] == '\n')
            {
                name[strlen(name) - 1] = '\0';
            }

            while (strcmp(temp, "addDone\n") != 0)  
            {
                fgets(temp, 45, file);
                if(strcmp(temp, "addDone\n") != 0)
                {   
                   strcat(address, temp);
                }
            } 
            
            if (strlen(address) > 0 && address[strlen(address) - 1] == '\n')
            {
                address[strlen(address) - 1] = '\0';
            }
 
            addRecord(start, accountNumber, name, address);
        }
    }

    if (file != NULL)
    {
        fclose(file);
    }

    return error;
}
