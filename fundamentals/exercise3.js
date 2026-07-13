function calcularSalario(qtdHorasTrabalhadasPorMes, salarioPorHora) {
    const salarioLiquidoMensal = qtdHorasTrabalhadasPorMes * salarioPorHora;
    const imposto = 0.30
    const salarioFinal = salarioLiquidoMensal - imposto;
    return (`Salario liquido e igual a R$${salarioFinal}`)
}

console.log(calcularSalario(150, 40.5))