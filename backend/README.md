# Getting Started

### API

#### Startup commands

To build the application, use: `./gradlew build` in the `./backend` directory. This will run the test suit and build the application as well as create the JAR file necessary for containerizing the application.

To start the application use : `./gradlew bootRun` in the backend directory. This starts an Apache Tomcat server on port `8080`.

To view a list of tasks that, run `./gradlew tasks`.

#### Health check

To see if the api is healthy, navigate to `http://localhost:8080/actuator/health`. If you see a `{status: UP}`, then the API as weel as all the services are running properly.

#### Documentation

API documentation can be found at `http://localhost:8080/docs/swagger.html`. This is a web page that displays all possible routes and allows to test requests.

### Reference Documentation

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.7.0-M1/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.7.0-M1/gradle-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.6.3/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.6.3/reference/htmlsingle/#using-boot-devtools)

### Guides

The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)

### Additional Links

These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

