package edu.ics211.h05;

public class HW05 {

  public static void main(String[] args) {

    for (String ternaryNumber : firstTernaryNumbers(31)) {
      System.out.println(ternaryNumber);
    }

    String[] hexNumbers = firstHexNumbers(525);
    for (int i = 500; i < hexNumbers.length; i++) {
      System.out.println(hexNumbers[i]);
    }

    for (int i = 0; i < 12; i++) {
      // long start = System.currentTimeMillis();
      // fib3(i);
      // long finish = System.currentTimeMillis();
      // System.out.println("Time Taken for " + i + ":" + (finish - start));
      System.out.println(fib3(i));

    }

    for (int i = 0; i < 12; i++) {
      // long start = System.nanoTime();
      // fib3WithHelper(i);
      // long finish = System.nanoTime();
      // System.out.println("Time Taken for " + i + ":" + (finish - start));
      System.out.println(fib3WithHelper(i));

    }

    for (int i = 0; i < 12; i++) {
      // long start = System.nanoTime();// System.currentTimeMillis();
      // fib3Iterative(i);
      // long finish = System.nanoTime();
      // System.out.println("Time Taken for " + i + ":" + (finish - start));

      System.out.println(fib3Iterative(i));

    }

  }


  static String intToString(int toPrint, int base) {
    String digits = "0123456789ABCDEF";
    if (toPrint < base) {
      return "" + digits.charAt(toPrint);
    } else {
      return intToString(toPrint / base, base) + digits.charAt(toPrint % base);
    }
  }


  public static String[] firstTernaryNumbers(int n) {

    String[] ternaryNumbers = new String[n];

    for (int i = 0; i < n; i++) {
      ternaryNumbers[i] = intToString(i, 3);
    }

    return ternaryNumbers;

  }


  public static String[] firstHexNumbers(int n) {
    String[] hexNumbers = new String[n];

    for (int i = 0; i < n; i++) {
      hexNumbers[i] = intToString(i, 16);
    }

    return hexNumbers;
  }


  public static int fib3(int n) {
    if (n < 3) {
      return 1;
    }
    return fib3(n - 1) + fib3(n - 2) + fib3(n - 3);
  }


  public static int fib3Helper(int first, int second, int third, int n) {
    if (n == 0) {
      return first + second + third;
    }

    return fib3Helper(second, third, first + second + third, n - 1);
  }


  public static int fib3WithHelper(int n) {
    if (n < 3) {
      return 1;
    }
    return fib3Helper(1, 1, 1, n - 3);
  }


  public static int fib3Iterative(int n) {
    int first = 1;
    int second = 1;
    int third = 1;

    while (n >= 3) {
      int fourth = first + second + third;
      first = second;
      second = third;
      third = fourth;

      n--;
    }
    return third;
  }

}
