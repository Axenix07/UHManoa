package edu.ics211.h06;

public class SortedArrayList implements SortedArrayListInterface {

  String[] data;
  int size;

  public SortedArrayList() {
    data = new String[1];
    size = 0;
  }


  public static void main(String[] args) {
    System.out.print(unitTest());
  }


  public int size() {
    return size;
  }


  public String get(int index) {
    if (index < 0 || index >= size) {
      throw new IndexOutOfBoundsException();
    }

    return data[index];

  }


  public boolean add(String value) {

    if (value == null)
      return false;

    // Check if the value already exists
    if (indexOf(value) != -1)
      return false;

    if (size >= data.length) {
      int newSize = data.length + 3; // Increase by 3
      String[] newArray = new String[newSize];
      System.arraycopy(data, 0, newArray, 0, size);
      data = newArray;
    }

    // Find insertion point using binary search
    int insertIndex = 0;
    while (insertIndex < size && data[insertIndex].compareToIgnoreCase(value) < 0) {
      insertIndex++;
    }

    // Shift elements to the right to make space
    for (int i = size; i > insertIndex; i--) {
      data[i] = data[i - 1];
    }

    // Insert new value
    data[insertIndex] = value;
    size++;
    return true;
  }


  public boolean remove(String value) {
    int index = indexOf(value);
    if (index == -1) {
      return false;
    }
    for (int i = index; i < size - 1; i++) {
      data[i] = data[i + 1];
    }
    data[size - 1] = null;
    size--;
    return true;
  }


  public int indexOf(String value) {
    int left = 0, right = size - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      int comparison = data[mid].compareTo(value);

      if (comparison == 0) {

        return mid;
      }

      if (comparison < 0) {
        left = mid + 1;
      }

      else {
        right = mid - 1;
      }
    }

    return -1;
  }


  public String toString() {
    String listString = "";
    for (int i = 0; i < size; i++) {
      if (i == 0) {
        listString = data[i];
      } else {
        listString = listString + " " + data[i];
      }

    }
    return listString;
  }


  public static boolean unitTest() {
    try {
      SortedArrayList list = new SortedArrayList();
      if (list.size() != 0 || !list.toString().equals(""))
        return false;

      // Test get on empty list
      try {
        list.get(0);
        return false;
      } catch (IndexOutOfBoundsException e) {
      }

      // Test add null, empty string, and non-empty strings
      if (!list.add("a") || list.size() != 1 || !list.toString().equals("a"))
        return false;
      if (!list.add("b") || list.size() != 2 || !list.toString().equals("a b"))
        return false;
      if (!list.add("c") || list.size() != 3 || !list.toString().equals("a b c"))
        return false;

      // Test get with valid and invalid indices
      if (!list.get(0).equals("a") || !list.get(2).equals("c"))
        return false;
      try {
        list.get(-1);
        return false;
      } catch (IndexOutOfBoundsException e) {
      }
      try {
        list.get(3);
        return false;
      } catch (IndexOutOfBoundsException e) {
      }

      // Test indexOf
      if (list.indexOf("b") != 1 || list.indexOf("x") != -1)
        return false;

      // // Test remove
      if (!list.remove("b") || list.size() != 2 || !list.toString().equals("a c"))
        return false;
      if (list.remove("b"))
        return false;
      if (!list.remove("a") || !list.remove("c") || list.size() != 0)
        return false;

      return true;
    } catch (Exception e) {
      System.out.println(e);
      return false;
    }
  }

}
