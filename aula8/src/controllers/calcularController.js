exports.calcular = (req, res) => {
    const { tipo, n1, n2 } = req.body;

    //console.log(`Tipo: ${tipo}, N1: ${n1}, N2: ${n2}`);

    // Converter para número
    const num1 = Number(n1);
    const num2 = Number(n2);

    // Validação
    if (!tipo || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            success: false,
            erro: "Parâmetros inválidos"
        });
    }

    let resultado;

    switch (tipo) {
        case 'soma':
            resultado = num1 + num2;
            break;

        case 'subtracao':
            resultado = num1 - num2;
            break;

        case 'multiplicacao':
            resultado = num1 * num2;
            break;

        case 'divisao':
            if (num2 === 0) {
                return res.status(400).json({
                    success: false,
                    erro: "Divisão por zero não é permitida"
                });
            }
            resultado = num1 / num2;
            break;

        default:
            return res.status(400).json({
                success: false,
                erro: "Tipo de operação inválido"
            });
    }

    return res.json({ resultado });
};
