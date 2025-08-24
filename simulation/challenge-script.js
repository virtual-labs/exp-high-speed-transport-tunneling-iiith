// Global variables for challenges
let challengeAnswers = {
    quiz: [],
    advanced: [],
    fillBlanks: [],
    calculations: []
};

let challengeStates = {
    1: false, // Quantum Tunneling Fundamentals
    2: false, // Advanced Semiconductor Transport
    3: false, // Complete the Concepts
    4: false  // Quantum Device Calculations
};

// Enhanced question bank with detailed explanations and hints
const questionBank = {
    // MCQ questions for challenge 1
    quiz: [
        {
            question: "Which physical phenomenon allows electrons to pass through potential barriers that would be forbidden in classical physics?",
            options: ["Drift transport", "Quantum tunneling", "Diffusion transport", "Thermionic emission"],
            answer: 1,
            explanation: "Quantum tunneling is a quantum mechanical phenomenon where particles pass through a potential energy barrier that they classically could not surmount. This occurs due to the wave-like properties of particles at the quantum level, allowing them to penetrate barriers with a probability dependent on barrier height and width.",
            hint: "Think about wave-particle duality in quantum mechanics and how it affects barrier penetration."
        },
        {
            question: "The probability of quantum tunneling through a barrier decreases exponentially with:",
            options: ["Decreased barrier width", "Increased barrier width", "Decreased electron energy", "Increased temperature"],
            answer: 1,
            explanation: "The tunneling probability decreases exponentially with increased barrier width. The transmission coefficient T ∝ e^(-2kL), where k is related to the barrier height and L is the barrier width. As L increases, the probability drops significantly.",
            hint: "Consider how changing the distance particles need to tunnel would affect the probability."
        },
        {
            question: "Which of the following devices relies primarily on quantum tunneling?",
            options: ["MOSFET", "Tunnel diode", "IMPATT diode", "Bipolar junction transistor"],
            answer: 1,
            explanation: "Tunnel diodes (also called Esaki diodes) operate primarily through quantum tunneling. They exhibit negative differential resistance in part of their I-V characteristic due to the tunneling of electrons through a heavily doped p-n junction.",
            hint: "This device was invented by Leo Esaki and exhibits negative differential resistance."
        },
        {
            question: "What happens to the tunneling probability as the effective mass of electrons increases?",
            options: ["Increases", "Decreases", "Remains unchanged", "First increases then decreases"],
            answer: 1,
            explanation: "As the effective mass of electrons increases, the tunneling probability decreases. This is because heavier particles have shorter de Broglie wavelengths, reducing their quantum mechanical penetration through barriers. Mathematically, the transmission coefficient contains the effective mass in the exponent, with T ∝ e^(-2L√(2m*(V₀-E)/ħ²)).",
            hint: "Think about how the de Broglie wavelength relates to mass and its effect on quantum behavior."
        },
        {
            question: "In semiconductor devices, the barrier height for tunneling is primarily determined by:",
            options: ["Temperature only", "Band gap energy", "Doping concentration and applied bias", "Only the device thickness"],
            answer: 2,
            explanation: "The barrier height for tunneling in semiconductor devices is primarily determined by doping concentration and applied bias. Higher doping creates narrower depletion regions that favor tunneling. Applied bias can modify the effective barrier height by changing the band alignment between the two sides of the junction.",
            hint: "Consider what factors affect the energy band diagram in a semiconductor junction."
        },
        {
            question: "The WKB approximation is used in quantum tunneling calculations to:",
            options: ["Exactly solve the Schrödinger equation", "Approximate the tunneling probability for arbitrary barrier shapes", "Calculate only temperature effects", "Model only drift transport"],
            answer: 1,
            explanation: "The Wentzel-Kramers-Brillouin (WKB) approximation is a semi-classical method used to approximate the tunneling probability through barriers of arbitrary shapes. It allows calculation of transmission coefficients for barriers that don't have analytical solutions to the Schrödinger equation.",
            hint: "This mathematical technique deals with varying potential barriers rather than just rectangular ones."
        }
    ],
    
    // Advanced concept questions for challenge 2
    advanced: [
        {
            question: "Which of the following statements correctly describes the relationship between drift and diffusion currents in semiconductor devices?",
            options: [
                "Drift current is always dominant in forward-biased junctions",
                "Diffusion current is proportional to carrier concentration gradient",
                "Drift and diffusion always flow in the same direction",
                "Diffusion current can only exist in p-type semiconductors"
            ],
            answer: 1,
            explanation: "Diffusion current is proportional to the carrier concentration gradient (∇n for electrons or ∇p for holes) as described by Fick's law. It flows from regions of high concentration to low concentration. The diffusion current density is given by J = qD∇n for electrons, where D is the diffusion coefficient.",
            hint: "Think about how carriers move when there's a non-uniform distribution."
        },
        {
            question: "The IMPATT diode generates microwave oscillations primarily through:",
            options: [
                "Tunneling current",
                "Avalanche multiplication followed by transit-time delay",
                "Surface acoustic waves",
                "Direct band-to-band recombination"
            ],
            answer: 1,
            explanation: "IMPATT (IMPact ionization Avalanche Transit Time) diodes generate microwave oscillations through a two-stage process: first, carriers are multiplied through impact ionization (avalanche), creating a current pulse. Then, these carriers transit through a drift region, causing a phase delay between voltage and current that results in negative resistance and sustains oscillations.",
            hint: "The name of this device is an acronym that describes its operating mechanism."
        },
        {
            question: "Hot carrier effects in semiconductor devices become significant when:",
            options: [
                "The device is operated at high temperatures",
                "Carriers gain energy much faster than they can lose it to the lattice",
                "The device is heavily doped",
                "The carrier mobility is very low"
            ],
            answer: 1,
            explanation: "Hot carrier effects become significant when carriers (electrons or holes) gain energy from high electric fields much faster than they can lose it to the lattice through scattering. This non-equilibrium condition leads to an effective carrier temperature higher than the lattice temperature, affecting mobility, velocity saturation, and potentially causing device degradation.",
            hint: "Consider the energy balance between what carriers gain from electric fields versus what they lose to the crystal lattice."
        },
        {
            question: "Velocity saturation in semiconductors occurs when:",
            options: [
                "Carrier velocity decreases with increasing electric field",
                "Carrier velocity becomes independent of electric field at high field strengths",
                "Carrier velocity increases exponentially with electric field",
                "Carriers reach the speed of light"
            ],
            answer: 1,
            explanation: "Velocity saturation occurs when carrier velocity becomes independent of electric field at high field strengths. While at low fields, velocity is proportional to electric field (v = μE), at high fields, carriers gain energy but lose it through increased scattering with optical phonons, causing velocity to plateau at a saturation value (typically ~10⁷ cm/s for electrons in silicon).",
            hint: "Think about what happens to mobility and scattering rates as the electric field becomes very strong."
        },
        {
            question: "The Einstein relation in semiconductors relates:",
            options: [
                "Effective mass and bandgap",
                "Diffusion coefficient and mobility",
                "Carrier lifetime and drift velocity",
                "Fermi level and temperature"
            ],
            answer: 1,
            explanation: "The Einstein relation relates the diffusion coefficient (D) to mobility (μ) through: D = μkT/q, where k is Boltzmann's constant, T is temperature, and q is elementary charge. This fundamental relationship stems from the fact that both diffusion and drift are manifestations of carrier random thermal motion, with drift being the biased version due to electric field.",
            hint: "This relation connects two key transport parameters and includes thermal energy."
        }
    ],
    
    // Fill in the blanks questions for challenge 3
    fillBlanks: [
        {
            text: "In quantum mechanics, the transmission probability for electrons tunneling through a rectangular barrier is proportional to e^(-α·w), where w is the barrier width and α depends on the barrier __1__ and electron __2__.",
            blanks: [
                { id: 1, answer: "height", alternatives: ["energy", "potential"] },
                { id: 2, answer: "energy", alternatives: ["mass", "velocity"] }
            ],
            explanation: "The transmission probability for quantum tunneling through a rectangular barrier is proportional to e^(-2kw), where k = √(2m(V₀-E)/ħ²), with V₀ being the barrier height, E the electron energy, m the electron mass, and ħ the reduced Planck constant. Thus, both barrier height and electron energy are critical parameters determining the tunneling probability.",
            hint: "The exponent in the equation depends on both the potential barrier's magnitude and the particle's own energy."
        },
        {
            text: "The __1__ effect occurs when a high electric field in the depletion region of a reverse-biased p-n junction causes electron-hole pairs to be generated through __2__ ionization, leading to a rapid increase in current.",
            blanks: [
                { id: 1, answer: "avalanche", alternatives: ["breakdown", "zener"] },
                { id: 2, answer: "impact", alternatives: ["collision", "carrier"] }
            ],
            explanation: "The avalanche effect is a multiplication process where high-energy carriers (accelerated by strong electric fields) create additional electron-hole pairs through impact ionization. This causes a chain reaction or 'avalanche' of carriers, leading to breakdown in reverse-biased junctions when the field reaches a critical value.",
            hint: "This multiplication process is named after a natural disaster involving snow, and occurs due to high-energy collisions."
        },
        {
            text: "In IMPATT diodes, microwave oscillations are generated due to a __1__ phase shift between current and voltage caused by the combination of avalanche multiplication and __2__ time delay.",
            blanks: [
                { id: 1, answer: "180", alternatives: ["90", "phase"] },
                { id: 2, answer: "transit", alternatives: ["drift", "carrier"] }
            ],
            explanation: "IMPATT (IMPact ionization Avalanche Transit Time) diodes generate microwaves through a 180° phase shift between current and voltage. This negative resistance behavior comes from two mechanisms: a 90° phase shift from avalanche multiplication, and another 90° shift from the transit time delay as carriers drift through the device, together creating the full 180° shift needed for oscillation.",
            hint: "For oscillation to occur, the total phase shift must be half a full cycle, and the second part involves how long carriers take to move through a region."
        },
        {
            text: "The quantum tunneling current in highly doped p-n junctions flows from __1__ to __2__ bands without carriers having to overcome the energy barrier.",
            blanks: [
                { id: 1, answer: "valence", alternatives: ["conduction", "donor"] },
                { id: 2, answer: "conduction", alternatives: ["valence", "acceptor"] }
            ],
            explanation: "In heavily doped p-n junctions, quantum tunneling allows current to flow directly from the valence band on the p-side to the conduction band on the n-side. This band-to-band tunneling occurs when the depletion region is very narrow and band bending aligns filled states in the valence band with empty states in the conduction band, allowing electrons to tunnel without thermal excitation over the barrier.",
            hint: "Electrons normally need to be excited from one band to another, but tunneling allows a direct path between the band where holes exist and the band where electrons conduct."
        }
    ],
    
    // Numerical calculation problems for challenge 4
    calculations: [
        {
            problem: "Calculate the tunneling probability through a 1 nm wide potential barrier with height 0.3 eV for electrons with energy 0.1 eV. Use the simplified formula T ≈ e^(-2κd), where κ = √(2m(V₀-E)/ħ²), m = 9.11×10^-31 kg, and ħ = 1.054×10^-34 J·s.",
            answer: 0.037,
            tolerance: 0.005,
            explanation: "To calculate tunneling probability, we use T ≈ e^(-2κd), where κ = √(2m(V₀-E)/ħ²).\nGiven:\n- Barrier width d = 1 nm = 1×10^-9 m\n- Barrier height V₀ = 0.3 eV = 0.3 × 1.602×10^-19 J\n- Electron energy E = 0.1 eV = 0.1 × 1.602×10^-19 J\n- Electron mass m = 9.11×10^-31 kg\n- Reduced Planck constant ħ = 1.054×10^-34 J·s\n\nCalculating κ:\nκ = √(2×9.11×10^-31×(0.3-0.1)×1.602×10^-19 / (1.054×10^-34)²)\nκ = √(2×9.11×10^-31×0.2×1.602×10^-19 / 1.11×10^-68)\nκ = 5.64×10^9 m^-1\n\nThe tunneling probability is:\nT = e^(-2×5.64×10^9×1×10^-9) = e^(-11.28) ≈ 0.037 or 3.7%",
            hint: "Remember to convert energy from eV to Joules before calculating, and pay attention to the barrier height minus the electron energy."
        },
        {
            problem: "An IMPATT diode operates at 10 GHz. If the electron drift velocity in silicon is 10^5 m/s, calculate the required drift region length (in micrometers) for the optimal transit time phase shift.",
            answer: 2.5,
            tolerance: 0.1,
            explanation: "For optimal IMPATT operation, the transit time through the drift region should produce a 90° phase shift.\nGiven:\n- Frequency f = 10 GHz = 10×10^9 Hz\n- Drift velocity v = 10^5 m/s\n\nThe period of one complete cycle is T = 1/f = 1/(10×10^9) = 10^-10 s.\nFor a 90° phase shift, we need transit time = T/4 = 10^-10/4 = 2.5×10^-11 s.\n\nThe drift length L = v × transit time = 10^5 × 2.5×10^-11 = 2.5×10^-6 m = 2.5 μm.",
            hint: "The phase shift required for the transit time portion of an IMPATT diode is 90°, which is one-quarter of a full cycle period."
        },
        {
            problem: "A quantum well has width 10 nm. Calculate the energy (in meV) of the first quantum state, assuming infinite potential barriers and an electron effective mass of 0.067m₀, where m₀ = 9.11×10^-31 kg. Use E₁ = (h²/8mL²), where h = 6.626×10^-34 J·s.",
            answer: 56.2,
            tolerance: 1,
            explanation: "For a particle in an infinite potential well, the energy levels are given by E_n = (n²h²)/(8mL²).\nFor the first energy level (n=1):\nGiven:\n- Well width L = 10 nm = 10×10^-9 m\n- Effective mass m = 0.067 × 9.11×10^-31 = 6.10×10^-32 kg\n- Planck's constant h = 6.626×10^-34 J·s\n\nCalculating E₁:\nE₁ = (h²)/(8mL²) = (6.626×10^-34)²/(8 × 6.10×10^-32 × (10×10^-9)²)\nE₁ = 9.01×10^-21 J\n\nConverting to meV (1 eV = 1.602×10^-19 J):\nE₁ = 9.01×10^-21 / 1.602×10^-19 × 1000 = 56.2 meV",
            hint: "The energy levels in a quantum well depend on the well width squared and inversely on the effective mass. Remember that the energy is quantized with n²."
        },
        {
            problem: "A p-n junction has donor concentration N_D = 10^16 cm^-3 and acceptor concentration N_A = 10^15 cm^-3. Calculate the width of the depletion region (in μm) under 5V reverse bias at room temperature (300K). Use W = √(2ε(V_bi + V_R)(N_A + N_D)/(q·N_A·N_D)), where ε = 1.05×10^-10 F/m for silicon, q = 1.6×10^-19 C, and built-in potential V_bi = 0.7 V.",
            answer: 2.38,
            tolerance: 0.05,
            explanation: "The depletion width W is given by W = √(2ε(V_bi + V_R)(N_A + N_D)/(q·N_A·N_D)).\nGiven:\n- Donor concentration N_D = 10^16 cm^-3 = 10^22 m^-3\n- Acceptor concentration N_A = 10^15 cm^-3 = 10^21 m^-3\n- Permittivity ε = 1.05×10^-10 F/m\n- Elementary charge q = 1.6×10^-19 C\n- Built-in potential V_bi = 0.7 V\n- Reverse bias V_R = 5 V\n\nCalculating W:\nW = √(2 × 1.05×10^-10 × (0.7 + 5) × (10^21 + 10^22)/(1.6×10^-19 × 10^21 × 10^22))\nW = √(2 × 1.05×10^-10 × 5.7 × 1.1×10^22/(1.6×10^-19 × 10^43))\nW = 2.38×10^-6 m = 2.38 μm",
            hint: "Remember to convert concentrations to the same units (m^-3), and the total voltage affecting the depletion width is the sum of built-in potential and the applied reverse bias."
        }
    ]
};

// Random question selection system
let selectedQuestions = {
    quiz: [],
    advanced: [],
    fillBlanks: [],
    calculations: []
};

function selectRandomQuestions() {
    // Select questions randomly from each category
    selectedQuestions.quiz = getRandomItems(questionBank.quiz, 4);
    selectedQuestions.advanced = getRandomItems(questionBank.advanced, 4);
    selectedQuestions.fillBlanks = getRandomItems(questionBank.fillBlanks, 3);
    selectedQuestions.calculations = getRandomItems(questionBank.calculations, 2);
    
    // Initialize challenge answers arrays
    initializeChallengeAnswers();
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function initializeChallengeAnswers() {
    challengeAnswers.quiz = Array(selectedQuestions.quiz.length).fill(null);
    challengeAnswers.advanced = Array(selectedQuestions.advanced.length).fill(null);
    challengeAnswers.fillBlanks = selectedQuestions.fillBlanks.map(q => Array(q.blanks.length).fill(''));
    challengeAnswers.calculations = Array(selectedQuestions.calculations.length).fill('');
}

// Enhanced hint and explanation functions
function showQuizHints(challengeNum) {
    let hintsContainer = document.getElementById(`challenge${challengeNum}-feedback`);
    hintsContainer.className = "challenge-feedback";
    hintsContainer.classList.add("active");
    
    let hints = "";
    selectedQuestions.quiz.forEach((q, i) => {
        hints += `<div class="challenge-hint active">
            <strong>Question ${i+1}:</strong> ${q.hint}
        </div>`;
    });
    
    hintsContainer.innerHTML = hints;
    
    // Update hints used counter
    incrementHintsUsed();
}

function showAdvancedHints() {
    let hintsContainer = document.getElementById('challenge2-feedback');
    hintsContainer.className = "challenge-feedback";
    hintsContainer.classList.add("active");
    
    let hints = "";
    selectedQuestions.advanced.forEach((q, i) => {
        hints += `<div class="challenge-hint active">
            <strong>Question ${i+1}:</strong> ${q.hint}
        </div>`;
    });
    
    hintsContainer.innerHTML = hints;
    
    // Update hints used counter
    incrementHintsUsed();
}

function showFillBlanksHint() {
    let hintsContainer = document.getElementById('challenge3-feedback');
    hintsContainer.className = "challenge-feedback";
    hintsContainer.classList.add("active");
    
    let hints = "";
    selectedQuestions.fillBlanks.forEach((q, i) => {
        hints += `<div class="challenge-hint active">
            <strong>Statement ${i+1}:</strong> ${q.hint}
        </div>`;
    });
    
    hintsContainer.innerHTML = hints;
    
    // Update hints used counter
    incrementHintsUsed();
}

function showCalculationHint() {
    let hintsContainer = document.getElementById('challenge4-feedback');
    hintsContainer.className = "challenge-feedback";
    hintsContainer.classList.add("active");
    
    let hints = "";
    selectedQuestions.calculations.forEach((q, i) => {
        hints += `<div class="challenge-hint active">
            <strong>Problem ${i+1}:</strong> ${q.hint}
        </div>`;
    });
    
    hintsContainer.innerHTML = hints;
    
    // Update hints used counter
    incrementHintsUsed();
}

function incrementHintsUsed() {
    hintsUsed++;
    document.getElementById('hintsUsedValue').textContent = hintsUsed;
}

// Enhanced answer checking with detailed explanations
function checkQuizAnswers(challengeNum) {
    let correct = 0;
    let feedback = document.getElementById(`challenge${challengeNum}-feedback`);
    let allAnswered = !challengeAnswers.quiz.includes(null);
    
    if (!allAnswered) {
        feedback.className = "challenge-feedback error";
        feedback.innerHTML = "Please answer all questions before submitting.";
        return;
    }
    
    let feedbackHTML = "";
    
    selectedQuestions.quiz.forEach((q, i) => {
        if (challengeAnswers.quiz[i] === q.answer) {
            correct++;
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-check-circle"></i>Question ${i+1}: Correct!</div>
                <div class="explanation-content">${q.explanation}</div>
            </div>`;
        } else {
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-times-circle"></i>Question ${i+1}: Incorrect</div>
                <div class="explanation-content">
                    <div class="wrong-answer-explanation">
                        You selected "${q.options[challengeAnswers.quiz[i]]}", but the correct answer is "${q.options[q.answer]}".
                    </div>
                    ${q.explanation}
                </div>
            </div>`;
        }
    });
    
    // Add overall result
    let resultHTML = `<div class="challenge-feedback ${correct >= selectedQuestions.quiz.length * 0.75 ? 'success' : 'error'}">
        You got ${correct} out of ${selectedQuestions.quiz.length} questions correct.
    </div>`;
    
    feedback.className = "challenge-feedback active";
    feedback.innerHTML = resultHTML + feedbackHTML;
    
    // Mark challenge complete if score is high enough
    if (correct >= selectedQuestions.quiz.length * 0.75) {
        markChallengeComplete(challengeNum, correct);
    }
}

function checkAdvancedAnswers() {
    let correct = 0;
    let feedback = document.getElementById('challenge2-feedback');
    let allAnswered = !challengeAnswers.advanced.includes(null);
    
    if (!allAnswered) {
        feedback.className = "challenge-feedback error";
        feedback.innerHTML = "Please answer all questions before submitting.";
        return;
    }
    
    let feedbackHTML = "";
    
    selectedQuestions.advanced.forEach((q, i) => {
        if (challengeAnswers.advanced[i] === q.answer) {
            correct++;
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-check-circle"></i>Question ${i+1}: Correct!</div>
                <div class="explanation-content">${q.explanation}</div>
            </div>`;
        } else {
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-times-circle"></i>Question ${i+1}: Incorrect</div>
                <div class="explanation-content">
                    <div class="wrong-answer-explanation">
                        You selected "${q.options[challengeAnswers.advanced[i]]}", but the correct answer is "${q.options[q.answer]}".
                    </div>
                    ${q.explanation}
                </div>
            </div>`;
        }
    });
    
    // Add overall result
    let resultHTML = `<div class="challenge-feedback ${correct >= selectedQuestions.advanced.length * 0.75 ? 'success' : 'error'}">
        You got ${correct} out of ${selectedQuestions.advanced.length} questions correct.
    </div>`;
    
    feedback.className = "challenge-feedback active";
    feedback.innerHTML = resultHTML + feedbackHTML;
    
    // Mark challenge complete if score is high enough
    if (correct >= selectedQuestions.advanced.length * 0.75) {
        markChallengeComplete(2, correct);
    }
}

function checkFillBlanks() {
    let feedback = document.getElementById('challenge3-feedback');
    let totalBlanks = 0;
    let correctBlanks = 0;
    
    // Check if all blanks are filled
    let allFilled = true;
    for (let i = 0; i < challengeAnswers.fillBlanks.length; i++) {
        for (let j = 0; j < challengeAnswers.fillBlanks[i].length; j++) {
            if (!challengeAnswers.fillBlanks[i][j].trim()) {
                allFilled = false;
                break;
            }
        }
        if (!allFilled) break;
    }
    
    if (!allFilled) {
        feedback.className = "challenge-feedback error";
        feedback.innerHTML = "Please fill in all blanks before submitting.";
        return;
    }
    
    let feedbackHTML = "";
    
    selectedQuestions.fillBlanks.forEach((q, i) => {
        let statementCorrect = true;
        let statementResult = "";
        
        q.blanks.forEach((blank, j) => {
            totalBlanks++;
            
            // Check if answer matches any of the acceptable answers (case insensitive)
            const userAnswer = challengeAnswers.fillBlanks[i][j].toLowerCase().trim();
            const correctAnswer = blank.answer.toLowerCase();
            const alternatives = blank.alternatives.map(alt => alt.toLowerCase());
            
            const isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
            
            if (isCorrect) {
                correctBlanks++;
                statementResult += `<div class="explanation-panel active">
                    <div class="explanation-title"><i class="fas fa-check-circle"></i>Blank ${j+1}: Correct!</div>
                    <div class="explanation-content">
                        You entered "${challengeAnswers.fillBlanks[i][j]}" which is correct.
                    </div>
                </div>`;
            } else {
                statementCorrect = false;
                statementResult += `<div class="explanation-panel active">
                    <div class="explanation-title"><i class="fas fa-times-circle"></i>Blank ${j+1}: Incorrect</div>
                    <div class="explanation-content">
                        <div class="wrong-answer-explanation">
                            You entered "${challengeAnswers.fillBlanks[i][j]}", but the correct answer is "${blank.answer}".
                        </div>
                    </div>
                </div>`;
            }
        });
        
        feedbackHTML += `<div class="challenge-feedback ${statementCorrect ? 'success' : 'error'}">
            <strong>Statement ${i+1}:</strong>
            ${statementResult}
            <div class="detailed-hint active">${q.explanation}</div>
        </div>`;
    });
    
    // Add overall result
    let resultHTML = `<div class="challenge-feedback ${correctBlanks >= totalBlanks * 0.75 ? 'success' : 'error'}">
        You got ${correctBlanks} out of ${totalBlanks} blanks correct.
    </div>`;
    
    feedback.className = "challenge-feedback active";
    feedback.innerHTML = resultHTML + feedbackHTML;
    
    // Mark challenge complete if score is high enough
    if (correctBlanks >= totalBlanks * 0.75) {
        markChallengeComplete(3, correctBlanks);
    }
}

function checkCalculations() {
    let feedback = document.getElementById('challenge4-feedback');
    let correct = 0;
    
    // Check if all calculations are filled
    let allFilled = true;
    for (let i = 0; i < challengeAnswers.calculations.length; i++) {
        if (!challengeAnswers.calculations[i].trim()) {
            allFilled = false;
            break;
        }
    }
    
    if (!allFilled) {
        feedback.className = "challenge-feedback error";
        feedback.innerHTML = "Please provide answers for all calculations before submitting.";
        return;
    }
    
    let feedbackHTML = "";
    
    selectedQuestions.calculations.forEach((q, i) => {
        const userAnswer = parseFloat(challengeAnswers.calculations[i]);
        const expectedAnswer = q.answer;
        const tolerance = q.tolerance || 0.01;
        
        const isCorrect = Math.abs(userAnswer - expectedAnswer) <= tolerance;
        
        if (isCorrect) {
            correct++;
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-check-circle"></i>Problem ${i+1}: Correct!</div>
                <div class="explanation-content">
                    Your answer ${userAnswer} is within the acceptable range of ${expectedAnswer}±${tolerance}.
                    <div class="detailed-hint active">${q.explanation}</div>
                </div>
            </div>`;
        } else {
            feedbackHTML += `<div class="explanation-panel active">
                <div class="explanation-title"><i class="fas fa-times-circle"></i>Problem ${i+1}: Incorrect</div>
                <div class="explanation-content">
                    <div class="wrong-answer-explanation">
                        Your answer ${userAnswer} is outside the acceptable range of ${expectedAnswer}±${tolerance}.
                    </div>
                    <div class="detailed-hint active">${q.explanation}</div>
                </div>
            </div>`;
        }
    });
    
    // Add overall result
    let resultHTML = `<div class="challenge-feedback ${correct >= selectedQuestions.calculations.length * 0.75 ? 'success' : 'error'}">
        You got ${correct} out of ${selectedQuestions.calculations.length} calculations correct.
    </div>`;
    
    feedback.className = "challenge-feedback active";
    feedback.innerHTML = resultHTML + feedbackHTML;
    
    // Mark challenge complete if score is high enough
    if (correct >= selectedQuestions.calculations.length * 0.75) {
        markChallengeComplete(4, correct);
    }
}

function markChallengeComplete(challengeNum, points) {
    if (!challengeStates[challengeNum]) {
        challengeStates[challengeNum] = true;
        challengesCompleted++;
        
        // Add to total score
        const maxPoints = challengeNum === 3 ? selectedQuestions.fillBlanks.reduce((acc, q) => acc + q.blanks.length, 0) : 
            (challengeNum === 4 ? selectedQuestions.calculations.length * 2 : 
             (challengeNum === 1 ? selectedQuestions.quiz.length : selectedQuestions.advanced.length));
        
        totalScore += Math.ceil((points / maxPoints) * 100);
        
        // Update UI
        document.getElementById('challengesCompletedValue').textContent = `${challengesCompleted}/4`;
        document.getElementById('totalScoreValue').textContent = totalScore;
        document.getElementById('totalProgressBar').style.width = `${(challengesCompleted / 4) * 100}%`;
        
        // Mark challenge section as completed
        document.getElementById(`challenge${challengeNum}`).classList.add('completed');
        
        // Check if all challenges are complete
        if (challengesCompleted === 4) {
            showAllChallengesComplete(totalScore);
        }
    }
}

function resetChallenge(challengeNum) {
    const challengeContent = document.getElementById(`challenge${challengeNum}-content`);
    const challengeFeedback = document.getElementById(`challenge${challengeNum}-feedback`);
    
    // Reset feedback
    challengeFeedback.className = "challenge-feedback";
    challengeFeedback.innerHTML = "";
    
    // Reset challenge state if it was completed
    if (challengeStates[challengeNum]) {
        challengeStates[challengeNum] = false;
        challengesCompleted--;
        document.getElementById('challengesCompletedValue').textContent = `${challengesCompleted}/4`;
        document.getElementById('totalProgressBar').style.width = `${(challengesCompleted / 4) * 100}%`;
        document.getElementById(`challenge${challengeNum}`).classList.remove('completed');
    }
    
    // Regenerate the challenge content
    switch (challengeNum) {
        case 1:
            // Reset MCQ answers
            challengeAnswers.quiz = Array(selectedQuestions.quiz.length).fill(null);
            generateChallengeContent(1);
            break;
        case 2:
            // Reset advanced concept answers
            challengeAnswers.advanced = Array(selectedQuestions.advanced.length).fill(null);
            generateChallengeContent(2);
            break;
        case 3:
            // Reset fill in the blanks
            challengeAnswers.fillBlanks = selectedQuestions.fillBlanks.map(q => Array(q.blanks.length).fill(''));
            generateChallengeContent(3);
            break;
        case 4:
            // Reset calculations
            challengeAnswers.calculations = Array(selectedQuestions.calculations.length).fill('');
            generateChallengeContent(4);
            break;
    }
}

function resetAllChallenges() {
    // Reset all challenge states
    for (let i = 1; i <= 4; i++) {
        if (challengeStates[i]) {
            challengeStates[i] = false;
            document.getElementById(`challenge${i}`).classList.remove('completed');
        }
    }
    
    // Reset counters
    challengesCompleted = 0;
    totalScore = 0;
    hintsUsed = 0;
    
    // Update UI
    document.getElementById('challengesCompletedValue').textContent = `${challengesCompleted}/4`;
    document.getElementById('totalScoreValue').textContent = totalScore;
    document.getElementById('hintsUsedValue').textContent = hintsUsed;
    document.getElementById('totalProgressBar').style.width = `0%`;
    
    // Select new questions
    selectRandomQuestions();
    
    // Regenerate all challenges
    for (let i = 1; i <= 4; i++) {
        generateChallengeContent(i);
        
        // Reset feedback
        const feedback = document.getElementById(`challenge${i}-feedback`);
        feedback.className = "challenge-feedback";
        feedback.innerHTML = "";
    }
}

function showAllChallengesComplete(finalScore) {
    // Create a modal to show completion
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '10000';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '30px';
    modalContent.style.borderRadius = '16px';
    modalContent.style.maxWidth = '500px';
    modalContent.style.textAlign = 'center';
    modalContent.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    
    // Add confetti effect
    createConfetti(modalContent);
    
    // Add content
    modalContent.innerHTML = `
        <h2 style="font-size: 2rem; color: #6366f1; margin-bottom: 20px;">🎉 Congratulations! 🎉</h2>
        <p style="font-size: 1.2rem; margin-bottom: 15px;">You've completed all challenges!</p>
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #065f46; margin-bottom: 10px;">Your Results:</h3>
            <p style="font-size: 1.5rem; font-weight: 700; color: #10b981;">Final Score: ${finalScore}</p>
            <p>Challenges Completed: 4/4</p>
            <p>Hints Used: ${hintsUsed}</p>
        </div>
        <button class="btn btn-primary" onclick="closeCompletionModal()" style="padding: 12px 24px; font-size: 1.1rem;">
            Continue Learning
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add global function to close modal
    window.closeCompletionModal = function() {
        document.body.removeChild(modal);
    };
}

function createConfetti(container) {
    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.borderRadius = '50%';
        confetti.style.top = -20 + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards, fadeOut 0.5s ${Math.random() * 3 + 1.5}s forwards`;
        container.appendChild(confetti);
    }
}

// Function to select an answer in MCQ
function selectQuizAnswer(challengeNum, questionNum, answer, element) {
    // Remove selected class from all options in this question
    const questionContainer = element.parentElement;
    const options = questionContainer.querySelectorAll('.quiz-option');
    
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to the clicked option
    element.classList.add('selected');
    
    // Store the answer
    if (challengeNum === 1) {
        challengeAnswers.quiz[questionNum - 1] = answer;
    } else if (challengeNum === 2) {
        challengeAnswers.advanced[questionNum - 1] = answer;
    }
}

// Function to handle input change in fill in the blanks
function handleFillBlankInput(statementNum, blankNum, element) {
    challengeAnswers.fillBlanks[statementNum - 1][blankNum - 1] = element.value;
}

// Function to handle input change in calculations
function handleCalculationInput(problemNum, element) {
    challengeAnswers.calculations[problemNum - 1] = element.value;
}

// Enhanced question generation with explanations
function generateChallengeContent(challengeNum) {
    switch (challengeNum) {
        case 1:
            generateQuizQuestions();
            break;
        case 2:
            generateAdvancedConcepts();
            break;
        case 3:
            generateFillInTheBlanks();
            break;
        case 4:
            generateCalculationChallenge();
            break;
    }
}

function generateQuizQuestions() {
    const contentContainer = document.getElementById('challenge1-content');
    let questionsHTML = '';
    
    selectedQuestions.quiz.forEach((q, i) => {
        questionsHTML += `
            <div class="quiz-question">
                <h4>Q${i+1}: ${q.question}</h4>
                <div class="quiz-options">`;
        
        q.options.forEach((option, j) => {
            const isSelected = challengeAnswers.quiz[i] === j;
            questionsHTML += `
                <div class="quiz-option ${isSelected ? 'selected' : ''}" 
                     onclick="selectQuizAnswer(1, ${i+1}, ${j}, this)">
                    ${option}
                </div>`;
        });
        
        questionsHTML += `
                </div>
            </div>`;
    });
    
    contentContainer.innerHTML = questionsHTML;
}

function generateAdvancedConcepts() {
    const contentContainer = document.getElementById('challenge2-content');
    let questionsHTML = '';
    
    selectedQuestions.advanced.forEach((q, i) => {
        questionsHTML += `
            <div class="quiz-question">
                <h4>Q${i+1}: ${q.question}</h4>
                <div class="quiz-options">`;
        
        q.options.forEach((option, j) => {
            const isSelected = challengeAnswers.advanced[i] === j;
            questionsHTML += `
                <div class="quiz-option ${isSelected ? 'selected' : ''}" 
                     onclick="selectQuizAnswer(2, ${i+1}, ${j}, this)">
                    ${option}
                </div>`;
        });
        
        questionsHTML += `
                </div>
            </div>`;
    });
    
    contentContainer.innerHTML = questionsHTML;
}

function generateFillInTheBlanks() {
    const contentContainer = document.getElementById('challenge3-content');
    let statementsHTML = '';
    
    selectedQuestions.fillBlanks.forEach((q, i) => {
        let text = q.text;
        
        // Replace blanks with input fields
        q.blanks.forEach((blank, j) => {
            const placeholder = `__${blank.id}__`;
            const inputField = `<input type="text" class="fill-blank-input" 
                                    placeholder="Fill in..." 
                                    oninput="handleFillBlankInput(${i+1}, ${j+1}, this)" 
                                    value="${challengeAnswers.fillBlanks[i][j] || ''}">`;
            text = text.replace(placeholder, inputField);
        });
        
        statementsHTML += `
            <div class="fill-blank-container">
                <p class="fill-blank-text">${text}</p>
            </div>`;
    });
    
    contentContainer.innerHTML = statementsHTML;
}

function generateCalculationChallenge() {
    const contentContainer = document.getElementById('challenge4-content');
    let problemsHTML = '';
    
    selectedQuestions.calculations.forEach((q, i) => {
        problemsHTML += `
            <div class="quiz-question">
                <h4>Problem ${i+1}:</h4>
                <p style="margin-bottom: 15px;">${q.problem}</p>
                <div style="display: flex; align-items: center;">
                    <label style="margin-right: 10px; font-weight: 500;">Your Answer:</label>
                    <input type="number" step="0.001" class="fill-blank-input" 
                           style="width: 150px;" 
                           placeholder="Enter value..." 
                           oninput="handleCalculationInput(${i+1}, this)"
                           value="${challengeAnswers.calculations[i] || ''}">
                </div>
            </div>`;
    });
    
    contentContainer.innerHTML = problemsHTML;
}

// Initialize challenges when the page loads
function initializeChallenges() {
    // Reset counters
    challengesCompleted = 0;
    totalScore = 0;
    hintsUsed = 0;
    
    // Select random questions
    selectRandomQuestions();
    
    // Generate challenge content
    for (let i = 1; i <= 4; i++) {
        generateChallengeContent(i);
    }
    
    // Initialize UI elements
    document.getElementById('challengesCompletedValue').textContent = `${challengesCompleted}/4`;
    document.getElementById('totalScoreValue').textContent = totalScore;
    document.getElementById('hintsUsedValue').textContent = hintsUsed;
    document.getElementById('totalProgressBar').style.width = `0%`;
}

// Global variables for tracking
let challengesCompleted = 0;
let totalScore = 0;
let hintsUsed = 0;

// Function to initialize challenges when the "Challenges" tab is clicked for the first time
let challengesInitialized = false;
function initializeChallengesIfNeeded() {
    if (!challengesInitialized) {
        initializeChallenges();
        challengesInitialized = true;
    }
}

// Add this to the list of window functions
window.selectQuizAnswer = selectQuizAnswer;
window.handleFillBlankInput = handleFillBlankInput;
window.handleCalculationInput = handleCalculationInput;
window.checkQuizAnswers = checkQuizAnswers;
window.showQuizHints = showQuizHints;
window.checkAdvancedAnswers = checkAdvancedAnswers;
window.showAdvancedHints = showAdvancedHints;
window.checkFillBlanks = checkFillBlanks;
window.showFillBlanksHint = showFillBlanksHint;
window.checkCalculations = checkCalculations;
window.showCalculationHint = showCalculationHint;
window.resetChallenge = resetChallenge;
window.resetAllChallenges = resetAllChallenges;
window.closeCompletionModal = function() {}; // Will be overridden when needed
