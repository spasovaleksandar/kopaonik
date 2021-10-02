https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6

Credentials file
```
/config/db.credentials.js
```

API Reference

`/api/employees`

[GET] Get all employees

[POST] Add new employee

```
{
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "janedoe@gmail.com",
    "phone": "9876543210",
    "organization": "RG Infotech Jaipur",
    "designation": "PHP Developer",
    "salary": 450,
    "status": 1,
    "is_deleted": 0,
    "created_at": "2019-11-19T02:35:30.000Z",
    "updated_at": "2021-10-02T19:57:36.000Z"
}
```
`/api/employees/{id}`

[PUT] - Update employee

```
Same payload as above, but with modified values
```

[DELETE] - deletes an employee by ID
