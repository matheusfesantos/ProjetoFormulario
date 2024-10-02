const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://api.sheetmonkey.io/form/dRg1dCQ5iujD1TxXrCL8gx',{

        method: 'post',
        headers: {
            'Accept': 'application/jason',
            'Contente-Type': 'application/json',
        },
        body: JSON.stringify({nome: 'marcos', email: 'marcos@gmail.com'})
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);