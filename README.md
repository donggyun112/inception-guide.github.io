# Inception 프로젝트를 위한 학습 로드맵

이 레포지토리는 Inception 프로젝트를 진행하기 위해 필요한 기술과 개념을 학습하고 정리한 자료를 포함하고 있습니다.

## 학습 내용

## URL

[https://donggyun112.github.io/inceotion-guid.github.io/](https://donggyun112.github.io/inception-guide.github.io/)

### Docker
- [Docker 개요](https://www.44bits.io/ko/post/easy-deploy-with-docker#들어가며)
- [Docker Container](./docker-container.html)
- [Docker Compose](https://seosh817.tistory.com/387#google_vignette)
 - [Docker Compose 작성법](https://engineer-mole.tistory.com/223)
 - [Docker Compose 예시](./docker-compose-docs.html)
- [Docker Network](https://www.daleseo.com/docker-networks/)
- [Docker와 가상머신의 차이](./images/image.png)
- [Docker Engine](https://gngsn.tistory.com/128)

### Nginx
- [Nginx 개요](./nginx/nginxguid.html)
- [Web Server](https://blog.naver.com/gi_balja/223028077537)
- [Nginx 설치](./nginx/nginx-install.html)
- [Nginx 설정](./nginx/nginxconf.html)
 - [Nginx.conf와 default.conf의 차이](https://languagefight.tistory.com/175)
 - [Nginx 설정 예시](./nginx/nginxconf-example.html)
- [SSL/TLS 인증서](./nginx/nginx-ssl.html)
- [Nginx foreground](./nginx/nginx-front.html)
- [Nginx Docker](./nginx/nginx-docker.html)

### Wordpress
- [Wordpress 개요](./wordpress/wordpress.html)
- [Wordpress 설치](./wordpress/wordpress-install.html)
- [Wordpress CLI](./wordpress/wordpress-cli.html)
 - [Wordpress CLI 설치](https://make.wordpress.org/cli/handbook/guides/installing/)
 - [Wordpress CLI 사용방법](./wordpress/wordpress-cli-docs.html)
- [Wordpress 설정](./wordpress/wordpress-config.html)
- [PHP-FPM](./wordpress/php.html)
 - [FastCGI](https://nostressdev.tistory.com/10)
 - [PHP foreground](./wordpress/php-front.html)
- [Nginx와 Wordpress 연동](./connect/nginx-wordpress-connect.html)
- [Wordpress Docker](./wordpress/wordpress-docker.html)

### MariaDB
- [MariaDB 개요](./mariadb/mariadb.html)
- [Database](https://www.icia.co.kr/community/board/view/2/2/64)
- [MariaDB 설정](./mariadb/mariadb-conf.html)
- [SQL 명령어](./mariadb/mariadb-cmd.html)
- [MariaDB foreground](./mariadb/mariadb-front.html)
- [MariaDB Docker](./mariadb/mariadb-docker.html)
- [MariaDB와 Wordpress 연동](./connect/mariadb-wordpress-connect.html)
- [MariaDB Volumn](./mariadb/mariadb-volumn.html)

## 프로젝트 관계도
- [Inception 개요](./inception.html)
- [Inception 관계도](./images/example_diagram.png)

## 학습 방법
1. Docker부터 시작하여 컨테이너와 이미지, 네트워크 등의 기본 개념을 이해합니다.
2. Nginx의 동작 원리와 설정 방법을 학습하고, SSL/TLS 인증서 적용 방법을 익힙니다.
3. Wordpress의 설치와 설정, CLI 사용 방법을 학습합니다.
4. PHP-FPM과 FastCGI에 대해 이해하고, Nginx와 Wordpress를 연동하는 방법을 익힙니다.
5. MariaDB의 개념과 설정, SQL 명령어 사용 방법을 학습합니다.
6. 각 기술을 Docker로 구축하고 연동하는 과정을 실습합니다.

## 기여
이 레포지토리에 기여하고 싶다면 Pull Request를 보내주세요. 학습 자료 추가, 오타 수정, 내용 보완 등 다양한 기여를 환영합니다.

