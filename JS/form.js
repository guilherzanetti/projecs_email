// const nodemailer = require('nodemailer');
// const express = require('express');

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.querySelector('#caixa-nome').value;
    const email = document.querySelector('#caixa-email').value;
    const area = document.querySelector('#selectbox').value;
    const privacidade = document.querySelector('#privacidade').checked;

    const nomeStyle = document.querySelector('#caixa-nome');



    if (nome === "") {
        alert('Como você se chama mesmo? Preencha seu nome ;)')
    } else
        if (email === "") {
            alert(`Olá ${nome}, preciso do seu e-mail para enviar as oportunidades :)`)
        }
        else
            if (area === "selecione") {
                alert('Coloque a área que você atua como dev')
            }
            else
                if (!privacidade) {
                    alert('Faltou você aceitar nossos termos de privacidade, leia ele clicando no hiperlink "termos de privacidade"')
                }else{

                }


        console.log(`Olá ${nome} seu email é ${email} e sua area de atuação é ${area} e teste ${privacidade}`)
})

