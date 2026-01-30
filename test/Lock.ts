const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MiPrimerContrato", function () {
  async function deployFixture() {
    // Obtenemos los firmantes (cuentas)
    const [owner, otraCuenta] = await ethers.getSigners();

    // Desplegamos el contrato
    const MiPrimerContrato = await ethers.getContractFactory("MiPrimerContrato");
    const contrato = await MiPrimerContrato.deploy("Mensaje Inicial");

    return { contrato, owner, otraCuenta };
  }

  describe("Despliegue", function () {
    it("Debería configurar el mensaje inicial correctamente", async function () {
      const { contrato } = await deployFixture();
      expect(await contrato.mensaje()).to.equal("Mensaje Inicial");
    });
  });

  describe("Actualización", function () {
    it("Debería cambiar el mensaje cuando se llama a actualizarMensaje", async function () {
      const { contrato } = await deployFixture();
      const nuevoTexto = "Nuevo mensaje desde el test";
      
      await contrato.actualizarMensaje(nuevoTexto);
      expect(await contrato.mensaje()).to.equal(nuevoTexto);
    });
  });
});
