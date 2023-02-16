import React from "react";
import {UserProps} from "../types/user";
import {Link} from "react-router-dom";
import {MdLocationPin} from "react-icons/md";

const User = ({
                avatar_url,
                login,
                location,
                followers,
                following
              }: UserProps) => {
  return (
    <div
      className="bg-[#2b3566] p-8 rounded-2xl flex flex-col items-center justify-center gap-4">
      <img className="w-[140px] h-[140px] border-4 border-solid border-[#644aff] rounded-[50%]" src={avatar_url}
           alt={login}/>
      <h2>{login}</h2>
      <p className="flex items-center gap-1">
        <MdLocationPin className="fill-[#4ed8c7] text-2xl"/>
        <span className="text-[#9da5d1] font-[bold]">{location}</span>
      </p>
      <div className="flex">
        <div className="flex flex-col px-4 py-0 gap-1 border-r-[#9da5d1] border-r border-solid">
          <p>Seguidores:</p>
          <p className="bg-[#4ed8c7] px-[0.4rem] py-[0.2rem] rounded-[3px]">{followers}</p>
        </div>
        <div className="flex flex-col px-4 py-0 gap-1">
          <p>Seguindo:</p>
          <p className="bg-[#4ed8c7] px-[0.4rem] py-[0.2rem] rounded-[3px]">{following}</p>
        </div>
      </div>
      
      <Link className="items-center bg-[#644aff] p-4 rounded-[5px] opacity-80 transition-[0.3s] hover:opacity-100"
            to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User