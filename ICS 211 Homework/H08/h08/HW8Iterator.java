package edu.ics211.h08;

import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

public class HW8Iterator<T> implements Iterator<T> {
  private final List<T> list;
  private int cursor;

  public HW8Iterator(List<T> list) {
    this.list = list;
    this.cursor = 0;
  }


  public boolean hasNext() {
    return cursor < list.size();
  }


  public T next() {
    if (!hasNext()) {
      throw new NoSuchElementException();
    }
    return list.get(cursor++);
  }


  public boolean hasPrevious() {
    return cursor > 0;
  }


  public T previous() {
    if (!hasPrevious()) {
      throw new NoSuchElementException();
    }
    return list.get(--cursor);
  }


  public int nextIndex() {
    return cursor;
  }


  public int previousIndex() {
    return cursor - 1;
  }
}
