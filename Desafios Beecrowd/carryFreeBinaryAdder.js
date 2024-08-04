var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Função principal que realiza a soma bitwise sem carry
const carryFreeBinaryAdder = (numberOne, numberTwo) => {
    // Função que converte um número decimal para binário de 32 bits
    const convertToBinary = function (number) {
        return number.toString(2).padStart(32, '0'); // Garante que o número binário tenha 32 bits
    };

    const numberBinaryOne = convertToBinary(numberOne);
    const numberBinaryTwo = convertToBinary(numberTwo);

    // Função que realiza a soma bitwise sem considerar os carries
    const bitwiseSum = (numberBinaryOne, numberBinaryTwo) => {
        let resultBinary = '';
        for (let i = 0; i < 32; i++) {
            const bitOne = numberBinaryOne[i];
            const bitTwo = numberBinaryTwo[i];
            const sumBit = (parseInt(bitOne) ^ parseInt(bitTwo)).toString(); // XOR para soma sem carry
            resultBinary += sumBit;
        }
        return resultBinary;
    };

    const sumNumberBinary = bitwiseSum(numberBinaryOne, numberBinaryTwo);

    // Função que converte o número binário para decimal novamente
    const convertToDecimal = (binaryNumber) => {
        return parseInt(binaryNumber, 2);
    };

    const result = convertToDecimal(sumNumberBinary);
    return result;
};

// Processa cada par de números e imprime o resultado
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() !== '') {
        const [num1, num2] = lines[i].split(' ').map(Number);
        const result = carryFreeBinaryAdder(num1, num2);
        console.log(result);
    }
}
