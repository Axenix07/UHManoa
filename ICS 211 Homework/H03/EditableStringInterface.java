package edu.ics211.h03;

/**
 * Represents an EditableStringInterface
 * 
 * @author Austin Gardner
 * 
 * Used Chatgpt and Stack Overflow for help.
 */
public interface EditableStringInterface {

  int length();


  void insert(char value, int index);


  void delete(int index);

}
