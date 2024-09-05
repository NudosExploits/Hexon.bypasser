function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    outputText.textContent = toBlockText(inputText);
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function toBlockText(text) {
    const blockTextMap = {
        'A': '🅰️', 'B': '🅱️', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸',
        'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾️', 'P': '🅿️', 'Q': '🅾️', 'R': '🅡', 
        'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩', 
        '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣', '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', 
        '8': '8️⃣', '9': '9️⃣', ' ': ' '
    };

    return text.split('').map(char => blockTextMap[char.toUpperCase()] || char).join('');
}
