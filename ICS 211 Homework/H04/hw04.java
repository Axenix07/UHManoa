/* @author: esb@hawaii.edu, 2023 */
/* @author: Austin Gardner austinwg@hawaii.edu, 2025 */

package edu.ics211.h04;

public class hw04 {

  enum SortType {
    SelectionSort, BubbleSort, InsertionSort, InsertionUnique,
  };

  private static void swap(char[] a, int i1, int i2) {

    char first = a[i1];
    char second = a[i2];
    a[i1] = second;
    a[i2] = first;
  }


  static void selectionSort(char[] a) {
    for (int i = 0; i < a.length - 1; i++) {
      int minIndex = i;
      for (int j = i + 1; j < a.length; j++) {
        if (a[j] < a[minIndex]) {
          minIndex = j;
        }
      }
      swap(a, minIndex, i);
    }

  }


  static void bubbleSort(char[] a) {
    boolean swapped;
    for (int i = 0; i < a.length - 1; i++) {
      swapped = false;
      for (int j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
          swap(a, j, j + 1);
          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }
  }


  static void insertionSort(char[] a) {
    for (int i = 1; i < a.length; i++) {
      char key = a[i];
      int j = i - 1;

      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
      }
      a[j + 1] = key;
    }
  }


  static String insertionUnique(char[] a) {
    char[] temporary = new char[a.length];
    int tempSize = 0;

    for (int i = 1; i < a.length; i++) {

      boolean duplicate = false;

      char value = a[i];

      for (int k = 0; k < tempSize; k++) {
        if (temporary[k] == value) {
          duplicate = true;
          break;
        }
      }

      if (!duplicate) {
        int j = tempSize - 1;

        while (j >= 0 && temporary[j] > value) {

          temporary[j + 1] = temporary[j];
          j--;
        }
        temporary[j + 1] = value;
        tempSize++;
      }

    }

    char[] finished = new char[tempSize];
    System.arraycopy(temporary, 0, finished, 0, tempSize);
    return new String(finished);
  }


  static String sortChars(String s, SortType sort) {
    char[] a = s.toCharArray();
    switch (sort) {
      case SelectionSort:
        selectionSort(a);
        break;
      case BubbleSort:
        bubbleSort(a);
        break;
      case InsertionSort:
        insertionSort(a);
        break;
      case InsertionUnique:
        return insertionUnique(a);
    }
    return new String(a);
  }


  public static void main(String[] a) {
    if ((a == null) || (a.length < 1)) {
      a = new String[1];
      a[0] = "the quick brown foxIZ jumps over the lazy dog";
    }
    for (String s : a) {
      System.out
          .println("'" + s + "' selection sorts to '" + sortChars(s, SortType.SelectionSort) + "'");
      System.out
          .println("'" + s + "'    bubble sorts to '" + sortChars(s, SortType.BubbleSort) + "'");
      System.out
          .println("'" + s + "' insertion sorts to '" + sortChars(s, SortType.InsertionSort) + "'");
      System.out
          .println("'" + s + "' has characters '" + sortChars(s, SortType.InsertionUnique) + "'");
    }
  }
}