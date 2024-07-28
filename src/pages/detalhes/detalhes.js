import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Detalhes(){
 const params = useParams()
 console.log(params.id)

  const location = useLocation()
  console.log(location)
    return(
        <div>
          Detalhes
        </div>
    )
}

export default Detalhes;