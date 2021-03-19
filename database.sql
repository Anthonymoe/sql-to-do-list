-- db name: doList --

CREATE TABLE "items" (
	"id" serial PRIMARY KEY,
	"task" varchar(300),
	"completed" boolean
);

INSERT INTO "items"( "task", "completed" ) 

VALUES ( 'Cut the grass', false ),
( 'Wash the windows', false ),
( 'Laundry', false);

SELECT * FROM "items";