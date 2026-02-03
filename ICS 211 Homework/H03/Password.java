package edu.ics211.h03;

import java.util.Arrays;

/**
 * Represents a Password String. Requires a lower case letter, an upper case letter, a digit, and a
 * minimum of 8 characters. Includes a method to check if two passwords are equal to each other.
 * 
 * @author Austin Gardner Used Chatgpt and Stack Overflow for help.
 *
 */
public class Password extends EditableString {

  public Password(String value) {
    super(value);
    boolean lowerCase = false;
    boolean upperCase = false;
    boolean digit = false;

    if (value.length() < 8) {
      throw new IllegalArgumentException();
    }

    for (int i = 0; i < value.length(); i++) {
      if (Character.isLowerCase(value.charAt(i))) {
        lowerCase = true;
      }
      if (Character.isUpperCase(value.charAt(i))) {
        upperCase = true;
      }
      if (Character.isDigit(value.charAt(i))) {
        digit = true;
      }
    }

    if (!upperCase || !lowerCase || !digit) {
      throw new IllegalArgumentException();
    }
  }


  public static void main(String[] args) {
    Password p = new Password("Xy3abcdef");
    Password p2 = new Password("Xy3abcdef2");
    EditableStringInterface esi = new Password("Xy3abcdef");
    EditableString es = new Password("Xy3abcdef");
    System.out.println("p is " + p);
    System.out.println("p2 is " + p2);
    System.out.println("esi is " + esi);
    System.out.println("es is " + es);
    if (p.equals(p2)) {
      System.out.println("p is equal to p2");
    } else {
      System.out.println("p is not equal to p2");
    }
    if (p2.equals(esi)) {
      System.out.println("p2 is equal to esi");
    } else {
      System.out.println("p2 is not equal to esi");
    }
    if (esi.equals(es)) {
      System.out.println("esi is equal to es");
    } else {
      System.out.println("esi is not equal to es");
    }
    if (es.equals(p)) {
      System.out.println("es is equal to p");
    } else {
      System.out.println("es is not equal to p");
    }
    try {
      Password p3 = new Password("helloworld");
      System.out.println("error: all lower case password created, " + p3);
    } catch (IllegalArgumentException e) {
      System.out.println("correct: all lower case password is not valid");
    }
  }


  public String toString() {
    String output = "";
    for (int i = 0; i < this.data.length; i++) {
      output = output + "*";
    }
    return output;
  }


  public boolean equals(Object otherPassword) {
    try {
      Password op = (Password) otherPassword;
      return Arrays.equals(this.data, op.data);
      // missing part, to be filled out by the student -- must return true if 'op' has the same
      // characters as 'this'
    } catch (ClassCastException ex) {
      System.out.println("caught " + ex);
    }
    return false;
  }

}
