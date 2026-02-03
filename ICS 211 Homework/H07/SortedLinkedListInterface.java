package edu.ics211.h07;

public interface SortedLinkedListInterface<T extends java.lang.Comparable<T>> {
  // List methods that are useful for a sorted linked list
  int size();


  // if the index is not valid, get throws java.lang.IndexOutOfBoundsException
  T get(int index);


  // return true if the value has been added, false for null or already present
  boolean add(T value);


  // return true if the value has been removed, false if it was not present
  boolean remove(T value);


  // return the index at which the string can be found, or -1 if not found
  // even though the linked list is sorted, indexOf must use linear search
  int indexOf(T value);


  // return the contents with blanks (" ") in-between
  String toString();
}