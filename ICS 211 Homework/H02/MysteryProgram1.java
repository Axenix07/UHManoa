package edu.ics211.h02;

/* 
 * Mystery program
 * @author  Biagioni, Edoardo
 * @assignment  lecture 3
 * @date  January 16, 2008
 * @bugs  none
 */

public class MysteryProgram1 {
  public static void main(String[] arguments) {
    if (arguments.length == 0) {
      System.out.println("expecting a command-line argument, got " + arguments.length);
      System.exit(1);
    }

    for (int j = 0; j < arguments.length; j++) {
      int result = 0;
      for (int i = 0; i < arguments[j].length(); i++) {
        result *= 10;
        result += Character.digit(arguments[j].charAt(i), 10);
      }
      System.out.println("result is " + result);
    }
  }
}
