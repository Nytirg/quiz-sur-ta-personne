const quizContainer = document.getElementById ('quiz');
const resultsContainer = document.getElementById ('résultats');
const submitButton = document.getElementById ('soumettre');

function buildQuiz () {}

function showResults () {}

// afficher le quiz tout de suite
buildQuiz ();

// sur soumettre, afficher les résultats
submitButton.addEventListener ('cliquez', showResults);

const myQuestions = [
    {
        question: "Quel action ferais-tu si quelqu'un à terre est inconscient ?",
        answers: {
            a: "Tu demandes de l'aide aux gens et tu effectues tes premiers soins",
            b: "Tu laisses les gens le faire et continues ton chemin",
            c: "Tu sais pas",
        },
        correctAnswers: "a"
        
    },
    {
        question: "As-tu déjà aidé quelqu'un victime du cyberharcèlement ou du harcèlement scolaire ?",
        answers: {
            a: "Oui",
            b: "Non",
        },
        correctAnswers: "a"
    }
]
