package edu.ics211.h08;

import java.util.List;

class HW8Test {
  public static void main(String[] args) {
    List<Integer> testList = List.of(1, 2, 3, 4, 5);
    HW8Iterator<Integer> iterator = new HW8Iterator<>(testList);

    System.out.println("Testing next() and hasNext():");
    while (iterator.hasNext()) {
      System.out.println("Next element: " + iterator.next());
    }

    System.out.println("Testing previous() and hasPrevious():");
    while (iterator.hasPrevious()) {
      System.out.println("Previous element: " + iterator.previous());
    }

    System.out.println("Testing nextIndex() and previousIndex():");
    System.out.println("Next index: " + iterator.nextIndex());
    System.out.println("Previous index: " + iterator.previousIndex());
  }
}
