# server
Trippy Images Server

# DEPLOY LINK
---

**BASE URL**
> http://localhost:3000

router.use('/', userRoutes)
router.use('/imageResult', imageResultRoutes)
router.use('/trippy', authenticate, trippyRoutes)

**END POINTS**

No  | Route               | HTTP   | Authentication | Authorization
----|---------------------|--------|----------------|---------------
 1  | /register           | POST   | No             | No
 2  | /login              | POST   | No             | No
 3  | /trippy             | POST   | Yes            | No

---
### 1. POST /register
  > Add new user to users collections and returns JSON of token

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**
  email: [string] <_required_>
  password: [string] <_required_>

* **Success Response:**

  * **Code:** 201 CREATED
    **Content:** 
    ```javascript
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRoaXMgdG9rZW4gaXMgZm9yIGFwaSBkb2N1bWVudCBvbmx5IiwiaWF0IjoxNTE2MjM5MDIyfQ.X5ErI_61TUnECess_qkg5T7fHZ8J547E20ftQY7qfsc"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST
    **Content:** 
    ```javascript
    {
      "code": 400,
      "message": [
          "Name cannot be empty",
          "Email cannot be empty",
          "Email already registered",
          "Password cannot be empty"
      ]
    }
    ```

* **Sample Call:**

  ```javascript
    axios({
      url: "/register",
      type : "POST",
      data: {
        email: 'janedoe@mail.com',
        password: '123456'
      }
    })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  ```

### 2. POST /login
  > Check users collections and returns JSON of token when user found

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**
  email: [string] <_required_>
  password: [string] <_required_>

* **Success Response:**

  * **Code:** 200 OK
    **Content:** 
    ```javascript
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRoaXMgdG9rZW4gaXMgZm9yIGFwaSBkb2N1bWVudCBvbmx5IiwiaWF0IjoxNTE2MjM5MDIyfQ.X5ErI_61TUnECess_qkg5T7fHZ8J547E20ftQY7qfsc"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** 
    ```javascript
    {
      {
          "code": 404,
          "message": "Invalid Email or Password"
      }
    }
    ```

* **Sample Call:**

  ```javascript
    axios({
      url: "/login",
      type : "POST",
      data: {
        email: 'janedoe@mail.com',
        password: '123456'
      }
    })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  ```

### 3. POST /trippy
  > Check users collections and returns JSON of token when user found

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**
  image1: [string] <_required_>
  image2: [string] <_required_>

* **Success Response:**

  * **Code:** 200 OK
    **Content:** 
    ```javascript
    {
      "style": "https://storage.googleapis.com/mini-wp-images-h8/1579230931779-maxresdefault.jpg",
      "content": "https://storage.googleapis.com/mini-wp-images-h8/1579230931823-Nikon-landscape-lenses.jpeg",
      "result": "https://api.deepai.org/job-view-file/7c7cec18-6ae1-413b-a7a4-c55c465508f6/outputs/output.png"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST
    **Content:** 
    ```javascript
    {
      {
          "code": 400,
          "message": "All image cannot be empty"
      }
    }
    ```

* **Sample Call:**

  ```javascript
    axios({
      url: "/trippy",
      type : "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRoaXMgdG9rZW4gaXMgZm9yIGFwaSBkb2N1bWVudCBvbmx5IiwiaWF0IjoxNTE2MjM5MDIyfQ.X5ErI_61TUnECess_qkg5T7fHZ8J547E20ftQY7qfsc'
      }
    })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  ```