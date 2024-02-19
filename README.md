# Pizza ordering system

**_Goal_**

- To make dynamic website for providing a platform to select and order pizza.

**_Tech stack_**

- Spring boot
  - jpa, hibernate
  - mysql
  - jwt authentication
- React
  - Hooks , Modularity
- Bootstrap 5
  - Card, Form, Toastify
- GitHub
<br/>

**_How to install_**

- Clone project
- For react(node moludes are not uploaded)
  > npm install
- For backend
  - just use any spring boot supported ide. i have used sts4 eclipse
  - used java 11
---

## USER FUNCTIONALITY

- **LOGIN**

  - Post method
  - Autherization not required
    > http://localhost:7070/authenticate

  ```json
  {
    "userName": "Suraj123",
    "userPassword": "Suraj@123"
  }
  ```

<br/>
			
- **REGISTER USER**

    - Post method
    - Autherization not required
    > http://localhost:7070/registerUser

    ```json
    {
    	"userName":"xyz",
    	"userFirstName":"xyz",
    	"userLastName":"xyz",
    	"userPassword":"xyz"
    }

    ```

- **ADD ITEMS TO CART**

  - Post method
  - Authorization required

  ```js
  const config = {
    headers: {
      Authorization: jwtToken,
      //"Bearer "+jwtToken
    },
  };
  ```

  > http://127.0.0.1:7070/addToCart

  ```json
  {
    "name": "indi chicken",
    "quantity": 2,
    "price": 399,
    "userName": "suraj123"
  }
  ```

- **GET ALL USER CART ITEMS**

  - Get method
  - Authorization required

        > http://127.0.0.1:7070/cartItems/{userName}

    - return type = `List` of items in a cart for user

    <br/>

- **DELETE CART ITEM**

  - Get method
  - Authorization required

  > http://127.0.0.1:7070/deleteItem/{pizza Id}

  - return type = `String` message

---

## ADMIN FUNCTIONALITY

- ADD PIZZA
- DELETE PIZZA
- UPDATE PIZZA
- GET ORDER HISTORY
- UPDATE ORDER STATUS 
- STATISTICS OF PIZZA ORDER

---

_*work done till 20/02/2024*_
