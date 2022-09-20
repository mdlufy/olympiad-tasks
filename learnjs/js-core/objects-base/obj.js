const user = Object.create({})

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;