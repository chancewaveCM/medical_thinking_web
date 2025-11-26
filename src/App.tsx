import React, { useState } from 'react';
import { Brain, MapPin, BarChart3, Users, Stethoscope, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMedifolioClick = () => {
    window.open('http://localhost:3010', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Medical Thinking Logo" />
            <span>Medical Thinking</span>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="btn-primary desktop-nav" onClick={handleMedifolioClick}>
            Medifolio 시작하기
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#service" onClick={closeMobileMenu}>Service</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            <button className="btn-primary" onClick={() => { handleMedifolioClick(); closeMobileMenu(); }}>
              Medifolio 시작하기
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>데이터로 여는<br />의료 창업의 미래</h1>
          <p>
            Medical Thinking은 의료 전문성과 첨단 데이터 기술을 결합하여<br />
            약국과 병원의 성공적인 창업과 운영을 지원합니다.
          </p>
          <button className="btn-hero-cta" onClick={handleMedifolioClick}>
            Medifolio 서비스 체험하기
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Medical Thinking?</h2>
            <p>우리는 의료 창업 시장의 불투명성을 해결하고 데이터 기반의 의사결정을 돕습니다.</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <Brain size={32} />
              </div>
              <h3>AI 기반 분석</h3>
              <p>머신러닝 알고리즘을 통해 상권, 인구, 경쟁도를 분석하여 최적의 입지를 추천합니다.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <ShieldCheck size={32} />
              </div>
              <h3>투명한 검증</h3>
              <p>공공 데이터와 실제 매출 데이터를 교차 검증하여 권리금과 예상 매출의 정확도를 높입니다.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Users size={32} />
              </div>
              <h3>전문가 매칭</h3>
              <p>약사와 의사를 연결하고, 금융/인테리어 등 검증된 파트너를 매칭하여 창업 성공률을 높입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section (Medifolio) */}
      <section id="service" className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Service: Medifolio</h2>
            <p>약국·병원 창업 및 운영을 위한 AI 기반 통합 솔루션</p>
          </div>

          <div className="service-grid">
            {/* Feature 1 */}
            <div className="service-card">
              <div className="service-header">
                <MapPin className="service-icon" size={40} />
                <h3>AI 입지 분석</h3>
              </div>
              <p>유동인구, 병의원 분포, 처방전 발행량 등을 통합 분석하여 예상 수익 기반의 최적 입지를 추천합니다.</p>
              <ul className="feature-list">
                <li><CheckCircle2 className="check-icon" /> 나홀로 병원 탐색</li>
                <li><CheckCircle2 className="check-icon" /> 신규 상권 발굴</li>
                <li><CheckCircle2 className="check-icon" /> 예상 매출 시뮬레이션</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="service-card">
              <div className="service-header">
                <BarChart3 className="service-icon" size={40} />
                <h3>권리금 및 매출 검증</h3>
              </div>
              <p>불투명한 권리금 시장을 데이터로 혁신합니다. 공공데이터와 브로커 정보를 기반으로 합리성을 분석합니다.</p>
              <ul className="feature-list">
                <li><CheckCircle2 className="check-icon" /> 권리금 적정성 평가</li>
                <li><CheckCircle2 className="check-icon" /> 카드 매출 데이터 교차 검증</li>
                <li><CheckCircle2 className="check-icon" /> 투자 회수 기간 산출</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="service-card">
              <div className="service-header">
                <Stethoscope className="service-icon" size={40} />
                <h3>의사-약사 매칭</h3>
              </div>
              <p>처방과 시너지가 높은 진료과를 중심으로 병원과 약국의 최적 파트너를 매칭해드립니다.</p>
              <ul className="feature-list">
                <li><CheckCircle2 className="check-icon" /> 진료과별 처방 패턴 분석</li>
                <li><CheckCircle2 className="check-icon" /> 상호 윈윈 파트너십 구축</li>
                <li><CheckCircle2 className="check-icon" /> 공동 개원 컨설팅</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="service-card">
              <div className="service-header">
                <TrendingUp className="service-icon" size={40} />
                <h3>운영 관리 솔루션</h3>
              </div>
              <p>개업 이후에도 지속적인 성장을 지원합니다. 매출 추적, 경쟁 분석, 경영 컨설팅을 제공합니다.</p>
              <ul className="feature-list">
                <li><CheckCircle2 className="check-icon" /> 실시간 매출/경쟁 모니터링</li>
                <li><CheckCircle2 className="check-icon" /> 마케팅 트렌드 정보 제공</li>
                <li><CheckCircle2 className="check-icon" /> 금융/세무/노무 전문가 연결</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>성공적인 의료 창업, Medifolio와 함께하세요</h2>
          <p>데이터가 증명하는 확실한 선택, 지금 바로 시작해보세요.</p>
          <button className="btn-white" onClick={handleMedifolioClick}>
            Medifolio 서비스 바로가기 <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Medical Thinking</h3>
              <p>데이터로 의료 창업의 기준을 만듭니다.</p>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li>support@medicalthinking.com</li>
                <li>02-1234-5678</li>
                <li>서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Medical Thinking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
