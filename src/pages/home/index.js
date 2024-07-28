import React from "react";
import { Link } from "react-router-dom";



function Home(){
   const produtos = [
    {nome: 'Batedeira', id:20},
    {nome: 'Ventsilador', id:22},
    {nome: 'Computador', id:30},

   ]

    return(
        <div>
            {produtos.map((produto) => (
                <Link to={`detalhes/${produto.id}`}>
                <span style={{display: 'block'}}>{produto.nome}</span>
                </Link>
                
            ))}
        </div>
    )
}

export default Home;