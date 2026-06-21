/* ==========================================================================
   Renewable Energy Portfolio - Shubham K Verma
   Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollHeader();
    initMobileMenu();
    initSimulator();
    initProjectFilter();
    initActiveNavOnScroll();
    initContactForm();
});

/* ==========================================================================
   Theme Switcher (Dark/Light)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preferences
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        const defaultTheme = prefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', defaultTheme);
        updateThemeIcon(defaultTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const moonIcon = document.querySelector('.theme-toggle .fa-moon');
    const sunIcon = document.querySelector('.theme-toggle .fa-sun');
    
    if (theme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

/* ==========================================================================
   Header Scroll States
   ========================================================================== */
function initScrollHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        if (isVisible) {
            navLinks.style.display = 'none';
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--header-bg)';
            navLinks.style.backdropFilter = 'blur(12px)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid var(--border)';
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }
    });

    // Close menu when clicking nav links on mobile
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    });

    // Reset layout on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.borderBottom = 'none';
            navLinks.style.padding = '0';
        } else {
            navLinks.style.display = 'none';
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

/* ==========================================================================
   Clean Energy Simulator logic
   ========================================================================== */
function initSimulator() {
    // Sliders
    const solarCap = document.getElementById('solar-cap');
    const windCap = document.getElementById('wind-cap');
    const batteryCap = document.getElementById('battery-cap');

    // Value Labels
    const solarVal = document.getElementById('solar-val');
    const windVal = document.getElementById('wind-val');
    const batteryVal = document.getElementById('battery-val');

    // Metrics Display
    const energyValDisplay = document.getElementById('metric-energy-val');
    const co2ValDisplay = document.getElementById('metric-co2-val');
    const lcoeValDisplay = document.getElementById('metric-lcoe-val');
    const paybackValDisplay = document.getElementById('payback-val');

    // SVG components
    const mainTurbine = document.querySelector('.turbine-blades');
    const subTurbine = document.querySelector('.turbine-blades-fast');
    const solarPolygons = document.querySelectorAll('.hero-svg-wrapper polygon');
    const led1 = document.getElementById('bess-led-1');
    const led2 = document.getElementById('bess-led-2');
    const led3 = document.getElementById('bess-led-3');

    // Status components
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    // Monthly Yield Coefficients (Historical climate approximations)
    const solarCoeffs = [0.8, 0.9, 1.1, 1.25, 1.35, 1.2, 0.85, 0.9, 1.05, 1.15, 0.95, 0.7]; // Summer peak
    const windCoeffs = [1.15, 1.25, 1.05, 0.9, 1.1, 1.3, 1.45, 1.35, 1.1, 0.8, 0.95, 1.1]; // Monsoon/Winter peak
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    function runSimulation() {
        const sCap = parseFloat(solarCap.value);
        const wCap = parseFloat(windCap.value);
        const bCap = parseFloat(batteryCap.value);

        // Update Slider Labels
        solarVal.textContent = sCap + ' kW';
        windVal.textContent = wCap + ' kW';
        batteryVal.textContent = bCap + ' kWh';

        // Calculate Yields
        // Solar yields ~1,550 kWh/kW/yr. Wind yields ~2,800 kWh/kW/yr.
        const solarAnnualMWh = (sCap * 1.55);
        const windAnnualMWh = (wCap * 2.80);
        const totalAnnualMWh = solarAnnualMWh + windAnnualMWh;

        // Render total energy metric
        energyValDisplay.textContent = Math.round(totalAnnualMWh).toLocaleString();

        // Calculate Carbon Offset
        // Carbon coefficient: ~0.708 tonnes CO2 offset per MWh generated in fossil-grid displacement
        const offsetTonnes = totalAnnualMWh * 0.708;
        co2ValDisplay.textContent = Math.round(offsetTonnes).toLocaleString();

        // Calculate Financials (Realistic cost formulas)
        // Capital expenditure assumptions: Solar ($850/kW), Wind ($1,250/kW), Battery ($350/kWh)
        const capex = (sCap * 850) + (wCap * 1250) + (bCap * 350);
        
        let lcoe = 0;
        let payback = 0;

        if (totalAnnualMWh > 0) {
            // Annualized system costs (CAPEX over 20yr amortization + 2.5% O&M)
            const annualizedCost = (capex / 20) + (capex * 0.025);
            // LCOE = Annualized cost / annual generation in kWh. Base cost bound of 3.2 cents/kWh
            lcoe = (annualizedCost / (totalAnnualMWh * 1000)) * 100; // in cents
            lcoe = Math.max(3.2, Math.min(18.5, lcoe));
            
            // Payback Period: revenues calculated on displacing utility retail rates of $0.09/kWh
            const annualSavings = (totalAnnualMWh * 1000 * 0.09) - (capex * 0.015);
            if (annualSavings > 0) {
                payback = capex / annualSavings;
                payback = Math.max(4.2, Math.min(15, payback));
            } else {
                payback = 0;
            }
        }

        lcoeValDisplay.textContent = totalAnnualMWh > 0 ? lcoe.toFixed(1) + '¢' : '--';
        paybackValDisplay.textContent = payback > 0 ? payback.toFixed(1) + ' yrs' : 'Infinite';

        // Update Microgrid Status Alerts
        const totalCap = sCap + wCap;
        if (totalCap === 0) {
            statusText.textContent = 'Offline (Grid Dependent)';
            statusDot.className = 'status-dot danger';
        } else if (bCap === 0) {
            statusText.textContent = 'High Curtailment Risk (No Storage)';
            statusDot.className = 'status-dot warning';
        } else if ((bCap / totalCap) < 0.15) {
            statusText.textContent = 'Sub-optimal Storage Capacity';
            statusDot.className = 'status-dot warning';
        } else {
            statusText.textContent = 'Grid Optimal Stability';
            statusDot.className = 'status-dot';
        }

        // --- Update SVG Animations ---
        // Wind turbine speed (rotation duration scales with capacity)
        if (wCap === 0) {
            if (mainTurbine) mainTurbine.style.animationPlayState = 'paused';
            if (subTurbine) subTurbine.style.animationPlayState = 'paused';
        } else {
            if (mainTurbine) {
                mainTurbine.style.animationPlayState = 'running';
                // Higher capacity wind turbine spins faster
                mainTurbine.style.animationDuration = Math.max(1.5, 12 - (wCap / 2000) * 10) + 's';
            }
            if (subTurbine) {
                subTurbine.style.animationPlayState = 'running';
                subTurbine.style.animationDuration = Math.max(1.2, 9 - (wCap / 2000) * 7.5) + 's';
            }
        }

        // Solar panels opacity (brighter as capacity increases)
        solarPolygons.forEach(poly => {
            if (sCap === 0) {
                poly.style.fillOpacity = '0.15';
            } else {
                poly.style.fillOpacity = (0.2 + (sCap / 1000) * 0.7).toString();
            }
        });

        // BESS Storage LED status lights
        const darkLED = 'hsl(222, 47%, 20%)';
        const activeLED = 'var(--accent-battery)';
        const fullLED = 'var(--accent-emerald)';

        if (led1 && led2 && led3) {
            if (bCap === 0) {
                led1.setAttribute('fill', darkLED);
                led2.setAttribute('fill', darkLED);
                led3.setAttribute('fill', darkLED);
            } else if (bCap < 300) {
                led1.setAttribute('fill', activeLED);
                led2.setAttribute('fill', darkLED);
                led3.setAttribute('fill', darkLED);
            } else if (bCap < 700) {
                led1.setAttribute('fill', activeLED);
                led2.setAttribute('fill', activeLED);
                led3.setAttribute('fill', darkLED);
            } else {
                led1.setAttribute('fill', fullLED);
                led2.setAttribute('fill', fullLED);
                led3.setAttribute('fill', fullLED);
            }
        }

        // --- Render stacked chart visualization ---
        // Dynamically compute monthly ratios to present consistent bars within UI bounds
        // Base monthly values: solarMWh = (sCap * 1.55 / 12) * coeff, windMWh = (wCap * 2.80 / 12) * coeff
        // Scale to max UI bar limits (max possible output is ~800 MWh)
        const scaleMax = (1000 * 1.55 / 12 * 1.35) + (2000 * 2.80 / 12 * 1.45); // ~850 MWh
        
        months.forEach((month, index) => {
            const bar = document.getElementById('bar-' + month);
            if (!bar) return;

            const mSolarMWh = (sCap * 1.55 / 12) * solarCoeffs[index];
            const mWindMWh = (wCap * 2.80 / 12) * windCoeffs[index];
            const mTotalMWh = mSolarMWh + mWindMWh;

            // Height percentages
            const totalPercent = scaleMax > 0 ? (mTotalMWh / scaleMax) * 100 : 0;
            const solarPercent = mTotalMWh > 0 ? (mSolarMWh / mTotalMWh) * 100 : 0;
            const windPercent = mTotalMWh > 0 ? (mWindMWh / mTotalMWh) * 100 : 0;

            // Set height of outer container
            bar.style.height = Math.max(2, Math.min(100, totalPercent)) + '%';

            // Set heights of parts inside
            const solarPart = bar.querySelector('.bar-solar');
            const windPart = bar.querySelector('.bar-wind');

            if (solarPart) solarPart.style.height = solarPercent + '%';
            if (windPart) windPart.style.height = windPercent + '%';
        });
    }

    // Set up event listeners
    solarCap.addEventListener('input', runSimulation);
    windCap.addEventListener('input', runSimulation);
    batteryCap.addEventListener('input', runSimulation);

    // Run once on load
    runSimulation();
}

/* ==========================================================================
   Projects Grid Category Filtering
   ========================================================================== */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Trigger tiny reflow for animation entry
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   Active Link Selection on scroll
   ========================================================================== */
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const options = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies primary viewing window
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + activeId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Contact Form Validation & Simulation
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Show spinner / loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting...';
        formStatus.style.display = 'none';

        // Simulate network API delay (1.5 seconds)
        setTimeout(() => {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (name && email) {
                // Success State
                formStatus.className = 'form-status success';
                formStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your transmission has been successfully delivered. Shubham will contact you at ${email} shortly.`;
                form.reset();
            } else {
                // Error State
                formStatus.className = 'form-status error';
                formStatus.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Error sending message. Please check all fields and try again.';
            }

            // Restore submit button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }, 1500);
    });
}
