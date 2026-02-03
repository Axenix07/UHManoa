package edu.ics211.h09;

public class LinkedListRecursive<E> {

  private static class LinkedNode<T> {
    private T item;
    private LinkedNode<T> next;

    private LinkedNode(T value) {
      item = value;
      next = null;
    }


    private LinkedNode(T value, LinkedNode<T> reference) {
      item = value;
      next = reference;
    }
  }

  protected LinkedNode<E> head;

  public LinkedListRecursive() {
    head = null;
  }


  public int size() {
    return sizeRecursive(head);
  }


  private int sizeRecursive(LinkedNode<E> node) {
    if (node == null)
      return 0;
    return 1 + sizeRecursive(node.next);
  }


  public boolean add(E value) {
    head = addRecursive(head, value);
    return true;
  }


  private LinkedNode<E> addRecursive(LinkedNode<E> node, E value) {
    if (node == null)
      return new LinkedNode<>(value);
    node.next = addRecursive(node.next, value);
    return node;
  }


  public void add(int index, E value) {
    if (index < 0)
      throw new IndexOutOfBoundsException();
    head = addRecursive(head, index, value);
  }


  private LinkedNode<E> addRecursive(LinkedNode<E> node, int index, E value) {
    if (index == 0)
      return new LinkedNode<>(value, node);
    if (node == null)
      throw new IndexOutOfBoundsException();
    node.next = addRecursive(node.next, index - 1, value);
    return node;
  }


  public E remove(int index) {
    if (index < 0 || head == null)
      throw new IndexOutOfBoundsException();
    RemovedNode<E> removed = removeRecursive(head, index);
    head = removed.node;
    return removed.value;
  }


  private RemovedNode<E> removeRecursive(LinkedNode<E> node, int index) {
    if (index == 0)
      return new RemovedNode<>(node.next, node.item);
    if (node == null)
      throw new IndexOutOfBoundsException();
    RemovedNode<E> removed = removeRecursive(node.next, index - 1);
    node.next = removed.node;
    return removed;
  }

  private static class RemovedNode<T> {
    LinkedNode<T> node;
    T value;

    RemovedNode(LinkedNode<T> node, T value) {
      this.node = node;
      this.value = value;
    }
  }

  public String toString() {
    return toStringRecursive(head);
  }


  private String toStringRecursive(LinkedNode<E> node) {
    if (node == null)
      return "";
    if (node.next == null)
      return node.item.toString();
    return node.item + " ==> " + toStringRecursive(node.next);
  }


  public int numMatches(E value) {
    return numMatchesRecursive(head, value);
  }


  private int numMatchesRecursive(LinkedNode<E> node, E value) {
    if (node == null)
      return 0;
    return (node.item.equals(value) ? 1 : 0) + numMatchesRecursive(node.next, value);
  }


  public E lastGreater(Comparable<E> value) {
    return lastGreaterRecursive(head, value, null);
  }


  private E lastGreaterRecursive(LinkedNode<E> node, Comparable<E> value, E lastFound) {
    if (node == null)
      return lastFound;
    if (value.compareTo(node.item) < 0)
      lastFound = node.item;
    return lastGreaterRecursive(node.next, value, lastFound);
  }


  public E firstGreater(Comparable<E> value) {
    return firstGreaterRecursive(head, value);
  }


  private E firstGreaterRecursive(LinkedNode<E> node, Comparable<E> value) {
    if (node == null)
      return null;
    if (value.compareTo(node.item) < 0)
      return node.item;
    return firstGreaterRecursive(node.next, value);
  }


  public E[] toEvenArray() {
    int size = size();
    @SuppressWarnings("unchecked")
    E[] result = (E[]) new Object[(size + 1) / 2];
    fillEvenArray(head, result, 0, 0);
    return result;
  }


  private void fillEvenArray(LinkedNode<E> node, E[] array, int index, int arrayIndex) {
    if (node == null)
      return;
    if (index % 2 == 0)
      array[arrayIndex++] = node.item;
    fillEvenArray(node.next, array, index + 1, arrayIndex);
  }
}