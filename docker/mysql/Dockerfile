FROM mysql:8.0

ENV MYSQL_DATABASE=sample \
  MYSQL_USER=sample \
  MYSQL_PASSWORD=sample \
  MYSQL_ROOT_PASSWORD=root \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
RUN chmod 644 /etc/mysql/conf.d/my.cnf