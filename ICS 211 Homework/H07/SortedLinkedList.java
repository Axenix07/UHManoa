package edu.ics211.h07;

class SortedLinkedList<T extends Comparable<T>> implements SortedLinkedListInterface<T> {
  private class LinkedNode {
    T item;
    LinkedNode next;

    LinkedNode(T item) {
      this.item = item;
      this.next = null;
    }
  }

  private LinkedNode head;
  private int size;

  public SortedLinkedList() {
    head = null;
    size = 0;
  }


  public int size() {
    return size;
  }


  public T get(int index) {
    if (index < 0 || index >= size) {
      throw new IndexOutOfBoundsException();
    }
    LinkedNode current = head;
    for (int i = 0; i < index; i++) {
      current = current.next;
    }
    return current.item;
  }


  public boolean add(T value) {
    if (value == null)
      return false;
    LinkedNode newNode = new LinkedNode(value);
    if (head == null || value.compareTo(head.item) < 0) {
      newNode.next = head;
      head = newNode;
      size++;
      return true;
    }
    LinkedNode current = head;
    while (current.next != null && value.compareTo(current.next.item) > 0) {
      current = current.next;
    }
    if (current.next != null && value.compareTo(current.next.item) == 0) {
      return false;
    }
    newNode.next = current.next;
    current.next = newNode;
    size++;
    return true;
  }


  public boolean remove(T value) {
    if (head == null || value == null)
      return false;
    if (head.item.equals(value)) {
      head = head.next;
      size--;
      return true;
    }
    LinkedNode current = head;
    while (current.next != null && !current.next.item.equals(value)) {
      if (value.compareTo(current.next.item) < 0)
        return false;
      current = current.next;
    }
    if (current.next == null)
      return false;
    current.next = current.next.next;
    size--;
    return true;
  }


  public int indexOf(T value) {
    if (head == null || value == null)
      return -1;
    LinkedNode current = head;
    int index = 0;
    while (current != null) {
      if (value.compareTo(current.item) < 0)
        return -1;
      if (current.item.equals(value))
        return index;
      current = current.next;
      index++;
    }
    return -1;
  }


  public String toString() {
    StringBuilder sb = new StringBuilder();
    LinkedNode current = head;
    while (current != null) {
      sb.append(current.item);
      if (current.next != null)
        sb.append(" ");
      current = current.next;
    }
    return sb.toString();
  }


  public boolean unitTest() {
    SortedLinkedList<Integer> intList = new SortedLinkedList<>();
    SortedLinkedList<String> strList = new SortedLinkedList<>();

    if (intList.size() != 0)
      return false;
    if (!intList.add(3) || !intList.add(1) || !intList.add(2))
      return false;
    if (!intList.toString().equals("1 2 3"))
      return false;
    if (intList.indexOf(2) != 1 || intList.indexOf(4) != -1)
      return false;
    if (!intList.remove(2) || intList.remove(4))
      return false;
    if (!intList.toString().equals("1 3"))
      return false;

    if (!strList.add("b") || !strList.add("a") || !strList.add("c"))
      return false;
    if (!strList.toString().equals("a b c"))
      return false;
    if (strList.indexOf("b") != 1 || strList.indexOf("d") != -1)
      return false;
    if (!strList.remove("b") || strList.remove("d"))
      return false;
    if (!strList.toString().equals("a c"))
      return false;

    return true;
  }
}
