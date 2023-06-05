import Code from '../../../../components/modules/code';
import { PageTitle } from '../../../../components/modules/page-title';

export const JavaSelectData2 = () => {
  return (
    <>
      <PageTitle title="Select dữ liệu 2"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Cấu trúc project</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require('../../../../resources/img/programming/java/21.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. pom.xml</b>
          <div className="tab-1">
            <Code
              code={`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.5.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.connecth2</groupId>
	<artifactId>connectH2Database</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>connectH2Database</name>
	<description>Demo connectH2Database</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<!-- https://mvnrepository.com/artifact/org.modelmapper/modelmapper -->
		<dependency>
		    <groupId>org.modelmapper</groupId>
		    <artifactId>modelmapper</artifactId>
	     	<version>2.3.8</version>
		</dependency>
				
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.junit.vintage</groupId>
					<artifactId>junit-vintage-engine</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>`}
              language="xml"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. application.properties</b>
          <div className="tab-1">
            <Code
              code={`server.port=9090
# H2
spring.h2.console.enabled=true
# Datasource
spring.datasource.url=jdbc:h2:tcp://localhost/~/dbh2/db_connect;DB_CLOSE_ON_EXIT=FALSE;AUTO_SERVER=TRUE
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. data.sql</b>
          <div className="tab-1">
            <Code
              code={`CREATE TABLE IF NOT EXISTS TBL_BOOK(
   id serial PRIMARY KEY,
   title varchar(100) NOT NULL,
   isbn varchar(100) NOT NULL,
   publisher varchar(100) NOT NULL
);

DELETE FROM TBL_BOOK;

INSERT INTO TBL_BOOK (id, title, isbn, publisher) VALUES
  (1, 'title_1', 'isbn_1', 'publisher_1'),
  (2, 'title_2', 'isbn_2', 'publisher_2'),
  (3, 'title_3', 'isbn_3', 'publisher_3');`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>5. Book.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TBL_BOOK", uniqueConstraints = { @UniqueConstraint(columnNames = "id") })
@Entity(name = "Book")
public class Book implements Serializable {

	private static final long serialVersionUID = -6524706148334831354L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;

	@Column(name = "title", unique = false, nullable = false, length = 100)
	private String title;

	@Column(name = "isbn", unique = false, nullable = false, length = 100)
	private String isbn;

	@Column(name = "publisher", unique = false, nullable = false, length = 100)
	private String publisher;
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. ApiResponse.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.dto;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("rawtypes")
public class ApiResponse<T> extends ResponseEntity {

	public ApiResponse(HttpStatus status) {
		this(ApiBody.builder().code(status.value()).status(status.name()).build(), null, status);
	}

	public ApiResponse(T body, HttpStatus status) {
		this(ApiBody.builder().code(status.value()).status(status.name()).data(body).build(), null, status);
	}

	public ApiResponse(MultiValueMap headers, HttpStatus status) {
		this(ApiBody.builder().code(status.value()).build(), headers, status);
	}

	public ApiResponse(T body, MultiValueMap headers, HttpStatus status) {
		this(ApiBody.builder().code(status.value()).status(status.name()).data(body).build(), headers, status);
	}

	@SuppressWarnings("unchecked")
	public ApiResponse(ApiBody body, MultiValueMap headers, HttpStatus status) {
		super(body, headers, status);
	}

	@Override
	public HttpStatus getStatusCode() {
		return super.getStatusCode();
	}

	@Override
	public int getStatusCodeValue() {
		return super.getStatusCodeValue();
	}

	@SuppressWarnings("unchecked")
	public static <T> ApiResponse<T> response(T body, HttpStatus status) {
		return new ApiResponse(body, status);
	}

	public static <T> ApiResponse<T> okStatus(T body) {
		return new ApiResponse<T>(body, HttpStatus.OK);
	}

	@Getter
	@Setter
	@Builder
	public static class ApiBody<T> {
		int code;
		String status;
		T data;
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>7. BookDto.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class BookDto implements Serializable{

	private static final long serialVersionUID = -8084552078517432344L;
	
	private Long id;
	
	private String title;
	
	private String isbn;
	
	private String publisher;
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>8. IBookRepository.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.connect.h2.database.entity.Book;

public interface IBookRepository extends JpaRepository<Book, Long>{

}
Java
`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>9. BookService.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.connect.h2.database.dto.BookDto;
import com.learning.connect.h2.database.entity.Book;
import com.learning.connect.h2.database.repository.IBookRepository;

@Service
public class BookService {

	@Autowired
	private IBookRepository iBookRepository;

	private ModelMapper modelMapper = new ModelMapper();

	public List<BookDto> getAll() {
		List<BookDto> result = new ArrayList<BookDto>();
		List<Book> list = iBookRepository.findAll();
		for (Book book : list) {
			result.add(modelMapper.map(book, BookDto.class));
		}
		return result;
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>10. BookController.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.connect.h2.database.dto.ApiResponse;
import com.learning.connect.h2.database.dto.BookDto;
import com.learning.connect.h2.database.services.BookService;

@RestController
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/api/v1/user/book/getall")
	public ApiResponse<List<BookDto>> getAll(){
		List<BookDto> list = null;
		try {
			list = bookService.getAll();
		} catch (Exception e) {
			return new ApiResponse<List<BookDto>>(list, HttpStatus.EXPECTATION_FAILED);
		}
		return new ApiResponse<List<BookDto>>(list, HttpStatus.OK);
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>11. ConnectH2DatabaseApplication.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learning.connect.h2.database;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ConnectH2DatabaseApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConnectH2DatabaseApplication.class, args);
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>12. Kết quả khi chạy chương trình</b>
          <div className="tab-1">
            <i>H2 database console</i>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('../../../../resources/img/programming/java/22.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('../../../../resources/img/programming/java/23.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <i>http://localhost:9090/api/v1/user/book/getAll</i>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('../../../../resources/img/programming/java/24.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
