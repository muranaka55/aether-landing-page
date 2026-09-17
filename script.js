 //  ハンバーガーメニュー
 document.addEventListener('DOMContentLoaded', () => {
   
    const toggleBtn = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });

       
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
            });
        }); // 
    }

    //  フォーム送信のモック処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('お問合せを受け付けました。担当者より順次ご連絡いたします。');
            contactForm.reset();
        });
    }

      // スライドショー
    const track = document.getElementById('logo-track');
    if (track) {
        const singleSetHTML = track.innerHTML;
        track.innerHTML = singleSetHTML + singleSetHTML + singleSetHTML;

        let x = 0;
        const speed = 0.6; 
        const singleSetWidth = track.scrollWidth / 3;

        function loop() {
            x -= speed;
            if (Math.abs(x) >= singleSetWidth) {
                x += singleSetWidth;
            }
            track.style.transform = `translateX(${x}px)`;
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }

    console.log("Æther Landing Page loaded successfully.");
});