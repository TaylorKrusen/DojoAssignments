select * from users;
select * from messages;
select * from comments;
INSERT INTO comments(users_id,messages_id,comment,created_at,updated_at)
VALUES(4,1,'You seem unhappy. Come into the light',now(),now());
