import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const JavaSelectData1 = () => {
  return (
    <>
      <PageTitle title="Delete dữ liệu"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.Select dữ liệu</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require("../../../../resources/img/programming/java/11.jpg")}
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
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.3.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.learnspring</groupId>
	<artifactId>springwebapp</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>springwebapp</name>
	<description>Demo project for Spring Boot</description>

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
spring.datasource.url=jdbc:h2:~/databaseH2/springwebapp;DB_CLOSE_ON_EXIT=FALSE
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
              code={`DELETE FROM TBL_BOOK;

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
              code={`package com.learnspring.springwebapp.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity(name = "Book")
@Table(name = "TBL_BOOK", uniqueConstraints = { @UniqueConstraint(columnNames = "id") })
public class Book implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -729223492129688521L;
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

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "book_author", joinColumns = { @JoinColumn(referencedColumnName = "id") }, inverseJoinColumns = {
			@JoinColumn(referencedColumnName = "id") })
	private Set<Author> authors = new HashSet<>();

	public Book() {
		super();
	}

	public Book(String title, String isbn, String publisher) {
		super();
		this.title = title;
		this.isbn = isbn;
		this.publisher = publisher;
	}

	public Book(String title, String isbn, String publisher, Set<Author> authors) {
		super();
		this.title = title;
		this.isbn = isbn;
		this.publisher = publisher;
		this.authors = authors;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public Set<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(Set<Author> authors) {
		this.authors = authors;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((authors == null) ? 0 : authors.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (authors == null) {
			if (other.authors != null)
				return false;
		} else if (!authors.equals(other.authors))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", isbn=" + isbn + ", publisher=" + publisher + ", authors="
				+ authors + "]";
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Author.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity(name = "Author")
@Table(name = "TBL_AUTHOR", uniqueConstraints = { @UniqueConstraint(columnNames = "id") })
public class Author implements Serializable {
	private static final long serialVersionUID = -2686226233062058486L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	@Column(name = "firstName", unique = false, nullable = false, length = 100)
	private String firstName;
	
	@Column(name = "lastName", unique = false, nullable = false, length = 100)
	private String lastName;

	@ManyToMany(mappedBy = "authors")
	private Set<Book> books = new HashSet<>();

	public Author() {
	}

	public Author(String firstName, String lastName) {
		super();
		this.setFirstName(firstName);
		this.setLastName(lastName);
	}

	public String getFirstName() {
		return firstName;
	}

	public Author(String firstName, String lastName, Set<Book> books) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.books = books;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Set<Book> getBooks() {
		return books;
	}

	public void setBooks(Set<Book> books) {
		this.books = books;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Author other = (Author) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Author [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", books=" + books + "]";
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>7. BookDao.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp.dao;

import java.util.List;

import com.learnspring.springwebapp.entity.Book;

public interface BookDao {
	List<Book> getListBookDao();
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>8. BookDaoImpl.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.learnspring.springwebapp.dao.BookDao;
import com.learnspring.springwebapp.entity.Book;

@Repository
public class BookDaoImpl implements BookDao {

	@PersistenceContext
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Book> getListBookDao() {
		Query query = entityManager.createQuery("SELECT b FROM Book b");
		return query.getResultList();
	}
}`}
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
              code={`package com.learnspring.springwebapp.service;

import java.util.List;

import com.learnspring.springwebapp.entity.Book;

public interface BookService {
	List<Book> getListBook();
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>10. BookServiceImpl.javact</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learnspring.springwebapp.dao.BookDao;
import com.learnspring.springwebapp.entity.Book;
import com.learnspring.springwebapp.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookDao bookDao;

	@Override
	public List<Book> getListBook() {
		return bookDao.getListBookDao();
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>11. BookController.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.learnspring.springwebapp.entity.Book;
import com.learnspring.springwebapp.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@RequestMapping(value = "/listbook", method = RequestMethod.GET)
	public ResponseEntity<List<Book>> listBook(){
		List<Book> listBook = bookService.getListBook();
		return new ResponseEntity<List<Book>>(listBook, HttpStatus.OK);
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>12. SpringwebappApplication.java</b>
          <div className="tab-1">
            <Code
              code={`package com.learnspring.springwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringwebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringwebappApplication.class, args);
	}
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>13. Kết quả khi chạy chương trình</b>
          <div className="tab-1"><i>H2 database console</i></div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require("../../../../resources/img/programming/java/12.jpg")}
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
              src={require("../../../../resources/img/programming/java/13.jpg")}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1"><i>http://localhost:9090/listbook</i></div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require("../../../../resources/img/programming/java/14.jpg")}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
