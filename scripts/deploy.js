const hre = require("hardhat");

async function main() {
  console.log("Desplegando contrato...");

  // 1. Obtenemos la fábrica del contrato
  const MiPrimerContrato = await hre.ethers.getContractFactory("MiPrimerContrato");

  // 2. Iniciamos el despliegue y pasamos el argumento del constructor
  const contrato = await MiPrimerContrato.deploy("¡Hola, Blockchain!");

  // 3. Esperamos a que se confirme el despliegue
  await contrato.waitForDeployment();

  console.log(`Contrato desplegado exitosamente en: ${await contrato.getAddress()}`);
}

// Manejo de errores estándar de Hardhat
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});