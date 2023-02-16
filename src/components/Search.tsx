import React, {useState} from 'react'
import {BsSearch} from "react-icons/bs"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("");
  
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      return loadUser(userName);
    }
  }
  
  return (
    <div className="bg-[#2b3566] p-8 rounded-2xl flex flex-col justify-center items-center gap-4 mb-6">
      <h2>Busque por um usuário:</h2>
      <p className="text-[#9da5d1]">Conheça seus melhores repositórios</p>
      <div className="flex gap-2">
        <input
          className="p-2.5 rounded-[3px] border-[none] text-[#2b3566]"
          type="text" placeholder='Digite o nome do usuário'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="p-3.5 bg-[#0e1129] rounded" onClick={() => loadUser(userName)}>
          <BsSearch/>
        </button>
      </div>
    </div>
  )
}

export default Search