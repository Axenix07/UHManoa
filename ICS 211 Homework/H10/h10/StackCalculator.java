package edu.ics211.h10;

import java.util.Scanner;
import java.util.Stack;

public class StackCalculator {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Stack<Double> stack = new Stack<>();

    System.out.println("Postfix Calculator");
    System.out.println("Enter numbers or operators (+, -, *, /, %, ^).");
    System.out.println("Enter '=' to quit.");

    while (true) {
      System.out.print(">> ");
      String input = scanner.next().trim();

      if (input.equals("=")) {
        System.out.println("Exiting calculator.");
        break;
      }

      try {
        // Try parsing number
        double number = Double.parseDouble(input);
        stack.push(number);
        System.out.println("Pushed: " + number);
      } catch (NumberFormatException e) {
        // Not a number, check for operator
        if ("+-*/%^".contains(input)) {
          if (stack.size() < 2) {
            System.out.println("Error: Not enough values on the stack.");
            continue;
          }

          double b = stack.pop();
          double a = stack.pop();
          double result = 0.0;

          switch (input) {
            case "+":
              result = a + b;
              break;
            case "-":
              result = a - b;
              break;
            case "*":
              result = a * b;
              break;
            case "/":
              if (b == 0) {
                System.out.println("Error: Division by zero.");
                stack.push(a);
                stack.push(b);
                continue;
              }
              result = a / b;
              break;
            case "%":
              result = a % b;
              break;
            case "^":
              result = Math.pow(a, b);
              break;
          }

          stack.push(result);
          System.out.println("Result: " + result);
        } else {
          System.out.println("Invalid input. Enter a number or valid operator.");
        }
      }
    }

    scanner.close();
  }
}
