package edu.ics211.h03;

/**
 * Represents an EditableString that can insert and delete characters from a string.
 * 
 * @author Austin Gardner
 * 
 * Used Chatgpt and Stack Overflow for help.
 */
public class EditableString extends HW3String implements EditableStringInterface {

  public EditableString(String value) {
    super(value);
  }


  public void insert(char value, int index) {
    if (index < 0 || index >= this.length) {
      throw new IllegalIndexInEditableString("Index does not exist.");
    }

    char[] newArray = new char[data.length + 1];
    System.arraycopy(data, 0, newArray, 0, index);
    newArray[index] = value;
    System.arraycopy(data, index, newArray, index + 1, data.length - index);
    data = newArray;
  }


  public void delete(int index) {
    if (index < 0 || index >= this.length) {
      throw new IllegalIndexInEditableString("Index does not exist.");
    }

    char[] newArray = new char[data.length - 1];
    System.arraycopy(data, 0, newArray, 0, index);
    System.arraycopy(data, index + 1, newArray, index, data.length - index - 1);
    data = newArray;
  }


  public static void main(String[] args) {
    EditableString s = new EditableString("Moana");
    s.delete(1);
    System.out.println("After delete: " + s);
  }

}
