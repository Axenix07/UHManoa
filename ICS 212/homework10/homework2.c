

#include <stdio.h>
#include <ctype.h>

int user_interface(void);
int is_multiple3(int n);
void print_table(int max);

int main(void)
{
    int max;

    max = user_interface();

    print_table(max);

    return 0;
}


int user_interface(void)
{
    int value;
    char extra;

    printf("*** This program displays numbers and checks if they are multiples of 3 ***\n\n");

    while (1)
    {
        printf("Enter maximum number to show: ");

        if (scanf("%d%c", &value, &extra) != 2 || extra != '\n')
        {
            printf("Error: Please enter a valid integer.\n");

            while (getchar() != '\n');
            continue;
        }

        if (value <= 0)
        {
            printf("Error: Please enter a positive integer greater than 0.\n");
            continue;
        }

        return value;
    }
}


int is_multiple3(int n)
{
    return (n % 3 == 0);
}


void print_table(int max)
{
    int i;

    printf("\n  Number  Multiple of 3?\n");

    for (i = 0; i <= max; i++)
    {
        printf("%8d   %s\n", i, is_multiple3(i) ? "Yes" : "No");
    }
}
