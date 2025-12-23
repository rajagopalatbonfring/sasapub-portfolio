<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SASA Publications - Your Trusted Partner for Academic & Book Publishing</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #1e3a5f;
            --secondary: #f4a300;
            --accent: #2c5f8d;
            --light: #f8f9fa;
            --dark: #212529;
            --text: #333;
            --white: #ffffff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text);
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }


/* Navbar Base */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 2px 0;
    transition: all 0.4s ease;
    background: rgb(255, 255, 255); /* White background by default */
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    transform: translateY(0);
}

.navbar.scrolled {
    padding: 14px 0;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo */
.logo-group {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #1a1a1a;
}

.logo-icon {
    width: 40px;
    height: 48px;
    background: #f4a300;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 10px rgba(244, 163, 0, 0.3);
}

.logo-text {
    font-size: 24px;
    font-weight: 800;
    color: #1a1a1a;
    font-family: 'Georgia', serif, sans-serif;
}

/* Desktop Nav */
.desktop-nav {
    display: flex;
    align-items: center;
    gap: 40px;
}

.desktop-nav ul {
    display: flex;
    list-style: none;
    gap: 32px;
    margin: 0;
    padding: 0;
}

.desktop-nav a {
    color: #444;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: color 0.3s ease;
    position: relative;
}

.desktop-nav > ul > li > a:hover {
    color: #f4a300;
}

.desktop-nav> ul > li > a::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: #f4a300;
    transition: width 0.3s ease;
}

.desktop-nav a:hover::after {
    width: 100%;
}


/* Publish Button */
.publish-btn {
    background: #f4a300;
    color: #1a1a1a;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(244, 163, 0, 0.164);
    white-space: nowrap;
}

.publish-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(244, 163, 0, 0.116);
    background: #e69500;
}

.publish-btn.mobile {
    display: block;
    text-align: center;
    width: 90%;
    margin: 20px auto 0;
    font-size: 16px;
}

/* Mobile Toggle */
.mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.mobile-toggle span {
    width: 28px;
    height: 3px;
    background: #1a1a1a;
    border-radius: 3px;
    transition: all 0.4s ease;
}

.mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
}

.mobile-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu Panel */
.mobile-menu-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #eee;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, padding 0.5s ease;
    padding: 0 20px;
}

.mobile-menu-panel.open {
    max-height: 500px;
    padding: 40px 20px;
}

.mobile-menu-panel ul {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;
    text-align: center;
}

.mobile-menu-panel a {
    display: block;
    color: #1a1a1a;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 14px 0;
    transition: color 0.3s ease;
}

.mobile-menu-panel a:hover {
    color: #f4a300;
}

/* Responsive */
@media (max-width: 992px) {
    .desktop-nav {
        display: none;
    }
    
    .mobile-toggle {
        display: flex;
    }
}

@media (max-width: 480px) {
    .logo-text {
        font-size: 20px;
    }
    .logo-icon {
        width: 36px;
        height: 44px;
        font-size: 22px;
    }
}













/* Hero Section */
.hero {
    position: relative;
    background: linear-gradient(rgba(26, 43, 75, 0.85), rgba(26, 43, 75, 0.205)), 
                url('./hero.jpg') center/cover no-repeat;
    color: white;
    padding: 200px 0 140px;
    text-align: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(30, 58, 95, 0.356), rgba(44, 96, 141, 0.212));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 1000px;
    margin: 0 auto;
}

/* Trust Badge */
.trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(244, 163, 0, 0.15);
    border: 1px solid #f4a300;
    color: #f4a300;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
}


/* Hero Title */
.hero-title {
    font-size: 64px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 30px;
    color: white;
}

.hero-title .highlight {
    color: #f4a300;
    font-size: 68px;
}

/* Description */
.hero-description {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto 50px;
    line-height: 1.8;
    opacity: 0.95;
    color: #e0e7ff;
}

/* CTA Buttons */
.cta-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

.btn-primary, .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    min-width: 220px;
    justify-content: center;
}

.btn-primary {
    background: #f4a300;
    color: #1a1a1a;
    box-shadow: 0 8px 25px rgba(244, 163, 0, 0.3);
}

.btn-primary:hover {
    background: #e69500;
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(244, 163, 0, 0.4);
}

.btn-primary .arrow {
    font-size: 20px;
    font-weight: bold;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #f4a300;
    color: #f4a300;
    transform: translateY(-3px);
}

.btn-icon {
    font-size: 20px;
}

/* Language Support */
.language-support {
    margin-top: 60px;
}

.language-label {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    opacity: 0.8;
    color: #b0c4de;
}

.language-tags {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
}

.language-tag {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.language-tag:hover {
    background: rgba(244, 163, 0, 0.2);
    border-color: #f4a300;
    color: #f4a300;
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.mouse-icon {
    font-size: 32px;
    opacity: 0.7;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Responsive */
@media (max-width: 992px) {
    .hero-title {
        font-size: 52px;
    }
    .hero-title .highlight {
        font-size: 56px;
    }
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    .btn-primary, .btn-secondary {
        width: 300px;
    }
}

@media (max-width: 768px) {
    .hero {
        padding: 160px 0 100px;
    }
    .hero-title {
        font-size: 44px;
    }
    .hero-title .highlight {
        font-size: 48px;
    }
    .hero-description {
        font-size: 17px;
        padding: 0 20px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 38px;
    }
    .hero-title .highlight {
        font-size: 42px;
    }
    .trust-badge {
        font-size: 14px;
        padding: 8px 20px;
    }
}




        /* Section Styles */
        section {
            padding: 80px 0;
        }

        .section-title {
            text-align: center;
            font-size: 38px;
            color: var(--primary);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 50px;
            font-size: 18px;
        }









 /* About Section */
        .about {
            background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
        }



        .container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .about-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: start;
        }

        /* Left Section */
        .about-left {
            animation: fadeInLeft 0.8s ease;
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .about-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #fff4e0 0%, #ffe9c2 100%);
            color: #f4a300;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 25px;
            border: 1px solid rgba(244, 163, 0, 0.2);
            box-shadow: 0 4px 15px rgba(244, 163, 0, 0.1);
        }

        .about-title {
            font-size: 52px;
            color: #1a1a1a;
            margin-bottom: 30px;
            line-height: 1.2;
            font-weight: 800;
        }

        .about-title br {
            display: block;
        }

        .about-description {
            color: #4a4a4a;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 25px;
        }

        .about-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 50px;
        }

        .stat-box {
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            padding: 30px;
            border-radius: 20px;
            border: 2px solid #f0f0f0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }


        .stat-box:hover::before {
            width: 100%;
            opacity: 0.05;
        }

        .stat-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(255, 191, 15, 0.15);
        }

        .stat-box-number {
            font-size: 42px;
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 8px;
            display: block;
            position: relative;
            z-index: 1;
        }

        .stat-box-number.highlight {
            background: linear-gradient(135deg, #f4a300 0%, #ff8c00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-box-label {
            color: #6b6b6b;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
            z-index: 1;
        }

        /* Right Section - Mission & Vision */
        .about-right {
            animation: fadeInRight 0.8s ease;
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .mission-vision-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        /* Vision Card */
        .vision-card {
            background: linear-gradient(135deg, #00a3a3 0%, #00c9c9 100%);
            padding: 45px;
            border-radius: 24px;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 163, 163, 0.3);
        }


        .vision-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .vision-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .vision-title {
            font-size: 28px;
            font-weight: 700;
            margin: 0;
        }

        .vision-text {
            font-size: 16px;
            line-height: 1.8;
            opacity: 0.95;
            position: relative;
            z-index: 1;
        }

        /* Mission Card */
        .mission-card {
            background: white;
            padding: 45px;
            border-radius: 24px;
            border: 2px solid #f0f0f0;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
            position: relative;
            overflow: hidden;
        }

        .mission-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .mission-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #fff4e0 0%, #ffe9c2 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .mission-title {
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
        }

        .mission-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .mission-item {
            display: flex;
            align-items: start;
            gap: 15px;
            padding: 18px 0;
            border-bottom: 1px solid #f5f5f5;
            transition: all 0.3s ease;
        }

        .mission-item:last-child {
            border-bottom: none;
        }

        .mission-item:hover {
            padding-left: 10px;
        }

        .mission-bullet {
            width: 28px;
            height: 28px;
            background: linear-gradient(135deg, #f4a300 0%, #ff8c00 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 14px;
            color: white;
            font-weight: 700;
            margin-top: 2px;
        }

        .mission-text {
            font-size: 15px;
            color: #4a4a4a;
            line-height: 1.7;
            flex: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .about-wrapper {
                grid-template-columns: 1fr;
                gap: 60px;
            }

            .about-title {
                font-size: 42px;
            }
        }

        @media (max-width: 768px) {
            .about {
                padding: 80px 20px;
            }

            .about-title {
                font-size: 36px;
            }

            .about-stats {
                grid-template-columns: 1fr;
            }

            .vision-card,
            .mission-card {
                padding: 35px 25px;
            }

            .vision-title,
            .mission-title {
                font-size: 24px;
            }
        }

        @media (max-width: 480px) {
            .about-title {
                font-size: 32px;
            }

            .stat-box-number {
                font-size: 36px;
            }

            .mission-item {
                gap: 12px;
            }

            .mission-bullet {
                width: 24px;
                height: 24px;
                font-size: 12px;
            }
        }






/* Services Section */
.services {
    background: #fafafa;
    padding: 100px 0;
    text-align: center;
}

.services-header {
    margin-bottom: 60px;
}

.section-title {
    font-size: 52px;
    color: #1a1a1a;
    margin-bottom: 30px;
    line-height: 1.2;
    font-weight: 800;
}

.section-subtitle {
    color: #6b6b6b;
    font-size: 16px;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.service-card {
    background: #ffffff;
    padding: 40px 25px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.icon-box {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
}

.service-icon {
    font-size: 32px;
}

.service-card h3 {
    color: #1a1a1a;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;
}

.service-subtitle {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 15px;
}

.service-desc {
    color: #6b6b6b;
    font-size: 15px;
    line-height: 1.7;
    margin: 15px 0 0;
}

.service-desc.small {
    font-size: 14px;
    margin-top: 10px;
}

.service-list {
    text-align: left;
    color: #6b6b6b;
    font-size: 15px;
    line-height: 1.7;
    margin: 15px 0;
    padding-left: 20px;
}

.service-list li {
    margin-bottom: 8px;
}

/* Updated individual card colors to match new services */
.icon-box { background: #e0f7f7; }
.service-subtitle { color: #00a3a3; }
/* 
.services-grid .service-card:nth-child(2) .icon-box { background: #fff4e0; }
.services-grid .service-card:nth-child(2) .service-subtitle { color: #f4a300; }

.services-grid .service-card:nth-child(3) .icon-box { background: #e0e8ff; }
.services-grid .service-card:nth-child(3) .service-subtitle { color: #406eff; }

.services-grid .service-card:nth-child(4) .icon-box { background: #e0f7f7; }
.services-grid .service-card:nth-child(4) .service-subtitle { color: #00a3a3; }

.services-grid .service-card:nth-child(5) .icon-box { background: #ffe8e0; }
.services-grid .service-card:nth-child(5) .service-subtitle { color: #ff6b35; } */

/* Responsive adjustments */
@media (max-width: 992px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .services-header >.section-title {
        font-size: 42px;
    }
}

@media (max-width: 768px) {
    .services-header >.section-title {
        font-size: 36px;
    }
}

@media (max-width: 480px) {
    .services-header >.section-title {
        font-size: 32px;
    }
}





/* How It Works Section */
.how-it-works {
    background: #4e4e4e; /* Dark blue background */
    padding: 120px 0;
    color: #ffffff;
    text-align: center;
}

.process-header {
    margin-bottom: 80px;
}

.process-title {
    font-size: 52px;
    color: #ffffff;
    margin-bottom: 30px;
    line-height: 1.2;
    font-weight: 800;
}

.process-subtitle {
    font-size: 16px;
    color: #b0c4de;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    align-items: start;
}

.step-card {
    position: relative;
}

.step-icon-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
}

.step-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
}

.step-icon > svg{
    width: 50px;
}

.step-number {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 36px;
    height: 36px;
    background: #f4a300;
    color: #1a1a1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 4px 10px rgba(244, 163, 0, 0.3);
}

.step-title {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 15px;
    font-weight: 600;
    position: relative;
    display: inline-block;
}

.step-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #f4a300;
    border-radius: 2px;
}

.step-desc {
    font-size: 15px;
    color: #b0c4de;
    line-height: 1.7;
    margin: 0;
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
}

/* Responsive */
@media (max-width: 1200px) {
    .steps-grid {
        gap: 30px;
    }
    .step-desc {
        max-width: 200px;
    }
}

@media (max-width: 992px) {
    .steps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
}

@media (max-width: 600px) {
    .steps-grid {
        grid-template-columns: 1fr;
    }
    .how-it-works {
        padding: 80px 0;
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .process-title {
        font-size: 42px;
    }
}

@media (max-width: 768px) {
    .process-title {
        font-size: 36px;
    }
}

@media (max-width: 480px) {
    .process-title {
        font-size: 32px;
    }
}





/* Global Presence Section */
        .global-presence-section {
            background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
        }

        .global-presence-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 30%, rgba(0, 163, 163, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(244, 163, 0, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        /* Floating dots background */
        .global-presence-section::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-image: 
                radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.3;
            animation: float 20s linear infinite;
        }

        @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50px); }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .global-header {
            text-align: center;
            margin-bottom: 80px;
            animation: fadeInUp 0.8s ease;
        }

        .global-header > .section-title{
            color: white;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .global-label {
            display: inline-block;
            background: linear-gradient(135deg, #e0f7f7 0%, #d0f0f0 100%);
            color: #00a3a3;
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 24px;
            box-shadow: 0 4px 15px rgba(0, 163, 163, 0.1);
        }


        .global-header > .section-title {
            font-size: 56px;
            color: #ffffff;
            margin: 20px 0;
            font-weight: 800;
            line-height: 1.2;
        }

        .section-subtitle {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.8;
        }

        /* Map and Stats Container */
        .map-section {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 32px;
            padding: 60px;
            margin-bottom: 60px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        #lottie-map {
            width: 100%;
            height: 500px;
            margin-bottom: 40px;
        }

        .map-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            padding-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
            text-align: center;
            padding: 25px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
        }

        .stat-item:hover {
            background: rgba(0, 163, 163, 0.1);
            border-color: rgba(0, 163, 163, 0.3);
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 42px;
            font-weight: 800;
            background: linear-gradient(135deg, #00e5e5 0%, #00a3a3 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            margin-bottom: 8px;
        }

        .stat-label {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        /* Countries Section */
        .countries-section {
            text-align: center;
        }

        .countries-title {
            font-size: 52px;
            color: #ffffff;
            margin-bottom: 40px;
            font-weight: 700;
        }

        .countries-title span {
            background: linear-gradient(135deg, #00e5e5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .countries-cloud {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .country-tag {
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 50px;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .country-tag::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(0, 163, 163, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.5s ease, height 0.5s ease;
        }

        .country-tag:hover::before {
            width: 300px;
            height: 300px;
        }

        .country-tag:hover {
            background: rgba(0, 163, 163, 0.2);
            border-color: #00e5e5;
            color: #00e5e5;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 163, 163, 0.3);
        }

        .country-tag.featured {
            background: linear-gradient(135deg, rgba(0, 163, 163, 0.3) 0%, rgba(0, 229, 229, 0.2) 100%);
            border: 1px solid #00e5e5;
            color: #00e5e5;
            font-weight: 600;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 0 20px rgba(0, 229, 229, 0.4);
            }
            50% {
                box-shadow: 0 0 40px rgba(0, 229, 229, 0.6);
            }
        }

        .countries-footer {
            margin-top: 50px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            display: inline-block;
        }

        .countries-footer p {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            margin: 0;
        }

        .countries-footer p strong {
            color: #00e5e5;
            font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .map-stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .global-header > .section-title{
                font-size: 36px;
            }
            .global-presence-section {
                padding: 80px 20px;
            }

            .map-section {
                padding: 40px 30px;
            }

            #lottie-map {
                height: 350px;
            }

            .map-stats {
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }

            .stat-number {
                font-size: 32px;
            }

            .stat-item {
                padding: 20px 15px;
            }

            .countries-title {
                font-size: 26px;
            }

            .country-tag {
                padding: 10px 18px;
                font-size: 14px;
            }
        }

        @media (max-width: 480px) {
            .services-header >.section-title {
                font-size: 32px;
            }

            .section-subtitle {
                font-size: 16px;
            }

            .map-section {
                padding: 30px 20px;
            }

            #lottie-map {
                height: 250px;
            }

            .map-stats {
                grid-template-columns: 1fr;
            }

            .country-tag {
                padding: 8px 16px;
                font-size: 13px;
            }
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .services-header >.section-title {
                font-size: 42px;
            }
        }








/* Journey Section */
        .journey {
            background: linear-gradient(135deg, #ffffff 0%, #f0fffe 100%);
            padding: 120px 0;
            position: relative;
            overflow: hidden;
        }

        .journey::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(0, 163, 163, 0.05) 0%, transparent 70%);
            border-radius: 50%;
        }

        .journey::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -5%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 163, 163, 0.03) 0%, transparent 70%);
            border-radius: 50%;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 1;
        }

        .journey-header {
            text-align: center;
            margin-bottom: 100px;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .journey-label {
            display: inline-block;
            background: linear-gradient(135deg, #e0f7f7 0%, #d0f0f0 100%);
            color: #00a3a3;
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 24px;
            box-shadow: 0 4px 15px rgba(0, 163, 163, 0.1);
        }


        .journey-header > .section-title {
            font-size: 56px;
            color: #1a1a1a;
            margin: 24px 0;
            font-weight: 800;
            line-height: 1.2;
            background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            font-size: 18px;
            color: #6b6b6b;
            max-width: 850px;
            margin: 0 auto;
            line-height: 1.8;
            font-weight: 400;
        }

        .journey-timeline {
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            padding: 40px 0;
        }

/* Updated Vertical Line with Fade-In at Both Ends */
.journey-timeline::before {
    content: '';
    position: absolute;
    width: 3px;
    background: linear-gradient(
        180deg,
        transparent 0%,      /* Fully transparent at top */
        rgba(0, 163, 163, 0.3) 15%,
        #00a3a3 30%,         /* Full color starts around 30% */
        #00a3a3 70%,         /* Full color until 70% */
        rgba(0, 163, 163, 0.3) 85%,
        transparent 100%     /* Fully transparent at bottom */
    );
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
    border-radius: 3px;
    z-index: 0;
}

        .timeline-item {
            position: relative;
            margin-bottom: 80px;
            opacity: 0;
            animation: slideIn 0.6s ease-out forwards;
            display: flex;
            align-items: flex-start;
            min-height: 120px;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        /* Left side items (odd) */
        .timeline-item:nth-child(odd) {
            justify-content: flex-end;
        }

        .timeline-item:nth-child(odd) .timeline-year {
            order: 1;
            text-align: left;
            padding-left: 50px;
        }

        .timeline-item:nth-child(odd) .timeline-content {
            order: 0;
            margin-right: 50px;
        }

        /* Right side items (even) */
        .timeline-item:nth-child(even) {
            justify-content: flex-start;
        }

        .timeline-item:nth-child(even) .timeline-year {
            justify-content: flex-end;
            order: 0;
            text-align: right;
            padding-right: 50px;
        }

        .timeline-item:nth-child(even) .timeline-content {
            order: 1;
            margin-left: 50px;
        }

        .timeline-year {
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 20px;
        }

        .year-badge {
            display: inline-block;
            background: linear-gradient(135deg, #00a3a3 0%, #008585 100%);
            color: #ffffff;
            padding: 12px 28px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 20px rgba(0, 163, 163, 0.3);
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .timeline-item:hover .year-badge {
            transform: scale(1.05);
            box-shadow: 0 12px 28px rgba(0, 163, 163, 0.4);
        }

        /* Center dot - positioned absolutely relative to timeline */
        .timeline-item::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 30px;
            transform: translateX(-50%);
            width: 24px;
            height: 24px;
            background: #ffffff;
            border: 4px solid #00a3a3;
            border-radius: 50%;
            z-index: 2;
            box-shadow: 0 0 0 8px rgba(0, 163, 163, 0.1);
            transition: all 0.3s ease;
        }

        .timeline-item:hover::before {
            width: 28px;
            height: 28px;
            top: 28px;
            box-shadow: 0 0 0 12px rgba(0, 163, 163, 0.15);
        }

        .timeline-content {
            width: 50%;
            background: #ffffff;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            position: relative;
            transition: all 0.4s ease;
            border: 2px solid transparent;
        }

        /* Arrow pointers */
        .timeline-content::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            top: 35px;
        }

        .timeline-item:nth-child(odd) .timeline-content::after {
            border-width: 12px 0 12px 16px;
            border-color: transparent transparent transparent #ffffff;
            right: -16px;
        }

        .timeline-item:nth-child(even) .timeline-content::after {
            border-width: 12px 16px 12px 0;
            border-color: transparent #ffffff transparent transparent;
            left: -16px;
        }

        .timeline-item:hover .timeline-content {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(0, 163, 163, 0.15);
            border-color: rgba(0, 163, 163, 0.2);
        }

        .timeline-content h3 {
            font-size: 24px;
            color: #1a1a1a;
            margin-bottom: 16px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .timeline-content h3::before {
            content: '';
            width: 6px;
            height: 28px;
            background: linear-gradient(180deg, #00a3a3 0%, #008585 100%);
            border-radius: 3px;
            flex-shrink: 0;
        }

        .timeline-content p {
            font-size: 16px;
            color: #6b6b6b;
            line-height: 1.8;
            margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 992px) {

            .journey-timeline::before {
                left: 45px;
                margin-left: 0;
            }

            .timeline-item {
                flex-direction: row;
                justify-content: flex-start !important;
                padding-left: 80px;
            }

            .timeline-item::before {
                left: 30px;
                transform: translateX(0);
            }

            .timeline-item:hover::before {
                left: 29px;
            }

            .timeline-item:nth-child(odd) .timeline-year,
            .timeline-item:nth-child(even) .timeline-year {
                order: 0;
                width: auto;
                text-align: left;
                padding: 0;
                padding-top: 20px;
                margin-right: 20px;
            }

            .timeline-item:nth-child(odd) .timeline-content,
            .timeline-item:nth-child(even) .timeline-content {
                order: 1;
                width: auto;
                flex: 1;
                margin: 0;
            }

            .timeline-content::after {
                display: none;
            }

            .timeline-content {
                padding: 30px;
            }
        }

        @media (max-width: 768px) {
            .journey {
                padding: 80px 0;
            }

            .journey-header {
                margin-bottom: 60px;
            }

            .journey-header > .section-title {
                font-size: 36px;
            }

            .section-subtitle {
                font-size: 16px;
            }

            .timeline-item {
                margin-bottom: 60px;
                flex-direction: column;
                align-items: flex-start;
            }

            .timeline-item:nth-child(odd) .timeline-year,
            .timeline-item:nth-child(even) .timeline-year {
                margin-bottom: 15px;
                padding-top: 0;
            }

            .timeline-content {
                padding: 25px;
                width: 100%;
            }

            .timeline-content h3 {
                font-size: 20px;
            }

            .timeline-content p {
                font-size: 15px;
            }

            .year-badge {
                font-size: 14px;
                padding: 10px 20px;
            }
        }

        @media (max-width: 576px) {
            .section-title {
                font-size: 32px;
            }

            .journey-timeline::before {
                left: 20px;
            }

            .timeline-item {
                padding-left: 60px;
                margin-bottom: 50px;
            }

            .timeline-item::before {
                left: 8px;
                width: 20px;
                height: 20px;
                top: 10px;
            }

            .timeline-item:hover::before {
                left: 4px;
                top: 9px;
            }

            .year-badge {
                padding: 8px 16px;
                font-size: 13px;
            }

            .timeline-content {
                padding: 20px;
            }

            .timeline-content h3 {
                font-size: 18px;
            }

            .timeline-content h3::before {
                width: 4px;
                height: 24px;
            }
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .journey-header > .section-title {
                font-size: 42px;
            }
        }

        @media (max-width: 480px) {
            .journey-header > .section-title {
                font-size: 32px;
            }
        }







/* Testimonials Section */
.testimonials {
    overflow: hidden;
    background: #fafafa;
    padding: 100px 0;
    text-align: center;
}

.testimonials-header {
    margin-bottom: 60px;
}

.testimonials-label {
    display: inline-block;
    background: #fff3e0;
    color: #f4a300;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
}

.testimonials-header>.testimonials-title {
    font-size: 52px;
    color: #1a1a1a;
    margin: 20px 0;
    font-weight: 700;
    line-height: 1.2;
}

.testimonials-subtitle {
    font-size: 16px;
    color: #6b6b6b;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
}

.testimonial-carousel {
    position: relative;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

.carousel-inner {
    display: flex;
    transition: transform 0.6s ease-in-out;
    width: 100%;
}

.carousel-slide {
    min-width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
}

.testimonial-card {
    background: #ffffff;
    padding: 50px 40px;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.116);
    text-align: left;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.quote-icon {
    font-size: 100px;
    color: #f4a300;
    position: absolute;
    top: -20px;
    left: 30px;
    line-height: 1;
    font-family: Georgia, serif;
}

.stars {
    color: #f4a300;
    font-size: 20px;
    margin-bottom: 20px;
    letter-spacing: 4px;
}

.testimonial-text {
    font-size: 18px;
    color: #444;
    line-height: 1.8;
    margin: 20px 0 30px;
    font-style: italic;
}

.author-info {
    font-size: 16px;
    color: #1a1a1a;
}

.author-info strong {
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
}

.author-info span {
    color: #6b6b6b;
    font-size: 15px;
}

/* Navigation Arrows */
.carousel-prev,
.carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 28px;
    color: #1a1a1a;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 10;
}

.active > .testimonial-card {
  transform: scale(1.1); /* Increases size by 10% */
  transition: transform 0.8s ease-in-out; /* Smooths the change */
}

.carousel-prev {
    left: 20px;
}

.carousel-next {
    right: 20px;
}

.carousel-prev:hover,
.carousel-next:hover {
    background: #f4a300;
    color: white;
    transform: translateY(-50%) scale(1.1);
}

/* Dots */
.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}

.dot {
    width: 12px;
    height: 12px;
    background: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot.active,
.dot:hover {
    background: #f4a300;
    transform: scale(1.2);
}

/* Responsive */
@media (max-width: 1024px) {
    .testimonials-header>.testimonials-title {
        font-size: 42px;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .testimonials-header>.testimonials-title {
        font-size: 36px;
    }
    .testimonial-card {
        padding: 40px 30px;
    }
    .carousel-prev,
    .carousel-next {
        width: 40px;
        height: 40px;
        font-size: 24px;
    }
    .carousel-prev {
        left: 10px;
    }
    .carousel-next {
        right: 10px;
    }
}

@media (max-width: 480px) {
    .carousel-slide {
        padding: 0 40px;
    }
    .quote-icon {
        font-size: 60px;
        left: 20px;
    }

    .testimonials-header>.testimonials-title {
        font-size: 32px;
    }
}







/* Why Choose Us Section */
.why-choose {
    background: #fafafa;
    padding: 100px 0;
    text-align: center;
}

.why-header {
    margin-bottom: 60px;
}

.why-label {
    display: inline-block;
    background: #e0f7f7;
    color: #00a3a3;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
}

.why-header>.why-title {
    font-size: 52px;
    color: #1a1a1a;
    margin: 20px 0;
    font-weight: 700;
    line-height: 1.2;
}

.why-subtitle {
    font-size: 16px;
    color: #6b6b6b;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.why-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 35px 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: flex-start;
    gap: 20px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.why-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.why-icon {
    width: 60px;
    height: 60px;
    background: #e0f7f7;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    flex-shrink: 0;
    color: #00a3a3;
}

.why-content h3 {
    font-size: 19px;
    color: #1a1a1a;
    margin-bottom: 12px;
    font-weight: 600;
}

.why-content p {
    font-size: 15px;
    color: #6b6b6b;
    line-height: 1.7;
    margin: 0;
}

/* Optional: Varied icon background colors for visual interest */
.why-grid .why-card:nth-child(1) .why-icon { background: #e0f7f7; color: #00a3a3; }
.why-grid .why-card:nth-child(2) .why-icon { background: #fff4e0; color: #f4a300; }
.why-grid .why-card:nth-child(3) .why-icon { background: #e0e8ff; color: #406eff; }
.why-grid .why-card:nth-child(4) .why-icon { background: #ffe8e0; color: #ff6b35; }
.why-grid .why-card:nth-child(5) .why-icon { background: #e8ffe8; color: #00aa00; }
.why-grid .why-card:nth-child(6) .why-icon { background: #f2f2f2; color: #666666; }

/* Responsive */
@media (max-width: 992px) {
    .why-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .why-header>.why-title {
        font-size: 36px;
    }
    .why-card {
        padding: 30px 25px;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .why-icon {
        margin-bottom: 15px;
    }
}

@media (max-width: 576px) {
    .why-grid {
        grid-template-columns: 1fr;
    }
    .why-card {
        padding: 35px 25px;
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .why-header>.why-title {
        font-size: 42px;
    }
}

@media (max-width: 480px) {
    .why-header>.why-title {
        font-size: 32px;
    }
}













/* Simplified Combined Section - Dark Blue Background */
.combined-cta-contact {
    background: #1a2b4b;
    color: #ffffff;
    padding: 140px 20px 120px;
    text-align: center;
}

.combined-cta-contact .container {
    max-width: 1200px;
}

.cta-content {
    max-width: 900px;
    margin: 0 auto 100px;
}

.cta-title {
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.2;
    color: #ffffff;
}

.cta-subtitle {
    font-size: 52px;
    font-weight: 700;
    color: #f4a300;
    margin-bottom: 20px;
    line-height: 1.2;
}

.cta-desc {
    font-size: 18px;
    color: #b0c4de;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
}



/* Responsive */
@media (max-width: 1024px) {
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .cta-title{
        font-size: 42px;
    }
}

@media (max-width: 992px) {
    .cta-title { font-size: 44px; }
    .cta-subtitle { font-size: 40px; }
}

@media (max-width: 768px) {
    .combined-cta-contact { padding: 100px 20px; }
    .cta-title { font-size: 36px; }
    .cta-subtitle { font-size: 36px; }
}

@media (max-width: 480px) {
    .info-card { flex-direction: column; text-align: center; gap: 15px; }
    .info-icon { margin-bottom: 10px; }
    .cta-title { font-size: 32px; }
}

/* Contact Section */
.contact {
    background: #fafafa;
    padding: 100px 0;
}

.contact-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.contact-label {
    display: inline-block;
    background: #fff3e0;
    color: #f4a300;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
}

.contact-title {
    font-size: 48px;
    color: #1a1a1a;
    margin: 20px 0;
    font-weight: 700;
    line-height: 1.2;
}

.contact-subtitle {
    font-size: 16px;
    color: #6b6b6b;
    line-height: 1.8;
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    align-items: start;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info-card {
    background: #ffffff;
    padding: 25px 30px;
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    text-align: left;
    gap: 20px;
    transition: transform 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
}

.info-icon {
    width: 56px;
    height: 56px;
    background: #ffa703;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    flex-shrink: 0;
}

.info-content strong {
    display: block;
    font-size: 16px;
    color: #1a1a1a;
    margin-bottom: 6px;
    font-weight: 600;
}

.info-content p {
    color: #1a1a1a;
    font-weight: 500;
    margin: 0;
    font-size: 15px;
}

.info-content a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
}

.info-content a:hover {
    color: #f4a300;
}

.contact-form-card {
    background: #ffffff;
    padding: 50px 40px;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.form-title {
    font-size: 24px;
    color: #1a1a1a;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: center;
}

.form-group {
    position: relative;
    margin-bottom: 25px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 18px 20px;
    border: none;
    border-radius: 16px;
    background: #f8f9fa;
    font-size: 16px;
    color: #1a1a1a;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(244, 163, 0, 0.2);
}

.form-group textarea {
    min-height: 140px;
    resize: vertical;
}

.form-group label {
    position: absolute;
    left: 20px;
    top: 18px;
    font-size: 16px;
    color: #aaa;
    pointer-events: none;
    transition: all 0.3s ease;
    font-weight: 500;
}

.form-group input:focus ~ label,
.form-group input:valid ~ label,
.form-group select:focus ~ label,
.form-group select:valid ~ label,
.form-group textarea:focus ~ label,
.form-group textarea:valid ~ label {
    top: -10px;
    left: 15px;
    font-size: 13px;
    background: #ffffff;
    padding: 0 8px;
    color: #f4a300;
    font-weight: 600;
}

.btn-send {
    width: 100%;
    background: linear-gradient(135deg, #f4a300, #e69500);
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 600;
    padding: 18px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 10px;
    box-shadow: 0 8px 25px rgba(244, 163, 0, 0.3);
    transition: all 0.3s ease;
}

.btn-send:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(244, 163, 0, 0.4);
}

.send-icon {
    font-size: 20px;
}

/* Responsive */
@media (max-width: 1024px) {
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    .contact-header {
        text-align: left;
    }
    .contact-title {
        font-size: 42px;
    }
}

@media (max-width: 768px) {
    .contact-title {
        font-size: 38px;
    }
    .contact-form-card {
        padding: 40px 30px;
    }
    .info-card {
        padding: 20px 25px;
    }
}

@media (max-width: 480px) {
    .info-card {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    .info-icon {
        margin-bottom: 10px;
    }
}

        /* Footer */
        footer {
            background: var(--primary);
            color: var(--white);
            padding: 50px 0 30px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 30px;
        }

        .footer-section h3 {
            color: var(--secondary);
            margin-bottom: 20px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: var(--white);
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
            color: var(--secondary);
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            background: var(--white);
            color: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s;
        }

        .social-icon:hover {
            background: var(--secondary);
            color: var(--white);
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            opacity: 0.8;
        }

        .consequences_reminder {
            display: none;
        }

        /* Animations - Removed */

        /* Responsive */
        @media (max-width: 768px) {
            nav ul {
                display: none;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(30, 58, 95, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            }

            nav ul.active {
                display: flex;
            }

            .mobile-menu {
                display: flex;
            }

            .header-btn {
                display: none;
            }

            .hero {
                padding: 140px 0 100px;
            }

            .hero h1 {
                font-size: 36px;
            }

            .hero h1 .highlight {
                font-size: 36px;
            }

            .hero-description {
                font-size: 16px;
            }

            .trust-badge {
                font-size: 12px;
                padding: 8px 20px;
            }

            .about-content,
            .contact-grid {
                grid-template-columns: 1fr;
            }

            .about-features {
                grid-template-columns: 1fr;
            }

            .about-text h3 {
                font-size: 32px;
            }

            .about-stats {
                flex-direction: column;
                gap: 15px;
            }

            .steps {
                flex-direction: column;
            }

            .section-title {
                font-size: 28px;
            }

            .cta-section h2 {
                font-size: 28px;
            }

            .language-tags {
                gap: 10px;
            }

            .language-tag {
                font-size: 13px;
                padding: 6px 14px;
            }

            .btn {
                padding: 14px 28px;
                font-size: 14px;
            }
        }

        /* Scroll Animation - Removed */
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    
<!-- Header / Navbar -->
<header class="navbar">
    <div class="container">
        <div class="navbar-content">
            <!-- Logo -->
            <a href="#" class="logo-group">
                    <img src="./Sasa Pub Logo.jpg" width="160" alt="">
            </a>

            <!-- Desktop Nav -->
            <nav class="desktop-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#how-it-works">Process</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" class="publish-btn">Publish With Us</a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div class="mobile-menu-panel">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">Process</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" class="publish-btn mobile">Publish With Us</a>
    </div>
</header></header>

<!-- Hero Section -->
<section class="hero" id="home">
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content">
            <!-- Trust Badge -->
            <div class="trust-badge">
                Trusted by 1000+ Authors Worldwide
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title">
                Global Academic<br> <span class="highlight">Publishing & Research </span>Support Partner
               
            </h1>

            <!-- Description -->
            <p class="hero-description">
                SASA Publications is a leading publishing and research support company helping authors and researchers publish books, journals, thesis, and conference papers globally.
            </p>

            <!-- CTA Buttons -->
            <div class="cta-buttons">
                <a href="#contact" class="btn-primary">
                    Publish With Us <span class="arrow">→</span>
                </a>
            </div>

            <!-- Language Support -->
            <!-- <div class="language-support">
                <p class="language-label">Supporting Multi-Language Publishing</p>
                <div class="language-tags">
                    <span class="language-tag">English</span>
                    <span class="language-tag">Tamil</span>
                    <span class="language-tag">Hindi</span>
                    <span class="language-tag">Telugu</span>
                    <span class="language-tag">Kannada</span>
                    <span class="language-tag">Malayalam</span>
                </div>
            </div> -->

            <!-- Scroll Indicator -->
            <div class="scroll-indicator">
                <span class="mouse-icon">🖱️</span>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<!-- <section class="about fade-in" id="about">
    <div class="container">
        <div class="about-wrapper">
            <div class="about-left">
                <span class="about-label">About Us</span>
                <h2 class="about-title">Empowering Authors &<br>Researchers Globally</h2>
                <p class="about-description">
                    SASA Publications is a global academic publishing and research support organization, established in 2018. What began as a focused book publishing initiative for Indian authors has grown into a comprehensive academic solutions platform serving researchers, scholars, professionals, and universities across the world.
                We support the academic ecosystem through ethical publishing practices, transparent workflows, and customized research solutions guiding clients from research ideation to global publication, patent filing, and institutional accreditation support.

                <p class="about-description">
                   Today, Business SASA Publications is recognized as a trusted academic partner, delivering end-to-end research and publishing services across diverse disciplines and international standards.
                </p>
                </p>
                <div class="about-stats">
                    <div class="stat-box">
                        <div class="stat-box-number">7+</div>
                        <div class="stat-box-label">Years Experience</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-box-number highlight">24/7</div>
                        <div class="stat-box-label">Author Support</div>
                    </div>
                </div>
            </div>
            <div class="about-right">
                <div class="feature-card">
                    <div class="feature-icon">📖</div>
                    <h4>Comprehensive Publishing</h4>
                    <p>From manuscript to publication with expert guidance at every step</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h4>Global Reach</h4>
                    <p>Publishing services reaching researchers across 10+ countries</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h4>Author-Centric</h4>
                    <p>Dedicated support team ensuring your publishing success</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">✓</div>
                    <h4>Quality Assured</h4>
                    <p>Rigorous editorial and technical review processes</p>
                </div>
            </div>
        </div>
    </div>
</section> -->
<section class="about fade-in" id="about">
        <div class="container">
            <div class="about-wrapper">
                <div class="about-left">
                    <span class="about-label">About Us</span>
                    <h2 class="about-title">Empowering Authors &<br>Researchers Globally</h2>
                    <p class="about-description">
                        SASA Publications is a global academic publishing and research support organization, established in 2018. What began as a focused book publishing initiative for Indian authors has grown into a comprehensive academic solutions platform serving researchers, scholars, professionals, and universities across the world.
                    </p>
                    <p class="about-description">
                        We support the academic ecosystem through ethical publishing practices, transparent workflows, and customized research solutions guiding clients from research ideation to global publication, patent filing, and institutional accreditation support.
                    </p>
                    <p class="about-description">
                        Today, SASA Publications is recognized as a trusted academic partner, delivering end-to-end research and publishing services across diverse disciplines and international standards.
                    </p>
                    <div class="about-stats">
                        <div class="stat-box">
                            <div class="stat-box-number">7+</div>
                            <div class="stat-box-label">Years Experience</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-number highlight">24/7</div>
                            <div class="stat-box-label">Author Support</div>
                        </div>
                    </div>
                </div>

                <div class="about-right">
                    <div class="mission-vision-container">
                        <!-- Vision Card -->
                        <div class="vision-card">
                            <div class="vision-header">
                                <div class="vision-icon">🎯</div>
                                <h3 class="vision-title">Our Vision</h3>
                            </div>
                            <p class="vision-text">
                                To become a globally recognized academic solutions provider, empowering researchers, authors, and institutions through innovative, ethical, and high-quality publishing and research support.
                            </p>
                        </div>

                        <!-- Mission Card -->
                        <div class="mission-card">
                            <div class="mission-header">
                                <div class="mission-icon">🚀</div>
                                <h3 class="mission-title">Our Mission</h3>
                            </div>
                            <ul class="mission-list">
                                <li class="mission-item">
                                    <div class="mission-bullet">✓</div>
                                    <div class="mission-text">To promote ethical academic publishing worldwide</div>
                                </li>
                                <li class="mission-item">
                                    <div class="mission-bullet">✓</div>
                                    <div class="mission-text">To bridge researchers with global indexing & publishing platforms</div>
                                </li>
                                <li class="mission-item">
                                    <div class="mission-bullet">✓</div>
                                    <div class="mission-text">To deliver end-to-end research solutions under one roof</div>
                                </li>
                                <li class="mission-item">
                                    <div class="mission-bullet">✓</div>
                                    <div class="mission-text">To uphold integrity, confidentiality, and academic excellence</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>


<!-- Journey Section -->
<section class="journey" id="journey">
    <div class="container">
        <div class="journey-header">
            <span class="journey-label">Our Journey</span>
            <h2 class="section-title">Our Journey</h2>
            <p class="section-subtitle">From a focused book publishing house to a comprehensive academic support partner—milestones that define our growth and commitment to excellence.</p>
        </div>

        <div class="journey-timeline">
            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">2018</span>
                </div>
                <div class="timeline-content">
                    <h3>Foundation Year</h3>
                    <p>Founded as a professional book publishing company dedicated to Indian authors.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">Post-2018</span>
                </div>
                <div class="timeline-content">
                    <h3>Global Expansion</h3>
                    <p>Expanded into international book publishing and conference proceedings.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">Next Phase</span>
                </div>
                <div class="timeline-content">
                    <h3>Journal Services Launch</h3>
                    <p>Introduced journal publication services for Scopus, Web of Science, and EI Indexed journals.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">Growth Stage</span>
                </div>
                <div class="timeline-content">
                    <h3>Researcher Support</h3>
                    <p>Launched comprehensive author and researcher support services.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">Recent</span>
                </div>
                <div class="timeline-content">
                    <h3>Patent Collaborations</h3>
                    <p>Established strategic collaborations for UK- and India-based patent filing services.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">
                    <span class="year-badge">Ongoing</span>
                </div>
                <div class="timeline-content">
                    <h3>Institutional Support</h3>
                    <p>Expanding into NAAC & NBA accreditation assistance and institutional ranking guidance.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services fade-in" id="services">
    <div class="container">
        <div class="services-header">
            <span class="about-label">Our Services</span>
            <h2 class="section-title">Our Core Services</h2>
            <p class="section-subtitle">Comprehensive, ethical, and professional publishing and research support tailored to academic and institutional needs.</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="icon-box">
                    <span class="service-icon">📚</span>
                </div>
                <h3>Book Publishing Services</h3>
                <p class="service-subtitle">International & Academic Books</p>
                <p class="service-desc">We provide professional book publishing solutions aligned with global academic standards:</p>
                <ul class="service-list">
                    <li>International & Academic Book Publishing</li>
                    <li>Edited Books & Conference Proceedings</li>
                    <li>ISBN Assignment & Global Distribution</li>
                    <li>Editorial, Formatting & Production Support</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="icon-box">
                    <span class="service-icon">📄</span>
                </div>
                <h3>Journal Publication Services</h3>
                <p class="service-subtitle">Reputed Indexed Journals</p>
                <p class="service-desc">We assist researchers in publishing ethically in reputed indexed journals:</p>
                <ul class="service-list">
                    <li>Scopus Indexed Journals</li>
                    <li>Web of Science Indexed Journals</li>
                    <li>EI Indexed Journals</li>
                    <li>IEEE Conference Proceedings</li>
                    <li>International Conferences & Journals</li>
                </ul>
                <p class="service-desc small">Our process includes journal suitability analysis, compliance checks, ethical submission support, and revision coordination.</p>
            </div>
            <div class="service-card">
                <div class="icon-box">
                    <span class="service-icon">🔐</span>
                </div>
                <h3>Patent Filing & IP Support</h3>
                <p class="service-subtitle">Intellectual Property Guidance</p>
                <p class="service-desc">In collaboration with certified UK- and India-based patent attorneys, we offer:</p>
                <ul class="service-list">
                    <li>Patent Consultation & Documentation</li>
                    <li>Indian & International Patent Filing</li>
                    <li>End-to-End IP Guidance</li>
                </ul>
                <p class="service-desc small">All intellectual property is handled with strict confidentiality and legal compliance.</p>
            </div>
            <div class="service-card">
                <div class="icon-box">
                    <span class="service-icon">🎓</span>
                </div>
                <h3>Author & Researcher Support</h3>
                <p class="service-subtitle">Customized Academic Assistance</p>
                <p class="service-desc">Tailored support for researchers and PhD scholars:</p>
                <ul class="service-list">
                    <li>Full PhD Support (Guidance up to Final Submission)</li>
                    <li>Research Proposal & Literature Review</li>
                    <li>Methodology Design & Thesis Drafting</li>
                    <li>Research Article Writing Support</li>
                    <li>Grammar Editing & Plagiarism Reduction</li>
                    <li>Implementation: MATLAB, Python & More</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="icon-box">
                    <span class="service-icon">🏛️</span>
                </div>
                <h3>University Accreditation Support</h3>
                <p class="service-subtitle">NAAC, NBA & Ranking Guidance</p>
                <p class="service-desc">Institutional-level services to achieve academic excellence:</p>
                <ul class="service-list">
                    <li>NAAC Accreditation Assistance</li>
                    <li>NBA Accreditation Assistance</li>
                    <li>Documentation & Compliance Support</li>
                    <li>Quality Benchmarking & Ranking Guidance</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="how-it-works fade-in" id="how-it-works">
    <div class="container">
        <div class="process-header">
            <span class="about-label">Our Process</span>
            <h2 class="process-title">How It Works</h2>
            <p class="process-subtitle">A simple 5-step process to take your manuscript from submission to successful publication.</p>
        </div>
        <div class="steps-grid">
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 513 513" id="upload">
                            <path stroke="#ffbe60" stroke-linecap="round" stroke-linejoin="round" stroke-width="30.118" d="M256.765 360.996L256.765 76.1516M376.856 196.013L256.765 75.9216L136.673 196.013" class="colorStroke000000 svgStroke"></path>
                            <line x1="76.059" x2="437.471" y1="437.235" y2="437.235" stroke="#ffbe60" stroke-linecap="round" stroke-width="30.118" class="colorStroke000000 svgStroke"></line>
                        </svg>
                    </div>
                    <div class="step-number">01</div>
                </div>
                <h3 class="step-title">Manuscript Submission</h3>
                <p class="step-desc">Submit your manuscript through our secure portal or email for initial assessment.</p>
            </div>
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <div class="step-icon">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="DocumentSearch">
  <path fill="none" d="M0,0H24V24H0Z"></path>
  <path fill="#ffbe60" d="M-2030.227,18.931l-3-3a4.111,4.111,0,0,1-2.2.629,4.112,4.112,0,0,1-2.927-1.212,4.113,4.113,0,0,1-1.212-2.927,4.113,4.113,0,0,1,1.212-2.926,4.112,4.112,0,0,1,2.927-1.212,4.113,4.113,0,0,1,2.927,1.212,4.112,4.112,0,0,1,1.212,2.926,4.111,4.111,0,0,1-.639,2.212l3,3a.92.92,0,0,1,0,1.3.917.917,0,0,1-.65.269A.916.916,0,0,1-2030.227,18.931Zm-7.5-6.513a2.3,2.3,0,0,0,2.3,2.3,2.3,2.3,0,0,0,2.3-2.3,2.3,2.3,0,0,0-2.3-2.3A2.3,2.3,0,0,0-2037.726,12.418Zm-2.742,3.215h-3.735a1.8,1.8,0,0,1-1.8-1.8V7.215a3.112,3.112,0,0,1,1.2-2.7l.962-.966,2.322-2.332.309-.311a3.591,3.591,0,0,1,2.995-.9h3.294a1.8,1.8,0,0,1,1.8,1.8V6.9a5.947,5.947,0,0,0-1.8-.438V1.8h-2.994V5.239a2.875,2.875,0,0,1-2.866,2.877h-3.422v5.712h2.966a5.933,5.933,0,0,0,.769,1.8h0Zm.529-13.455-3.593,3.608a5.282,5.282,0,0,0-.489.528h3.24a1.073,1.073,0,0,0,1.069-1.074V1.987A1.323,1.323,0,0,0-2039.939,2.177Z" transform="translate(2049.3 2.4)" class="color525863 svgShape"></path>
</svg> 
                        </div>
                    <div class="step-number">02</div>
                </div>
                <h3 class="step-title">Technical & Editorial Review</h3>
                <p class="step-desc">Our expert team reviews your work for quality, formatting, and publication readiness.</p>
            </div>
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <div class="step-icon"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" id="ApprovalFile">
  <path fill="url(#_Linear1)" d="M27.008,3.937c-0,-0.796 -0.317,-1.559 -0.879,-2.122c-0.563,-0.562 -1.326,-0.878 -2.121,-0.878c-3.832,-0 -12.168,-0 -16,-0c-0.796,-0 -1.559,0.316 -2.122,0.878c-0.562,0.563 -0.878,1.326 -0.878,2.122c-0,5.161 -0,18.886 -0,24.047c-0,0.796 0.316,1.559 0.878,2.121c0.563,0.563 1.326,0.879 2.122,0.879c3.832,-0 12.168,-0 16,-0c0.795,-0 1.558,-0.316 2.121,-0.879c0.562,-0.562 0.879,-1.325 0.879,-2.121l-0,-24.047Zm-2,-0l-0,24.047c-0,0.265 -0.106,0.519 -0.293,0.707c-0.188,0.188 -0.442,0.293 -0.707,0.293l-16,-0c-0.266,-0 -0.52,-0.105 -0.708,-0.293c-0.187,-0.188 -0.292,-0.442 -0.292,-0.707l-0,-24.047c-0,-0.266 0.105,-0.52 0.292,-0.708c0.188,-0.187 0.442,-0.292 0.708,-0.292l16,-0c0.265,-0 0.519,0.105 0.707,0.292c0.187,0.188 0.293,0.442 0.293,0.708Z"></path>
  <path fill="url(#_Linear2)" d="M16.148,25.087l2.437,1.729c0.219,0.155 0.49,0.216 0.754,0.168c0.264,-0.047 0.498,-0.198 0.65,-0.419l2.824,-4.127c0.312,-0.456 0.195,-1.078 -0.261,-1.39c-0.455,-0.312 -1.078,-0.195 -1.39,0.26l-2.25,3.288c0,0 -1.607,-1.14 -1.607,-1.14c-0.45,-0.319 -1.075,-0.213 -1.394,0.237c-0.319,0.45 -0.213,1.075 0.237,1.394Z"></path>
  <path fill="url(#_Linear3)" d="M10,6.988l11.988,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-11.988,-0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z"></path>
  <path fill="url(#_Linear4)" d="M10,11l11.988,0c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-11.988,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"></path>
  <path fill="url(#_Linear5)" d="M10,15.012l11.988,0c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-11.988,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"></path>
  <path fill="url(#_Linear6)" d="M10,19l6.008,-0c0.551,0 1,-0.448 1,-1c-0,-0.552 -0.449,-1 -1,-1l-6.008,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"></path>
  <defs>
    <linearGradient id="_Linear1" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
    <linearGradient id="_Linear2" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
    <linearGradient id="_Linear3" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
    <linearGradient id="_Linear4" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
    <linearGradient id="_Linear5" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
    <linearGradient id="_Linear6" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(32 0 0 32 0 16)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#eea336" class="stopColoree4036 svgShape"></stop>
      <stop offset="1" stop-color="#ffbe60" class="stopColorfaaf40 svgShape"></stop>
    </linearGradient>
  </defs>
</svg></div>
                    <div class="step-number">03</div>
                </div>
                <h3 class="step-title">Agreement & Processing</h3>
                <p class="step-desc">Finalize publishing agreement and begin the professional editing and formatting process.</p>
            </div>
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <div class="step-icon"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" id="AstronomyDocument">
  <path d="M22 8a1.002 1.002 0 0 0 .707-1.707l-6-6A1 1 0 0 0 15 1v4a3 3 0 0 0 3 3h4Zm-2.414-2L17 3.414V5a1 1 0 0 0 1 1h1.586ZM16.355 12.572A8.004 8.004 0 0 0 13.427 23.5a8.004 8.004 0 0 0 10.928 2.928A8.004 8.004 0 0 0 27.284 15.5a8.004 8.004 0 0 0-10.929-2.928Zm1 1.732a6.003 6.003 0 0 1 8.197 2.196 6.003 6.003 0 0 1-2.197 8.196A6.003 6.003 0 0 1 15.16 22.5a6.003 6.003 0 0 1 2.196-8.196Z" fill="#ffbe60" class="color000000 svgShape"></path>
  <path d="M28.991 14.512a.78.78 0 0 0-.127-.045 2.459 2.459 0 0 0-.624-.05c-.764.019-1.757.233-2.898.603a1 1 0 0 1-.618-1.902c1.986-.644 3.621-.832 4.606-.597.687.166 1.152.519 1.418.979.386.668.341 1.675-.395 2.842-1.157 1.833-4.139 4.394-7.997 6.622-3.858 2.227-7.567 3.529-9.733 3.614-1.378.055-2.273-.41-2.659-1.079-.266-.46-.339-1.04-.138-1.717.288-.97 1.269-2.293 2.819-3.69a1 1 0 0 1 1.339 1.485c-.892.804-1.573 1.556-1.971 2.21a2.459 2.459 0 0 0-.27.564.78.78 0 0 0-.024.133c.058.022.156.056.232.07.379.06.864.029 1.436-.068 2.024-.342 4.94-1.505 7.97-3.254 3.029-1.75 5.494-3.693 6.802-5.274.37-.447.64-.852.776-1.21.027-.073.046-.175.056-.236Z" fill="#ffbe60" class="color000000 svgShape"></path>
  <path d="M23 26.305a.999.999 0 0 0-1.235-.972 6.004 6.004 0 0 1-6.606-2.833 6.002 6.002 0 0 1 2.196-8.196 5.985 5.985 0 0 1 4.41-.635.999.999 0 0 0 1.235-.971V7a.997.997 0 0 0-.293-.707l-6-6A.997.997 0 0 0 16 0H4a3 3 0 0 0-3 3v26c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 4 32h16c.796 0 1.559-.316 2.121-.879A2.996 2.996 0 0 0 23 29v-2.695ZM15.586 2H4a1 1 0 0 0-1 1v26a.997.997 0 0 0 1 1h16a.997.997 0 0 0 1-1v-1.526a8.003 8.003 0 0 1-7.573-3.974 8.003 8.003 0 0 1 2.928-10.928A7.955 7.955 0 0 1 21 11.527V7.414L15.586 2Z" fill="#ffbe60" class="color000000 svgShape"></path>
  <path d="M6 8h2a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2ZM13 10H6a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2ZM12 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Z" fill="#ffbe60" class="color000000 svgShape"></path>
</svg></div>
                    <div class="step-number">04</div>
                </div>
                <h3 class="step-title">Publishing & Indexing</h3>
                <p class="step-desc">Your work gets published and indexed in relevant databases for maximum visibility.</p>
            </div>
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <div class="step-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="support">
  <path d="M16.935 9.771a6.788 6.788 0 0 0-.178-1.54l-.004-.016a6.91 6.91 0 0 0-6.739-5.289l-.008-.001h-.019a6.875 6.875 0 0 0-6.74 5.29l-.004.016a6.872 6.872 0 0 0 .17 3.707 1.433 1.433 0 0 0 .75.85 1.494 1.494 0 0 0 .65.15 1.519 1.519 0 0 0 .477-.077l.591-.204a1.472 1.472 0 0 0 1.003-1.567l-.216-1.84A1.505 1.505 0 0 0 5.3 7.946l-.918-.064a5.883 5.883 0 0 1 5.538-3.957H10.006a5.827 5.827 0 0 1 5.613 3.957l-.925.065a1.505 1.505 0 0 0-1.363 1.309l-.215 1.84a1.47 1.47 0 0 0 .998 1.561l.603.208a1.476 1.476 0 0 0 .28.045 5.804 5.804 0 0 1-4.163 2.65.94.94 0 0 0-.755-.398.957.957 0 1 0 .84 1.39 6.805 6.805 0 0 0 5.607-4.504c.016-.037.047-.065.06-.104a6.757 6.757 0 0 0 .349-2.172Zm-11.712-.83a.499.499 0 0 1 .453.43l.214 1.83a.48.48 0 0 1-.33.51l-.588.202a.512.512 0 0 1-.376-.025.445.445 0 0 1-.235-.265 5.889 5.889 0 0 1-.224-2.757Zm10.18 2.947a.503.503 0 0 1-.368.028l-.6-.207a.477.477 0 0 1-.326-.503l.215-1.831a.498.498 0 0 1 .447-.433l1.092-.076a5.808 5.808 0 0 1-.206 2.681c-.003.007-.009.012-.011.02-.018.055-.046.104-.066.16a.446.446 0 0 1-.176.16ZM10 7.159a.5.5 0 0 1-.35-.14.507.507 0 0 1-.15-.36.43.43 0 0 1 .04-.19.413.413 0 0 1 .11-.16.51.51 0 0 1 .7 0 .468.468 0 0 1 .15.35.508.508 0 0 1-.15.36.5.5 0 0 1-.35.14Zm-1.65-.85a.468.468 0 0 1 .15.35.508.508 0 0 1-.15.36.5.5 0 0 1-.35.14.4.4 0 0 1-.19-.04.435.435 0 0 1-.16-.1.507.507 0 0 1-.15-.36.468.468 0 0 1 .15-.35.51.51 0 0 1 .7 0Zm3.3.71a.384.384 0 0 1-.11-.17.4.4 0 0 1-.04-.19.468.468 0 0 1 .15-.35.5.5 0 0 1 .7 0 .468.468 0 0 1 .15.35.406.406 0 0 1-.04.19.385.385 0 0 1-.11.17.508.508 0 0 1-.7 0Z" fill="#ffbe60" class="color000000 svgShape"></path>
</svg></div>
                    <div class="step-number">05</div>
                </div>
                <h3 class="step-title">Distribution & Author Support</h3>
                <p class="step-desc">Ongoing support for distribution, marketing, and post-publication queries.</p>
            </div>
        </div>
    </div>
</section>


<!-- global presence -->
<section class="global-presence-section" id="global-presence">
        <div class="container">
            <div class="global-header">
                <span class="global-label">Our Reach</span>
                <h2 class="section-title">Our Global Presence</h2>
                <p class="section-subtitle">
                    We proudly support authors, researchers, and academic institutions worldwide, aligning with international standards for publishing, indexing, and institutional excellence.
                </p>
            </div>

            <!-- Map and Stats Section -->
            <div class="map-section">
                <div id="lottie-map"></div>
                <div class="map-stats">
                    <div class="stat-item">
                        <span class="stat-number">25+</span>
                        <span class="stat-label">Countries</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">6</span>
                        <span class="stat-label">Continents</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">1000+</span>
                        <span class="stat-label">Happy Clients</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">5000+</span>
                        <span class="stat-label">Publications</span>
                    </div>
                </div>
            </div>

            <!-- Countries Cloud -->
            <div class="countries-section">
                <h3 class="countries-title">Trusted by Researchers in <span>25+ Countries</span></h3>
                <div class="countries-cloud">
                    <div class="country-tag featured">🇮🇳 India</div>
                    <div class="country-tag">🇺🇸 USA</div>
                    <div class="country-tag">🇦🇪 UAE</div>
                    <div class="country-tag">🇮🇶 Iraq</div>
                    <div class="country-tag">🇮🇷 Iran</div>
                    <div class="country-tag">🇲🇾 Malaysia</div>
                    <div class="country-tag">🇸🇬 Singapore</div>
                    <div class="country-tag">🇮🇩 Indonesia</div>
                    <div class="country-tag">🇹🇭 Thailand</div>
                    <div class="country-tag">🇻🇳 Vietnam</div>
                    <div class="country-tag">🇵🇭 Philippines</div>
                    <div class="country-tag">🇨🇳 China</div>
                    <div class="country-tag">🇹🇼 Taiwan</div>
                    <div class="country-tag">🇰🇷 South Korea</div>
                    <div class="country-tag">🇯🇵 Japan</div>
                    <div class="country-tag">🇷🇺 Russia</div>
                    <div class="country-tag">🇺🇿 Uzbekistan</div>
                    <div class="country-tag">🇯🇴 Jordan</div>
                    <div class="country-tag">🇪🇬 Egypt</div>
                    <div class="country-tag">🇲🇦 Morocco</div>
                    <div class="country-tag">🇹🇳 Tunisia</div>
                    <div class="country-tag">🇪🇹 Ethiopia</div>
                    <div class="country-tag">🇳🇬 Nigeria</div>
                    <div class="country-tag">🇿🇦 South Africa</div>
                    <div class="country-tag">🇨🇱 Chile</div>
                    <div class="country-tag">🇧🇷 Brazil</div>
                    <div class="country-tag">🇦🇷 Argentina</div>
                    <div class="country-tag">🇲🇽 Mexico</div>
                    <div class="country-tag">🇬🇧 United Kingdom</div>
                    <div class="country-tag">🇩🇪 Germany</div>
                    <div class="country-tag">🇫🇷 France</div>
                    <div class="country-tag">🇮🇹 Italy</div>
                    <div class="country-tag">🇪🇸 Spain</div>
                    <div class="country-tag">🇨🇦 Canada</div>
                    <div class="country-tag">🇦🇺 Australia</div>
                    <div class="country-tag">🇳🇿 New Zealand</div>
                </div>
                <div class="countries-footer">
                    <p>Expanding our reach to <strong>new regions every month</strong></p>
                </div>
            </div>
        </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials fade-in" id="testimonials">
    <div class="container">
        <div class="testimonials-header">
            <span class="testimonials-label">Testimonials</span>
            <h2 class="testimonials-title">What Our Authors Say</h2>
            <p class="testimonials-subtitle">Hear from researchers and authors who have successfully published with us.</p>
        </div>

        <div class="testimonial-carousel">
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-slide active">
                    <div class="testimonial-card">
                        <div class="quote-icon">“</div>
                        <div class="stars">★★★★★</div>
                        <p class="testimonial-text">
                            "The employees of the publishing house work very quickly and with high quality!"
                        </p>
                        <div class="author-info">
                            <strong>Abdullayeva Xonim</strong>
                            <span>Client</span>
                        </div>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-slide">
                    <div class="testimonial-card">
                        <div class="quote-icon">“</div>
                        <div class="stars">★★★★★</div>
                        <p class="testimonial-text">
                            "With in time papers are publishing in reputed journals with reliable cost."
                        </p>
                        <div class="author-info">
                            <strong>Hemasree Aasrith</strong>
                            <span>Client</span>
                        </div>
                    </div>
                </div>

                <!-- Slide 3 -->
                <div class="carousel-slide">
                    <div class="testimonial-card">
                        <div class="quote-icon">“</div>
                        <div class="stars">★★★★★</div>
                        <p class="testimonial-text">
                            "Good assistance for research!!"
                        </p>
                        <div class="author-info">
                            <strong>Vikram Neerugatti</strong>
                            <span>Client</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Navigation Arrows -->
            <button class="carousel-prev">&#8249;</button>
            <button class="carousel-next">&#8250;</button>

            <!-- Dots Indicator -->
            <div class="carousel-dots">
                <span class="dot active" data-slide="0"></span>
                <span class="dot" data-slide="1"></span>
                <span class="dot" data-slide="2"></span>
                <span class="dot" data-slide="3"></span>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-choose fade-in" id="why-choose">
    <div class="container">
        <div class="why-header">
            <span class="why-label">Why Us</span>
            <h2 class="why-title">Why Choose Business SASA Publications?</h2>
            <p class="why-subtitle">We deliver ethical, professional, and comprehensive academic support with a proven track record of success.</p>
        </div>

        <div class="why-grid">
            <div class="why-card">
                <div class="why-icon">✔</div>
                <div class="why-content">
                    <h3>Complete One-Stop Academic Solutions</h3>
                    <p>From research guidance to publication and accreditation support—all your academic needs under one roof.</p>
                </div>
            </div>

            <div class="why-card">
                <div class="why-icon">🌍</div>
                <div class="why-content">
                    <h3>Strong Global Publishing & Research Expertise</h3>
                    <p>Years of experience in international publishing, indexed journals, and academic research standards.</p>
                </div>
            </div>

            <div class="why-card">
                <div class="why-icon">⚖️</div>
                <div class="why-content">
                    <h3>Ethical, Transparent, and Compliant Workflows</h3>
                    <p>Strict adherence to publication ethics, academic integrity, and international compliance guidelines.</p>
                </div>
            </div>

            <div class="why-card">
                <div class="why-icon">🤝</div>
                <div class="why-content">
                    <h3>Collaboration with Certified Professionals</h3>
                    <p>Partnered with certified academic experts and legal professionals (UK & India-based patent attorneys).</p>
                </div>
            </div>

            <div class="why-card">
                <div class="why-icon">🎯</div>
                <div class="why-content">
                    <h3>Customized Solutions for Individuals & Institutions</h3>
                    <p>Tailored support for researchers, PhD scholars, authors, and universities seeking excellence.</p>
                </div>
            </div>

            <div class="why-card">
                <div class="why-icon">🏆</div>
                <div class="why-content">
                    <h3>Proven International Client Base</h3>
                    <p>Trusted by researchers and institutions worldwide with a track record of successful outcomes.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- Combined CTA + Contact Section (Simplified) -->
<section class="combined-cta-contact fade-in" id="contact">
    <div class="container">
        <!-- Main CTA Heading -->
        <div class="cta-content">
            <h2 class="cta-title">Ready to Publish Your Work?</h2>
            <h3 class="cta-subtitle">Let's Make It Happen.</h3>
            <p class="cta-desc">
                Take the first step towards getting your research and manuscripts published with professional support from start to finish.
            </p>
        </div>

        <!-- Contact Form + Info (No extra headings, buttons, or benefits) -->
        <div class="contact-content" id="contact-form-section">
            <div class="contact-wrapper">
                <!-- Left: Contact Info -->
    <div class="contact-info">
        <div class="info-card">
            <div class="info-icon">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
            </div>
            <div class="info-content">
                <strong>Phone / WhatsApp</strong>
                <p><a href="tel:+919597265214">+91 9597265214</a></p>
            </div>
        </div>

        <div class="info-card">
            <div class="info-icon">
                <i class="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="info-content">
                <strong>Email</strong>
                <p><a href="mailto:info@sasapublications.com">suresh@sasapublication.com</a></p>
            </div>
        </div>

        <div class="info-card">
            <div class="info-icon">
                <i class="fas fa-globe" aria-hidden="true"></i>
            </div>
            <div class="info-content">
                <strong>Website</strong>
                <p><a href="https://www.sasapublications.com" target="_blank">www.sasapublications.com</a></p>
            </div>
        </div>

        <div class="info-card">
            <div class="info-icon">
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div class="info-content">
                <strong>Location</strong>
                <p>Coimbatore, India</p>
            </div>
        </div>
    </div>

                <!-- Right: Contact Form -->
                <div class="contact-form-card">
                    <h3 class="form-title">Send Us a Message</h3>
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" name="name" required>
                            <label>Full Name</label>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" required>
                            <label>Email Address</label>
                        </div>
                        <div class="form-group">
                            <select name="subject" required>
                                <option value="" disabled selected>Select a subject</option>
                                <option value="Book Publishing">Book Publishing</option>
                                <option value="Journal Publication">Journal Publication</option>
                                <option value="Thesis Support">Thesis Support</option>
                                <option value="Conference Paper">Conference Paper</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea name="message" required></textarea>
                            <label>Message</label>
                        </div>
                        <button type="submit" class="btn-send">
                            <span class="send-icon">📤</span>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>SASA Publications</h3>
                <p>Your trusted partner for academic and book publishing, supporting authors and researchers globally with professional services.</p>
                <div class="social-links">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/sasa_publication/" class="social-icon" target="_blank" aria-label="Instagram">
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <!-- Twitter / X (using the modern X icon) -->
                    <a href="https://x.com/Sasapublication" class="social-icon" target="_blank" aria-label="Twitter/X">
                        <i class="fab fa-x-twitter" aria-hidden="true"></i>
                    </a>
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/profile.php?id=61579253472136#" class="social-icon" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#portfolio">Publications</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Services</h3>
                <ul class="footer-links">
                    <li><a href="#services">Book Publishing</a></li>
                    <li><a href="#services">Journal Publication</a></li>
                    <li><a href="#services">Thesis Publication</a></li>
                    <li><a href="#services">Research Assistance</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <ul class="footer-links">
                    <li>📱 +91 9597265214</li>
                    <li>✉️ suresh@sasapublication.com</li>
                    <li>🌐 www.sasapublications.com</li>
                    <li>📍 Coimbatore, India</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 SASA Publications. All Rights Reserved. | Empowering Academic Excellence Worldwide</p>
        </div>
    </div>
</footer>

<script>
    // Mobile Menu Toggle
    function toggleMenu() {
        const nav = document.getElementById('navMenu');
        nav.classList.toggle('active');
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.getElementById('navMenu').classList.remove('active');
            }
        });
    });

    // Counter Animation
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        element.textContent = target + '+';
    }

    // Initialize counters immediately
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        animateCounter(el);
    });

    // Form Submission
    document.querySelector('.contact-form button').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
    });
</script>

<script>
const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = slides.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Optional: Auto-play
// setInterval(() => {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     updateCarousel();
// }, 6000);
</script>

<script>
    // Scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-panel');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    function closeMobileMenu() {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu-panel a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
</script>


<!-- <script>
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent page reload

        const submitBtn = form.querySelector('.btn-send');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="send-icon">⏳</span> Sending...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // CHANGE THIS LINE: Replace with your actual Render API URL
        const API_URL = 'https://sasapub-backend.onrender.com/send-contact';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert('✅ Thank you! Your message has been sent successfully.');
                form.reset();
            } else {
                alert('❌ Error: ' + result.message);
                console.log(error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Failed to send message. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span class="send-icon">📤</span> Send Message';
        }
    });
</script> -->



<script>
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent page reload

        const submitBtn = form.querySelector('.btn-send');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="send-icon">⏳</span> Sending...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/send-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert('✅ Thank you! Your message has been sent successfully.');
                form.reset();
            } else {
                alert('❌ Error: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Failed to send message. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span class="send-icon">📤</span> Send Message';
        }
    });
</script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>

<script>
    // Load Lottie Animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-map'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './worldpins.json' //https://lottie.host/be12d3ac-7c71-4468-bed6-eebf4a645dab/aLtpHYKxm6.json
    });

    // Counter animation for stats
    function animateCounter(element, target, suffix = '+', duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }

    // Trigger counter animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = document.querySelectorAll('.stat-number');
                animateCounter(statNumbers[0], 25, '+');
                animateCounter(statNumbers[1], 6, '');
                animateCounter(statNumbers[2], 1000, '+');
                animateCounter(statNumbers[3], 5000, '+');
                observer.disconnect();
            }
        });
    });

    observer.observe(document.querySelector('.map-stats'));

    // Staggered animation for country tags
    const countryTags = document.querySelectorAll('.country-tag');
    countryTags.forEach((tag, index) => {
        tag.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.03}s`;
        tag.style.opacity = '0';
    });
</script>
</body>
</html>