// ! registration

// endpoint: adminBase
// ? POST
// body { "name": "Имя", "phone": "Телефон", "login" : "Логин", "password": "Пароль" }

// ! login
// endpoint: adminBase
// ? GET
// compare your formData with ARRAY<ADMIN_DATA>
// if OK create token
// push token => token (withis tokens have access)

// ! signOut
// endpoint: tokens
// ? DELETE

// ! get My data

// endpoint: adminBase
// ? GET filter token

// ! isAuth
// endpoint: tokens
// ? GET
// if our token is Ok we have status auth

// ! getUsers always check isAuth
