import React from 'react'

const LogIn = () =>{
   return(
       <div className = "LogIn">
           <form>
               <label>Email:</label>
               <input type = "text" name = "name" placeholder = "email" />
               <label>Password:</label>
               <input type = "password" name = "password" placeholder = "password" />
               <button type = "submit" value ="Log In" />
           </form>
       </div>
   )

}

export default LogIn