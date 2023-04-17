import React from "react";
import "../style.css";
class Header extends React.Component{

render (){

    return (
        <>
		<div class ="div-1">
        <ul id="ul-1">
            <li>Trang Chủ</li>
            <li>Giao Dịch</li>
            <li>Liên Hệ</li>
            <li>Giới Thiệu</li>   
            <li id="logo">Minh Thuận website</li>
                     
        </ul>

        </div>
    	</>
    );

};
}

export default Header;
