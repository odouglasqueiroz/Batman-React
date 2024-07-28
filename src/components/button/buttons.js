import React from "react";

function Button ({name, active}){

    return(
        <div>
            <Button classname={active? 'button' : 'disableButton'}>{name}</Button>
            <span>Seus dados estão salvo Conosco.</span>
        </div>
    )
}