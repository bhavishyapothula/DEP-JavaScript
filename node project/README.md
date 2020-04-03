### Installation :
  
    Run npm install

### Running the app :

    Execute "npm run start loadUsersData" to run the app with initial data

OR 

    Execute "npm run start" to run the app with existing data in the database

### Testing the APIs using Postman:

    #####################################################################################
    
    Get All Users 
        (GET) http://localhost:8080/users

    Get User By Id 
        (GET) http://localhost:8080/users/:id

    Create User 
        (POST) http://localhost:8080/users/
        body : {
            firstName: string;
            lastName: string;
            login: string;
            password: string;
            age: number;
            isDeleted?: boolean;
        }

    Update User 
        (PUT) http://localhost:8080/users/:id
        body : {
            password: string;
            age: number;
            isDeleted?: boolean;
        }
    
    Delete User 
        (DELETE) http://localhost:8080/users/:id

    Search Users ( case insensitive ) 
        (POST) http://localhost:8080/users/search
        body : {
            key: string;
            limit: number;
        }   

    #####################################################################################

    Get All Groups 
        (GET) http://localhost:8080/groups

    Get Group By Id 
        (GET) http://localhost:8080/groups/:id

    Create Group 
        (POST) http://localhost:8080/groups/
        body : {
            name: string;
            permissions: Array<string>;
        }

    Update Group
        (PUT) http://localhost:8080/groups/:id
        body : {
            permissions: Array<string>;
        }
    
    Delete Group
        (DELETE) http://localhost:8080/groups/:id

    #####################################################################################
    
    Get All Users Groups
        (Get) http://localhost:8080/groups/users

    Add Users To Groups
        (POST) http://localhost:8080/groups/:id/users
        body : Array<userId>

    #####################################################################################


### Running Unit tests:

    yarn test OR npm run test 