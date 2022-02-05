FROM openjdk:17

RUN groupadd hiccup && adduser -g hiccup hiccup

USER hiccup:hiccup

ARG DEPENDENCY=target/dependency

COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java","-cp","app:app/lib/*","com.cyclee.app.CycleeAppApplication"]