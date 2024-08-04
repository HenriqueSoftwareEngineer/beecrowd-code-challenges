var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Primeira linha de dados
var line1 = lines[0].split(' ');
var codigo1 = parseInt(line1[0]);
var quantidade1 = parseInt(line1[1]);
var valor_unitario1 = parseFloat(line1[2]);

// Segunda linha de dados
var line2 = lines[1].split(' ');
var codigo2 = parseInt(line2[0]);
var quantidade2 = parseInt(line2[1]);
var valor_unitario2 = parseFloat(line2[2]);

// Calcular o valor total a ser pago
var total1 = quantidade1 * valor_unitario1;
var total2 = quantidade2 * valor_unitario2;
var total_a_pagar = total1 + total2;

// Formatar a saída
console.log(`VALOR A PAGAR: R$ ${total_a_pagar.toFixed(2)}`);
