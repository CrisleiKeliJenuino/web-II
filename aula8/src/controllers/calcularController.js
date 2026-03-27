exports.calcular = (req, res) => {
    const { tipo, n1, n2 } = req.query;

    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if(!tipo || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            success: false,
            error: 'Os campos tipo, n1 e n2 são obrigatórios e devem ser números.'
        });
    }

    let resultado;

    if (tipo === 'soma') {
        resultado = num1 + num2;
    } else if (tipo === 'subtracao') {
        resultado = num1 - num2;
    } else if (tipo === 'multiplicacao') {
        resultado = num1 * num2;
    } else if (tipo === 'divisao') {
        if (num2 === 0) {
            return res.status(400).json({
                success: false,
                error: 'Divisão por zero não é permitida.'
            });
        }
        resultado = num1 / num2;
    } else {
        return res.status(400).json({
            success: false,
            error: 'Tipo de operação inválida. Use soma, subtracao, multiplicacao ou divisao.'
        });
    }

    return res.status(400).json({ 
        resultado });
    }