import React from "react";

function infoAutoDJ(data){
    if (data.dadosArray.autodj == "Online"){
        return(
            <React.Fragment>
            <p>AutoDJ: {data.dadosArray.autodj}</p>
            <p>Musica: {data.dadosArray.song}</p>
            </React.Fragment>
        )
        
    }else if(data.dadosArray.autodj == "Offline"){
        return <p>AutoDJ: {data.dadosArray.autodj}</p>
    }
}export default infoAutoDJ