package edu.ics211.h03;

/**
 * Represents a IllegalIndexInEditableString, an exception with both a base constructor and a
 * constructor with a string message. Used Chatgpt and Stack Overflow for help.
 * 
 * @author Austin Gardner
 *
 */
public class IllegalIndexInEditableString extends RuntimeException {

  public IllegalIndexInEditableString() {
    super();
  }


  public IllegalIndexInEditableString(String message) {
    super(message);
  }
}
