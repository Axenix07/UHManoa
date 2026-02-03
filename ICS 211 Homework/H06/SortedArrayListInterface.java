package edu.ics211.h06;

public interface SortedArrayListInterface {
  // List methods that are useful for a sorted array list
  int size();


  // if the index is not valid, get throws java.lang.IndexOutOfBoundsException
  String get(int index);


  // return true if the value has been added, false if it was already present
  boolean add(String value);


  // return true if the value has been removed, false if it was not present
  boolean remove(String value);


  // return the index at which the string can be found, or -1 if not found
  // since the array is sorted, indexOf uses binary search
  int indexOf(String value);


  // return the contents with blanks (" ") in-between
  String toString();
}
