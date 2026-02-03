package edu.ics211.h02;

/* 
 * compute how much change is due
 * @author  Biagioni, Edoardo
 * @assignment  lecture 2
 * @date  January 16, 2008
 * @bugs  none
 */

import java.util.InputMismatchException;
import java.util.Scanner;
import javax.swing.JOptionPane;

public class ChangeDue {
  /* definition of money available */
  /* first define available bills: */
  final static int bills[] = { 100, 50, 20, 10, 5, 1 };
  final static String billNames[] = { "hundred", "fifty", "twenty", "ten", "five", "single" };
  final static String billPlurals[] =
      { "hundreds", "fifties", "twenties", "tens", "fives", "singles" };

  /* definition of coins available */
  final static int coins[] = { 25, 10, 5, 1 };
  final static String coinNames[] = { "quarter", "dime", "nickel", "penny" };
  final static String coinPlurals[] = { "quarters", "dimes", "nickles", "pennies" };

  /*
   * main method is invoked when the program is started
   *
   * @param arguments command-line arguments, not used
   *
   */
  public static void main(String[] arguments) {
    /* the cashier enters the amount due */
    int due = requestAmount("total charge");
    int paid = requestAmount("dollars paid");
    String dollar = "";
    String change = "";
    dollar = dollar + printDollar("charge", due);
    dollar = dollar + printDollar(", amount paid", paid);
    if (paid < due) { /* make sure the amount is sufficient */
      dollar = dollar + " which is insufficient";
    } else {
      int difference = paid - due;
      dollar = dollar + printDollar(", change is", difference);
      /* print the bills */
      change = change + printChange(difference / 100, bills, billNames, billPlurals);

      difference = difference % 100;
      /* print the coins */
      change = change + printChange(difference, coins, coinNames, coinPlurals);

      /*
       * alternative way of doing almost the same thing if (difference > 100) {
       * System.out.println("$" + (difference / 100) + " in bills"); difference = difference % 100;
       * } if (difference > 25) { System.out.println((difference / 25) + " quarters"); difference =
       * difference % 25; } if (difference > 10) { System.out.println((difference / 10) + " dimes");
       * difference = difference % 10; } if (difference > 5) { System.out.println((difference / 5) +
       * " nickles"); difference = difference % 5; } if (difference > 0) { System.out.println(
       * difference + " pennies"); }
       */
    }
    JOptionPane.showMessageDialog(null, dollar + '\n' + change);
  }


  /*
   * open a dialog window and ask the user for an amount
   *
   * @param question question to ask the user
   * 
   * @return the amount in cents
   *
   * calls System.exit(1) in case of errors
   */
  private static int requestAmount(String question) {
    String amount = JOptionPane.showInputDialog(question);
    Scanner amountScan = new Scanner(amount);
    int cents = 0;
    try {
      double dollars = amountScan.nextFloat();
      cents = ((int) (dollars * 100.0 + 0.005));
      /* these are used in case debugging is needed */
      /* System.out.print("you entered $" + dollars); */
      /* System.out.println(", which is " + cents + " cents"); */
    } catch (InputMismatchException ex) {
      JOptionPane.showMessageDialog(null, "illegal value for dollars due");
      /* exit the program if the value is not a dollar amount */
      System.exit(1);
    } catch (java.lang.RuntimeException ex) {
      /* exit the program in case of other errors as well */
      JOptionPane.showMessageDialog(null, "unexpected exception " + ex);
      System.exit(1);
    }
    return cents;
  }


  /*
   * print a dollar amount
   *
   * @param comment comment to print before the dollar amount
   * 
   * @param cents amount to print in cents
   *
   */
  private static String printDollar(String comment, int cents) {
    String dollar = (comment + " $" + (cents / 100) + ".");
    cents = cents % 100;
    if (cents < 10) {
      dollar = dollar + ("0" + cents);
    } else {
      dollar = dollar + cents;
    }
    return dollar;
  }


  /*
   * print exact coins or bills to give back
   *
   * @param amount amount to return using bills or coins
   * 
   * @param values numeric values for the bills or coins
   * 
   * @param singulars name for one bill or coin in each denomination
   * 
   * @param plurals name for multiple bills or coins in each denomination
   *
   */
  private static String printChange(int amount, int[] values, String[] singulars,
      String[] plurals) {
    String change = "";

    /* sanity check: all arrays should have same size */
    if ((values.length != singulars.length) || (values.length != plurals.length)) {
      JOptionPane.showMessageDialog(null, "wrong number of names");
      System.exit(1);
    }
    /* code only works for positive amounts */
    if (amount <= 0) {
      return change;
    }
    /* now print the actual values */
    for (int i = 0; i < values.length; i++) {
      /* System.out.println("i " + i + ", values [i] " + values [i]); */
      if (amount >= values[i]) {
        if (amount >= values[i] * 2) {
          change = change + ((amount / values[i]) + " " + plurals[i] + ", ");
        } else {
          change = change + ("1 " + singulars[i] + ", ");
        }
        amount = amount % values[i];
      }
    }
    return change;
  }
}
