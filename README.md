# Full Stack To Do list

## Description

This is my first full stack solo project. For this project I created a to do list. The user is able to create new tasks, update the status of those tasks, and remove them from the list. All of these changes are reflected on the DOM and in the DATABASE. Tech used: HTML, javaScript, jQuery, express, node, pg, SQL, postico.

![](images/toDoList.png)


TO DO
===

Phase 1: Set up full stack with GET route and db

- npm install express and pg
- set up server
- basic interface(HTML/CSS)
- set up router for to do list ( require and use server.js )
- create db w/table and some test data
- connect to db and do a test query (SELECT *)

Phase 2:


- set up GET route and make sure that response is appending to DOM 
- create front end experience that allows a user to create a task 
    - When the Task is created, it should be stored inside of a database - POST
- set up PUT to update tasks being completed. 
    -button click to change Completed: from No to Yes or vice versa
    -button click will change background color of td to green if Yes
    -button click will update database to reflect changes. 
