
export const userManager = (function(){

    class User {

        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    
    } 
    
    
    class UserManager {
    
        constructor() {
            
            this.users = [];
            if(localStorage.getItem('users')){
                this.users = JSON.parse(localStorage.getItem('users'));
            }

        }
    
       
        validateCredentials(username, password) {
            return this.users.some(user => user.username === username && 
                                           user.password === password 
            );
        }
    
        addUser(username, password) {
            if(!this.checkForExistingUser(username)) {
                this.users.push(new User(username, password));
                //                            serialization of the users
                localStorage.setItem('users', JSON.stringify(this.users));

                return true;
            }
            return false;
        }
        actualUser(username) {
            localStorage.setItem("actualUser", JSON.stringify(username));
        }
    
        checkForExistingUser(username) {
            return this.users.some(user => user.username === username);
        }
    
    }

    return new UserManager();

})()