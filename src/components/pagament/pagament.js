import React from "react";
import "./styles.css";
import Footer from "../footer/footer";
import Header from "../header";




function Pagament() {
  return (
    <>
      <Header />
     
       <div id="pay-container">
       <nav className="pay">
         <ul className="pay-x">
            <span>Compar Ingreso</span>

          <input 
             type="text" 
              placeholder="Nome completo"
          />

         <input 
             type="text" 
             placeholder="RG ou CPF"
         />

          <span>Dados do cartão</span>

           <input 
             type="text" 
             placeholder="Número do cartão"
          />
          <input 
             type="text" 
             placeholder="Vencimento: **/**"
          />
           <input 
             type="text" 
             placeholder="Código de segurança: ***"
           />
           <button className="button">Compar</button>

         </ul>
          
        </nav>
        </div> 
        
        




      <Footer />
    </>
  );
}

export default Pagament;


