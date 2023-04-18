import React from "react";
import "../style.css"

class Content  extends React.Component{

      render(){
        return (
          <div className="container">
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
              />
              <button type="submit">Đăng nhập</button>
            </form>
            <p>Bạn quên mật khẩu? <a href="#">Đăng nhập</a></p>
          </div>          );

        };
        }
      export default Content;
