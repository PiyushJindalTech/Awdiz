const users = [];

const user_1 = {
    firstName: 'Ankur',
    lastName: 'Verma',
    age: 30,
    gender: 'Male',
    emailId: 'abc@gmail.com',
    password: '1234'
};

const user_2 = {
    firstName: 'Pooja',
    lastName: 'Bhatnagar',
    age: 25,
    gender: 'Female',
    emailId: 'pooja@gmail.com',
    password: '12345'
};

const user_3 = {
    firstName: 'Ayush',
    lastName: 'Jindal',
    age: 22,
    gender: 'Male',
    emailId: 'ayush@gmail.com',
    password: '878765675'
};


users.push(user_1);
users.push(user_2);
users.push(user_3);

// console.log(users);

// filter, find, map, reduce

// ES5, ES6, ES7

const userEmailId = 'ayush@gmail.com';
const userPassword = '878765675';

let isValidUser = false;

for (let i = 0; i < users.length; i++) {
    if (users[i].emailId === userEmailId && users[i].password === userPassword) {
        isValidUser = true;
        break;
    }
}

if (isValidUser === true) {
    console.log('logged in!');
}
else {
    console.log('invalid credentials');
}

const filteredUser = users.filter(data => data.emailId === userEmailId && data.password === userPassword);
// console.log(filteredUser)
if (filteredUser.length > 0) {
    console.log('logged in!');
}
else {
    console.log('invalid credentials');
}

// console.log(filteredUser)