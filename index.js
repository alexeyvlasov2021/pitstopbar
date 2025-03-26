// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia();
    // mm.add("(min-width: 1250px)", () => {

        const animate_book = () => {
            gsap.to('.book embed', {
                x: 150,
                rotate: '360deg',
                duration: 0.4,
                ease: "none",
            })

            gsap.to('.book p', {
                x: -80,
                duration: 0.4,
                ease: "none",
            })
        }

        const reverse_animate_book = () => {
            gsap.to('.book embed', {
                x: -20,
                rotate: '-360deg',
                duration: 0.4,
                ease: "none",
            })

            gsap.to('.book p', {
                x: 20,
                duration: 0.4,
                ease: "none",
            })
        }


        const book_btn = document.querySelector('div.book')
        book_btn.addEventListener('mousemove', animate_book)
        book_btn.addEventListener('mouseleave', reverse_animate_book)


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.block',
                start: 'top 50%',
                end: 'top 30%',
                // markers: true,
                // scrub: 3,
                duration: 3,
            }
        })

        tl.fromTo('.inner', { y: 200, opacity: 0 }, { y: 0, opacity: 1 })

        gsap.to('.menu-container img', {
            rotate: '360deg',
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'none',
        })

        const images = [
            './images/reviews1.png',
            './images/reviews2.png',
            './images/reviews3.png',
        ]

        let index = 1

        const img_element = document.querySelector('.img-container img')

        //found rear issue with poor syncronization between opacity change and image swap

        // const changeImage = () => {
        //     gsap.to(img_element, {
        //         opacity: 0,
        //         duration: 0.5,
        //         onComplete: () => {
        //             gsap.to(img_element, {
        //                 opacity: 1,
        //                 duration: 0.5,
        //                 onStart: () => {
        //                     img_element.src = images[index]

        //                     if (index < images.length - 1) {
        //                         index++
        //                     }
        //                     else {
        //                         index = 0
        //                     }
        //                 }
        //             })
        //         },
        //     })
        // }

        const changeImage = () => {
            img_element.src = images[index]

            if (index < images.length - 1) {
                index++
            }
            else {
                index = 0
            }
        }

        let interval;


        interval = setInterval(changeImage, 5000)

        //clear timer when leaving the page
        window.addEventListener("beforeunload", () => {
            clearInterval(interval);
        });

        // ScrollTrigger.create({
        //     // markers: true,
        //     trigger: '.feedbacks',
        //     onEnter: () => { interval = setInterval(changeImage, 3000) },
        //     onEnterBack: () => { interval = setInterval(changeImage, 3000) },
        //     onLeaveBack: () => clearInterval(interval),
        //     onLeave: () => clearInterval(interval),
        // });
    // })
});