// Wait for the DOM to fully load before initializing particles
document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = document.body.classList.contains("dark");
    const particleColor = isDarkMode ? "#ffffff" : "#000000"; // White for dark mode, black for light mode

    // Initialize particles for full-page background
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: particleColor
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: particleColor,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// Theme toggle logic
document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const icon = document.getElementById("theme-toggle").querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");

    // Check theme and update particle color
    const isDarkMode = body.classList.contains("dark");
    const particleColor = isDarkMode ? "#ffffff" : "#000000";  // White for dark mode, black for light mode

    // Update particles color
    pJSDom[0].pJS.particles.color.value = particleColor;
    pJSDom[0].pJS.particles.line_linked.color = particleColor;
    pJSDom[0].pJS.fn.particlesRefresh();
});

// Toggle the 'scrolled' class based on scroll position
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add 'scrolled' class when scrolling down
    } else {
        header.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar .navbar-link");

    // Handle active class on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    const activeLink = document.querySelector(
                        `#navbar a[href="#${entry.target.id}"]`
                    );
                    activeLink?.classList.add("active");
                }
            });
        },
        {
            root: null,
            threshold: 0.3, // Adjust threshold if needed
        }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle active class on click
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((lnk) => lnk.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
