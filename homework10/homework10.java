
import java.util.Scanner;

public class homework10 {

    static {
        System.loadLibrary("homework10");
    }

    public native int is_multiple3(int num);

    public static void main(String[] args) {
        homework10 app = new homework10();

        int max = app.user_interface();
        app.print_table(max);
    }

    public int user_interface() {
        Scanner sc = new Scanner(System.in);
        int value;

        System.out.println("*** This program displays numbers and checks if they are multiples of 3 ***\n");

        while (true) {
            System.out.print("Enter maximum number to show: ");

            if (!sc.hasNextInt()) {
                System.out.println("Error: Please enter a valid integer.");
                sc.next();
                continue;
            }

            value = sc.nextInt();

            if (value <= 0) {
                System.out.println("Error: Please enter a positive integer greater than 0.");
                continue;
            }

            return value;
        }
    }

    public void print_table(int max) {
        System.out.println("\n  Number  Multiple of 3?");

        for (int i = 0; i <= max; i++) {
            System.out.printf("%8d   %s%n", i,
                    (is_multiple3(i) == 1) ? "Yes" : "No");
        }
    }
}
