db.createUser({
  user: "admin",
  pwd: "password1",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});

db.auth('admin','password1')
db = db.getSiblingDB('test2')

db.createUser({
  user: "admin2",
  pwd: "password2",
  roles: [
    {
      role: "readWrite",
      db: "test2",
    },
  ],
});
