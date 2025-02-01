# Backend Features #

*Features*
1: An Express app with user registration, login and logout functionality.

2: Implemented JSON Web Tokens (JWT) for user authentication.

3: Implemented JWT blacklisting to prevent the use of revoked tokens.

4: Implemented refresh tokens to improve the user experience by allowing them to stay logged in even after their access expire token.  

5: Used MongoDB to store user data and JWT blacklisted tokens.

6: Used bcrypt to hash user passwords before storing them in the database.

7: Used dotenv to manage environment variables.


# *FILE STRUCTURE* #
React
  |
-backend
|-config
    |- config.js
|-controller
    |- refreshToken.js
    |- userController.js
|-middaleware
    |-authMiddleware.js
|-model
    |-userModel.js
|-routes
    |-userroutes.js
|-blacklist.js
|-index.js

# Clone project
1: clone project from github
2: install neccessary dependencies and node module locally.

# *Run backend* #
npm run server

# Test logics
* Use Thunder client with neccesarry data.



   

