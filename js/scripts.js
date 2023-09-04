document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const translateButton = document.getElementById('translateButton');
    const outputText = document.getElementById('outputText');

    let dictionary = {}; // Objeto donde almacenaremos el diccionario

    // Cargar el diccionario desde el archivo JSON externo
    fetch('json/dictionary.json')
        .then(response => response.json())
        .then(data => {
            dictionary = data;
        })
        .catch(error => {
            console.error('Error al cargar el diccionario:', error);
        });

    translateButton.addEventListener('click', () => {
        const textToTranslate = inputText.value.toLowerCase();
        const words = textToTranslate.split(' ');

        const translatedWords = words.map(word => {
            return dictionary[word] || word; // Si la palabra no está en el diccionario, conserva la palabra original
        });

        const translatedText = translatedWords.join(' ');
        outputText.textContent = translatedText;
    });
});
