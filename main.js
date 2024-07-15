function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 18//data.getHours()
    var minutos = data.getMinutes();
    var back = window.document.getElementById('back')
    var data = new Date();
    var diaSemana = data.getDay();
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (hora >= 8 && hora < 12) {
        msg.innerHTML = `Bom dia!<br> Agora são <strong>${hora}:${minutos}</strong> de uma <strong>${diasDaSemana[diaSemana]}</strong>`;
    } else if (hora >= 12 && hora < 13) {
        msg.innerHTML = `🍖🍗Horário de almoço🍗🍖 <br> <strong>⏰${hora}:${minutos}⏰</strong> <br>Retornaremos ás<strong>⏰13:00⏰</strong>`;
    } else if (hora >= 13 && hora < 17) {
        msg.innerHTML = `🌞Boa tarde!🌞<br> Agora são<strong>${hora}:${minutos}</strong> de uma <strong>${diasDaSemana[diaSemana]}</strong>`;
    } else {
        msg.innerHTML = `🌛🌚Boa noite!🌚🌛<br> Agora são <strong>${hora}:${minutos}</strong> 🌞Voltamos amanhã às 08:00🌞 <br>de uma <strong>${diasDaSemana[diaSemana]}</strong>`;
    }


    if (diaSemana === 1) {
        funcionario.innerHTML = "<strong>Funcionarios presentes hoje!</strong><br> Daylon Pardini <br> Daniel Urias <br> Thales Mendes";
    } else if (diaSemana === 2) {
        funcionario.innerHTML = "<strong>Funcionarios presentes hoje!</strong><br> Daylon Pardini <br> Richard Enrique";
    } else if (diaSemana === 3) {
        funcionario.innerHTML = "<strong>Funcionarios presentes hoje!</strong><br> Thales Mendes <br> Richard Enrique";
    } else if (diaSemana === 4) {
        funcionario.innerHTML = "<strong>Funcionarios presentes hoje!</strong><br> Daniel Urias <br> Thales Mendes;";
    } else if (diaSemana === 5) {
        funcionario.innerHTML = "<strong>Funcionarios presentes hoje!</strong><br> Richard Enrique <br> Daniel Urias";

    }
}
