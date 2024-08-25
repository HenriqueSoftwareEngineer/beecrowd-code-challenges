var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function processBlocks(inputLines) {
    let results = [];
    let i = 0;
    
    while (i < inputLines.length) {
        let n = parseInt(inputLines[i]);
        if (n === 0) break;
        i++;
        
        let blockResults = [];
        
        while (i < inputLines.length) {
            let line = inputLines[i].trim();
            if (line === "0") break;
            
            let sequence = line.split(' ').map(Number);
            if (canOrganizeTrains(n, sequence)) {
                blockResults.push("Yes");
            } else {
                blockResults.push("No");
            }
            i++;
        }
        
        results.push(blockResults);
        results.push([]);  // Empty line after each block
        i++;  // Skip the 0 line
    }
    
    return results;
}

function canOrganizeTrains(n, sequence) {
    let stack = [];
    let nextIn = 1;
    
    for (let wagon of sequence) {
        while (nextIn <= n && (stack.length === 0 || stack[stack.length - 1] !== wagon)) {
            stack.push(nextIn);
            nextIn++;
        }
        
        if (stack[stack.length - 1] === wagon) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return true;
}

function main(input) {
    let inputLines = input.trim().split("\n");
    let results = processBlocks(inputLines);
    
    for (let blockResults of results) {
        if (blockResults.length > 0) {
            for (let result of blockResults) {
                console.log(result);
            }
            console.log("");  // Empty line after each block
        }
    }
}

// Example usage:
// Assuming the input is provided as a string
const input = `5
5 4 3 2 1
1 2 3 4 5
5 4 1 2 3
0
6
1 3 2 5 4 6
0
0`;

main(input);

