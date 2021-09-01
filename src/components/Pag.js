import "./Pag.css";
import React, { useState } from "react";
import Tiktok from "./Tiktok";
import Gato from "./Gato";


const Pag = () => {

    const [pag, setpag] = useState(false)
    console.log(pag);
    const adelante = () => {
        setpag(true);
    }
    const volver = () => {
        setpag(false);
    }
    return (
        <div>

            {pag ? <div className="container mt-3 ">
                <div className="row center">
                    <h1 className="text-white">Tic Tac in React</h1>
                </div>

                <div className="row">
                    <div className="">
                        <Gato volver={volver} />
                    </div>
                </div>
            </div> : <div className="container mt-3 ">
                <div className="row center">
                    <h1 className="text-white">Tic Tac in React.sj 1</h1>
                </div>

                <div className="row">
                    <div className="">
                        <Tiktok />
                    </div>
                    <button onClick={adelante}>Entrar</button>
                </div>

            </div>}
        </div>
    );
}

export default Pag;











// {/* <div className="container mt-3 "> */}
//                 <div className="row center">
//                     <h1 className="text-white">Tic Tac in React.sj 1</h1>
//                 </div>

//                 <div className="row">
//                     <div className="">
//                         <Tiktok />
//                     </div>
//                     <div className="">
//                         {/* <Gato /> */}
//                     </div>
//                 </div>

//                 <button onClick={adelante}>Entrar</button>
//                 <button onClick={atras}>adelante</button>
//             </div>