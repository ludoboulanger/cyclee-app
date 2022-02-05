package com.cyclee.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CycleeApiApplication {

  public void test(int a, int b) {
    if (a == b) {
      System.out.println("True");
    } else {
      System.out.println("False");
    }

  }

  public static void main(String[] args) {
    SpringApplication.run(CycleeApiApplication.class, args);
  }

}
