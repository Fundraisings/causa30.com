/* =========================================
   CAUSA30 V2
   EXPERIENCIA INTERACTIVA
========================================= */

const screens = document.querySelectorAll('.screen');


/* -----------------------------------------
   CAMBIAR DE PANTALLA
----------------------------------------- */

function showScreen(screenId){

  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  const nextScreen = document.getElementById(screenId);

  if(!nextScreen) return;

  nextScreen.classList.add('active');

  window.scrollTo({
    top:0,
    behavior:'instant'
  });

}


/* -----------------------------------------
   BOTONES DE NAVEGACIÓN
----------------------------------------- */

document.querySelectorAll('[data-next]').forEach(button => {

  button.addEventListener('click', () => {

    const next = button.dataset.next;

    showScreen(next);

  });

});


/* -----------------------------------------
   PREGUNTA 1
----------------------------------------- */

const questionOne = document.querySelector(
  '[data-question="q1"]'
);

if(questionOne){

  const answers = questionOne.querySelectorAll('.answer-btn');

  answers.forEach(answer => {

    answer.addEventListener('click', () => {

      answers.forEach(btn => {
        btn.classList.remove('selected');
      });

      answer.classList.add('selected');

      document
        .getElementById('reflection1')
        .classList.remove('hidden');

      document
        .getElementById('continue1')
        .classList.remove('hidden');

    });

  });

}


/* -----------------------------------------
   PREGUNTA 2
----------------------------------------- */

const questionTwo = document.querySelector(
  '[data-question="q2"]'
);

if(questionTwo){

  const answers = questionTwo.querySelectorAll('.answer-btn');

  answers.forEach(answer => {

    answer.addEventListener('click', () => {

      answers.forEach(btn => {
        btn.classList.remove('selected');
      });

      answer.classList.add('selected');

      document
        .getElementById('reflection2')
        .classList.remove('hidden');

      document
        .getElementById('continue2')
        .classList.remove('hidden');

    });

  });

}


/* -----------------------------------------
   COMENZAR HISTORIA
   Temporal mientras construimos Capítulo 01
----------------------------------------- */

const storyStart = document.getElementById('storyStart');

if(storyStart){

  storyStart.addEventListener('click', () => {

    alert(
      'Aquí comenzará el Capítulo 01 · Antes de empezar.'
    );

  });

}
