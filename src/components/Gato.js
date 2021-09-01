import "./Gato.css";
import React, { useState } from "react";
import { Button } from "bootstrap";

const Gato = (props) => {


  const [turno, jugadores] = useState(
    { name: "gabriel", player: "x" },
    { name: "kathy", player: "0" }
  );

  const [celdas, termino] = useState(["", "", "", "", "", "", "", "", ""]);

  const [winner, setwinner] = useState({ estado: false });


  const inicio = () => {

    if (turno.player === "x") {
      return jugadores(() => {
        return {
          name: "kathy",
          player: "0",
        };
      });
    }
    if (turno.player === "0") {
      return jugadores(() => {
        return {
          name: "gabriel",
          player: "x",
        };
      });
    }

  };

  const validateGameFinish = (newCeldas) => {

    //Validar Horizontales: 0,1,2 - 3,4,5 - 6-7-8
    if (
      newCeldas[0] === newCeldas[1] &&
      newCeldas[1] === newCeldas[2] &&
      newCeldas[2] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    if (
      newCeldas[3] === newCeldas[4] &&
      newCeldas[4] === newCeldas[5] &&
      newCeldas[5] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    if (
      newCeldas[6] === newCeldas[7] &&
      newCeldas[7] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    //Validar Verticales: 0,3,6 - 1,4,7 - 2,5,8
    if (
      newCeldas[0] === newCeldas[3] &&
      newCeldas[3] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    if (
      newCeldas[1] === newCeldas[4] &&
      newCeldas[4] === newCeldas[7] &&
      newCeldas[7] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    if (
      newCeldas[2] === newCeldas[5] &&
      newCeldas[5] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    //Validar Diagonales 0,4,8  - 2,4,6
    if (
      newCeldas[0] === newCeldas[4] &&
      newCeldas[4] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }
    if (
      newCeldas[2] === newCeldas[4] &&
      newCeldas[4] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      setwinner(() => {
        return {
          estado: true
        };
      });
    }

  }

  const CeldaClick = (index) => {
    console.log("celdaClick- inicio");
    console.log("turno", turno.player);
    console.log("jugador", turno.name);
    console.log("celda", index);
    console.log("estado", winner.estado);
    console.log("celdas", celdas);
    validateGameFinish(celdas);
    if (winner.estado) {

    } else {
      if (celdas[index] === "") {
        celdas[index] = turno.player;
        termino(() => {
          return celdas;
        });

        validateGameFinish(celdas);
        if (winner.estado) {

        } else {
          inicio()
        }
      }
    }
    console.log("celdaClick- fin");
    console.log("turno", turno.player);
    console.log("jugador", turno.name);
    console.log("celda", index);
    console.log("estado", winner.estado);
    console.log("celdas", celdas);


  };

  return (
    <>
      <div className="tablero row">
        <h5 className="text-white text-center">
          {(() => {
            if (winner.estado) {
              return (
                turno.player + " is winner "
              )
            } else {
              return (
                "Is is " + turno.player + " turn!"
              )
            }
          })()}
        </h5>

        {celdas.map((celda, i) => (
          <div className={"col-6 celda celda" + i} onClick={() => CeldaClick(i)}>
            {celda}
          </div>
        ))}
      </div>
      <p>{(() => {
        if (winner.estado) {
          return (
            <button onClick={props.volver}>volver</button>
          )
        } else {
          return (
            null
          )
        }
      })()}</p>
    </>
  );
};

export default Gato;
