import React from "react";
import 'tachyons'


const card = ({name,username,email,id}) =>{
    return(
        <div className="bg-light-green dib br3 pa3 ma3 grow bw3 shadow-5 ">

            <img alt="robotpic" src={`https://robohash.org/${id}?200x200`}></img>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default card;