// ==========================================
// Birthday Gift Premium
// For Someone Worth Celebrating
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Loading Screen
    // =========================
    const loading = document.getElementById("loading");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loading.classList.add("hide");
        }, 1800);
    });

    // =========================
    // Background Music
    // =========================
    const music = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playMusic");

    if (playBtn && music) {

        playBtn.addEventListener("click", () => {

            if (music.paused) {

                music.play();

                playBtn.innerHTML = "Pause Music";

            } else {

                music.pause();

                playBtn.innerHTML = "Play Music";

            }

        });

    }

    // =========================
    // Scroll Animation
    // =========================
    const hidden = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    hidden.forEach(section => {

        observer.observe(section);

    });

    // =========================
    // Typing Effect
    // =========================
    const typing = document.getElementById("typing");

    if (typing) {

        const text = "Happy Birthday, Khairun Nisa ❤️";

        let index = 0;

        function writeText() {

            if (index < text.length) {

                typing.innerHTML += text.charAt(index);

                index++;

                setTimeout(writeText, 80);

            }

        }

        writeText();

    }

    // =========================
    // Gallery Slider
    // =========================
    const slides = document.querySelectorAll(".slide");

    let current = 0;

    function showSlide(i) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        slides[i].classList.add("active");

    }

    if (slides.length > 0) {

        showSlide(current);

        setInterval(() => {

            current++;

            if (current >= slides.length) {

                current = 0;

            }

            showSlide(current);

        }, 4500);

    }

    // =========================
    // Replay Button
    // =========================
    const replay = document.getElementById("replay");

    if (replay) {

        replay.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});

// ==========================================
// Scroll Progress Bar
// ==========================================

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress");

    if (!progress) return;

    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const progressWidth = (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// ==========================================
// Gold Particles
// ==========================================

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 60; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.width = 2 + Math.random() * 5 + "px";

        particle.style.height = particle.style.width;

        particle.style.animationDuration = 6 + Math.random() * 6 + "s";

        particle.style.animationDelay = Math.random() * 5 + "s";

        particleContainer.appendChild(particle);

    }

}

// ==========================================
// Confetti
// ==========================================

const confetti = document.getElementById("confetti");

if (confetti) {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDuration = 3 + Math.random() * 4 + "s";

        piece.style.animationDelay = Math.random() * 5 + "s";

        confetti.appendChild(piece);

    }

}

// ==========================================
// Console Greeting
// ==========================================

console.log("✨ Happy Birthday Khairun Nisa ✨");
console.log("For Someone Worth Celebrating ❤️");

// ===== Opening Gift =====

const openGift = document.getElementById("openGift");
const opening = document.getElementById("opening");
const music = document.getElementById("bgMusic");

if(openGift){

openGift.onclick=function(){

opening.classList.add("hide");

if(music){

music.play();

}

}

}
// ===== Premium Gallery Auto Slide =====

const gallerySlides = document.querySelectorAll(".gallery .slide");

let galleryIndex = 0;

function nextGallery(){

gallerySlides.forEach(slide=>{
slide.classList.remove("active");
});

galleryIndex++;

if(galleryIndex>=gallerySlides.length){

galleryIndex=0;

}

gallerySlides[galleryIndex].classList.add("active");

}

if(gallerySlides.length>0){

setInterval(nextGallery,5000);

}
// ===========================
// Birthday Letter Typewriter
// ===========================

const letter = `

Happy Birthday, Khairun Nisa.

Hari ini adalah pengingat bahwa Allah telah menambahkan satu lagi lembar indah dalam perjalanan hidupmu.

Hari ini bukan hanya tentang bertambahnya usia, tetapi tentang perjalanan indah yang telah kamu lalui hingga menjadi pribadi yang luar biasa seperti sekarang.

Terima kasih telah menjadi seseorang yang selalu membawa ketenangan, kebaikan, dan kehangatan bagi orang-orang di sekitarmu. Mungkin kamu tidak selalu menyadari betapa berharganya dirimu, tetapi percayalah, kehadiranmu telah memberi warna dalam kehidupan banyak orang.

Semoga di usiamu yang baru, setiap doa yang selama ini kamu simpan dalam diam perlahan menemukan jalannya untuk menjadi kenyataan. Semoga Allah melapangkan setiap langkahmu, memudahkan setiap urusanmu, menjaga kesehatanmu, melindungimu dari segala keburukan, dan memenuhi hatimu dengan ketenangan yang tak pernah habis.

Jangan pernah takut untuk bermimpi lebih tinggi. Jangan pernah ragu untuk melangkah lebih jauh. Akan ada hari-hari yang sulit, tetapi aku berharap kamu selalu memiliki alasan untuk tetap tersenyum dan percaya bahwa setiap kesulitan sedang mempersiapkan sesuatu yang lebih indah.

Tetaplah menjadi dirimu sendiri—seseorang yang tulus, sederhana, dan memiliki hati yang baik. Dunia membutuhkan lebih banyak orang sepertimu.

Semoga setiap pagi membawa harapan baru, setiap senja menghadirkan rasa syukur, dan setiap malam menjadi pengingat bahwa kamu selalu memiliki alasan untuk bangkit lagi esok hari.

Aku berharap kebahagiaan selalu menemukanmu, di mana pun kamu berada. Semoga langkahmu selalu dipenuhi keberkahan, impianmu satu per satu menjadi nyata, dan orang-orang yang kamu sayangi selalu berada dalam lindungan Allah SWT.

Tetaplah tersenyum.

Tetaplah menjadi dirimu sendiri.

Karena dunia membutuhkan lebih banyak orang sepertimu.

Semoga Allah menjaga hatimu.

Menjaga keluargamu.

Menjaga impianmu.

Dan memberikan kebahagiaan yang tak pernah habis.

Selamat ulang tahun.

Semoga usiamu membawa lebih banyak keberkahan, kesehatan, kebahagiaan, dan cinta.

Never forget...

You are...

Someone Worth Celebrating.

❤️

`;

const target = document.getElementById("letterText");

if(target){

let i = 0;

function typeLetter(){

if(i < letter.length){

target.innerHTML += letter.charAt(i);

i++;

setTimeout(typeLetter,35);

}

}

const observer = new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

typeLetter();

observer.disconnect();

}

});

observer.observe(target);

}
// ===============================
// Replay
// ===============================

const replayButton = document.getElementById("replay");

if(replayButton){

replayButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}