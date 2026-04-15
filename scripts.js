
let idiomaAtual = 'en'; 



const btn=document.getElementById("btntopo");
window.addEventListener("scroll", ()=>{
        if(window.scrollY > 200){
            btn.classList.add("show");

        } else {
            btn.classList.remove("show");
        }





});
const form = document.getElementById("faleconoscoForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigada pela contribuição!");
    form.reset();
});


function calcularNivel() {
    let total = 0;

    for (let i = 1; i <= 13; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);

        if (!resposta) {
            alert("Please answer all questions! (Por favor, responda todas as perguntas!)");
            return;
        }

        total += parseInt(resposta.value);
    }

    const resultado = document.getElementById("quizResult");
    resultado.style.display = "block";

    if (total <= 10) {
        resultado.innerHTML = `
            <p>Your level is: <strong>Beginner</strong></p>
            <p>You are starting your English journey. Focus on vocabulary, greetings, and basic sentences.</p>
        `;
    } else if (total <= 24) {
        resultado.innerHTML = `
            <p>Your level is: <strong>Intermediate</strong></p>
            <p>You already know the basics. Now you can improve by explaining ideas and practicing more actively.</p>
        `;
    } else {
        resultado.innerHTML = `
            <p>Your level is: <strong>Advanced</strong></p>
            <p>You have a strong understanding of English and can improve even more by teaching and guiding others.</p>
        `;
    }
}
function enviarAula() {
    const aula = document.getElementById("mentorLesson").value;
    const feedback = document.getElementById("feedbackAula");

    if (aula.trim().length < 30) {
        alert("Your explanation is too short. A good mentor explains with details!");
        return;
    }

    feedback.style.display = "block";
    feedback.style.backgroundColor = "rgba(255, 145, 77, 0.2)"; 
    feedback.style.borderColor = "#ff914d";
    feedback.innerHTML = `
        <strong>Great Lesson!</strong> 🦎<br>
        You used your knowledge to help others. This is the best way to improve your own fluency!
    `;
}


function simularGravacao() {
    const btn = document.getElementById("btnRecord");
    const status = document.getElementById("statusGravacao");
    const wave = document.querySelector(".wave-container");

    if (btn.innerHTML === "● Record Lesson") {
        btn.innerHTML = "■ Stop Recording";
        btn.classList.add("recording");
        status.innerHTML = "Recording... Speak clearly! 🦎";
        wave.style.display = "flex";
    } else {
        btn.innerHTML = "● Record Lesson";
        btn.classList.remove("recording");
        status.innerHTML = "Recording saved! Ready to submit.";
        wave.style.display = "none";
        alert("Your audio lesson has been processed by Teach2Learn AI simulation!");
    }
}


function enviarHistoria() {
    const texto = document.getElementById("userStory").value;
    const feedback = document.getElementById("feedbackHistoria");

    if (texto.trim().length < 50) {
        alert("An advanced lesson needs more details. Expand your script!");
        return;
    }

    feedback.style.display = "block";
    feedback.innerHTML = `
        <strong>Mission Accomplished!</strong> 🎓<br>
        You have delivered a full advanced lesson. This is the peak of the Teach2Learn method!
    `;
}







function toggleTraducao() {
    const elementos = document.querySelectorAll('.traduzivel');
    const btn = document.getElementById("btnTraduzir");

    elementos.forEach(el => {
        if (idiomaAtual === 'en') {
            
            if (!el.getAttribute('data-en')) {
                el.setAttribute('data-en', el.innerText);
            }
            
            el.innerText = el.getAttribute('data-pt');
        } else {
            
            el.innerText = el.getAttribute('data-en');
        }
    });

   
    if (idiomaAtual === 'en') {
        idiomaAtual = 'pt';
        btn.innerHTML = "Ver Original / Show Original";
    } else {
        idiomaAtual = 'en';
        btn.innerHTML = "Traduzir Página / Translate";
    }

}