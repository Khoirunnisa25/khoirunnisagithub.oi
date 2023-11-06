// script.js

function calculateMoney() {
    const money = parseInt(document.getElementById("inputMoney").value);
    const resultElement = document.getElementById("resultMoney");

    if (money % 25 !== 0) {
        resultElement.style.color = "red";
        resultElement.innerText = "Masukkan nilai dalam kelipatan 25";
        return;
    }

    let remainingMoney = money;
    let change = {
        'Rp1000': 0,
        'Rp500': 0,
        'Rp100': 0,
        'Rp50': 0,
        'Rp25': 0
    };

    change['Rp1000'] = Math.floor(remainingMoney / 1000);
    remainingMoney %= 1000;

    change['Rp500'] = Math.floor(remainingMoney / 500);
    remainingMoney %= 500;

    change['Rp100'] = Math.floor(remainingMoney / 100);
    remainingMoney %= 100;

    change['Rp50'] = Math.floor(remainingMoney / 50);
    remainingMoney %= 50;

    change['Rp25'] = Math.floor(remainingMoney / 25);

    const resultText = `Nilai uang sebesar Rp${money} setara dengan: 
        ${change['Rp1000']} buah pecahan Rp1000, 
        ${change['Rp500']} buah pecahan Rp500, 
        ${change['Rp100']} buah pecahan Rp100, 
        ${change['Rp50']} buah pecahan Rp50, 
        ${change['Rp25']} buah pecahan Rp25.`;

    resultElement.style.color = "#333";
    resultElement.innerText = resultText;
}

function calculateIdealWeight() {
    const height = parseInt(document.getElementById("heightInput").value);
    const resultElement = document.getElementById("resultWeight");

    if (height) {
        const idealWeight = calculateWeight(height);
        const resultText = `Berat badan ideal untuk tinggi ${height} cm adalah ${idealWeight.toFixed(2)} kg.`;
        resultElement.innerText = resultText;
    } else {
        resultElement.innerText = "Silakan masukkan tinggi badan terlebih dahulu.";
    }
}

function calculateWeight(height) {
    const weightWithoutPercentage = height - 100;
    const idealWeight = weightWithoutPercentage - (weightWithoutPercentage * 0.1);
    return idealWeight;
}
