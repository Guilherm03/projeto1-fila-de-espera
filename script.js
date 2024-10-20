const patient = [];

let options;

do {
    options = prompt(`
    1 - Novo paciente
    2 - Ver lista de espera
    3 - Atender paciente
    4 - Sair
    `);

    switch (options) {
        case '1':
            const name = prompt("Digite o nome do paciente:");
            if (name) {
                pacientes.push(name);
                console.log(`${name} foi adicionado à fila.`);
            } else {
                console.log("Nome inválido. Tente novamente.");
            }
            break;

        case '2':
            if (patient.length === 0) {
                console.log("Não há pacientes na fila.");
            } else {
                console.log("Pacientes na fila:");{
                    console.log(`${index + 1}º ${patient}`);
                });
            }
            break;

        case '3':
            if (pacientes.length > 0) {
                const paciente = pacientes.shift();
                console.log(`Paciente consultado: ${paciente}`);
            } else {
                console.log("Não há pacientes na fila para consultar.");
            }
            break;

        case '4':
            console.log("Saindo do programa...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }


    prompt("Pressione Enter para continuar...");
} while (options !== '4');
