// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MiPrimerContrato {
    string public mensaje;

    // El constructor se ejecuta una sola vez al desplegar el contrato
    constructor(string memory _mensajeInicial) {
        mensaje = _mensajeInicial;
    }

    // Función para actualizar el mensaje almacenado
    function actualizarMensaje(string memory _nuevoMensaje) public {
        mensaje = _nuevoMensaje;
    }
}