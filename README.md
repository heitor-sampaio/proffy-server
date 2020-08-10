![](/src/assets/images/banner.png)
<p align="center">
<img src="https://img.shields.io/static/v1?label=Typescript&message=language&color=blue&style=flat&logo=TYPESCRIPT"/>   <img src="https://img.shields.io/static/v1?label=NodeJs&message=framework&color=blue&style=flat&logo=NODE.JS"/>   <img src="https://img.shields.io/badge/version-1.0-brightgreen"/>    <img src="https://img.shields.io/github/license/heitor-sampaio/proffy-web"/>    <img src="https://img.shields.io/github/issues/heitor-sampaio/proffy-web"/>
</p>

**<p align="center">This application is the result of [Rocketseat](https://rocketseat.com.br) [Next Level Week 2](https://nextlevelweek.com/) and will be improved by me for training purposes.</p>**

<br/>

## Sumary
- [Sumary](#sumary)
- [Description](#description)
- [**Technologies**](#technologies)
- [**How to run it**](#how-to-run-it)
  - [**Dependencies**](#dependencies)
  - [**Running locally**](#running-locally)
  - [**Routes**](#routes)
    - [**GET /classes**](#get-classes)
    - [**POST /classes**](#post-classes)
    - [**GET /connections**](#get-connections)
    - [**POST /connections**](#post-connections)
- [To be implemented](#to-be-implemented)
- [Help](#help)
<br/>

## Description
This project is the result of a intense week of learning and coding.

As a student in Rocketseat Bootcamp, I decided to take a break on the main course and focus in the NWL2, to build a basic fully functional fullstack project in one week.

This project, named Proffy, is a platform to connect students and teachers for private lessons in brazilian high school subjects.

"Proffy" is nickname to "Professor", wich is a brazilian word for teacher.

Built with Typescript and NodeJs, this module is an API to serve data to web and mobile proffy's applications in JSON format.

This API uses SQLite database.

On it's current state, you can:
- Create new lessons as a teacher
- Select a subject, day and time to list all available teachers
<br/>

## **Technologies**
The main technologies used in this project are in the list below:

- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org)
- [SQLite](https://www.sqlite.org/index.html)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
<br/>

## **How to run it**

### **Dependencies**
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### **Running locally**
1. Clone the project:

```git clone https://github.com/heitor-sampaio/proffy-server```

2. Go to project folder

```cd proffy-server```

3. Install all dependencies

```yarn install```

4. Create a local database

```yarn knex:migrate```

5. Run server

```yarn start```

<br/>

**This module will run on localhost port 3333**

### **Routes**
#### **GET /classes**
Returns an array with JSON objects with all available teachers for given parameters.<br/>
This route acepts the following query parameters:
- subject: a string with the name of the subject
- week_day: a number thats represents the week day, starts on 0 for Sunday and goes to 6 to Saturday
- time: a string in hh:mm format. Ex: 09:00

Request example:
```htts://localhost:3333/classes?subject=fisica?week_day=1?time=09:00```

Response example:
```
[
  {
    "id": 3,
    "subject": "Fisica",
    "cost": 150,
    "user_id": 3,
    "name": "Heitor Sampaio",
    "avatar": "https://scontent.ffln2-1.fna.fbcdn.net/v/t1.0-9/13339712_1037146529655932_9194459747613172219_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=gqZB9wTAEqIAX9kykJb&_nc_ht=scontent.ffln2-1.fna&oh=1400bbcf23fc2447b764c4030e6e43b0&oe=5F50ADBF",
    "whatsapp": "123456789",
    "bio": "Oi, eu sou o Heitor!"
  }
]
```

#### **POST /classes**

This route send a object in JSON format in the request body and create a new lesson in the database.

The following parameters are needed:
- name: a string with the of teacher
- avatar: a string with the avatar url
- whatsapp: a number that represents teacher's whatsapp
- bio: a string with a short teacher's bio
- cost: a number that represents the lesson cost per hour
- subject: a string with the name of the subject
- schedule: an array containing objects with week day, from and to

Returns nothing.<br/>

Request example:
```
{
	"name": "Heitor Sampaio",
	"avatar": "https://scontent.ffln2-1.fna.fbcdn.net/v/t1.0-9/13339712_1037146529655932_9194459747613172219_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=gqZB9wTAEqIAX9kykJb&_nc_ht=scontent.ffln2-1.fna&oh=1400bbcf23fc2447b764c4030e6e43b0&oe=5F50ADBF",
	"whatsapp": "123456789",
	"bio": "Oi, eu sou o Heitor!",
	"subject": "Matematica",
	"cost": 100,
	"schedule": [
		{ "week_day": 1, "from": "8:00", "to": "12:00"}
	]
}
```

#### **GET /connections**
Returns a JSON object with the number of total connections realized between students and teachers

Response example:
```
{
  "total": 9
}
```

#### **POST /connections**
This route send a object in JSON format in the request body and create a new connection in the database.

The following parameters are needed:
- user_id: a number that represents the id of the user that made contact with the teacher

Returns nothing.

Request example:
```
{
	"user_id": 1
}
```

<br/>

## To be implemented
- [ ] Migrate this database to Postgres
- [ ] User accounts
- [ ] Profile editing
- [ ] Favorite teachers

<br/>

## Help
Need help? Want to contribute? Contact me! :wink:<br/><br/>
<a href="https://facebook.com/sampaioheitor"><img src="https://simpleicons.org/icons/facebook.svg" width="32px" height="32px"/></a>  
<a href="https://www.linkedin.com/in/heitor-sampaio/"><img src="https://simpleicons.org/icons/linkedin.svg" width="32px" height="32px"/></a>  
<a href="mailto:heitorosampaio@gmail.com"><img src="https://simpleicons.org/icons/mail-dot-ru.svg" width="32px" height="32px"/></a>

