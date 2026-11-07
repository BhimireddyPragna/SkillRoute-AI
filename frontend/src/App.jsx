import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  Menu,
  Sparkles,
  Target,
  Upload,
  User,
  UserPlus,
  X,
  Zap,
  Lock,
  Mail,
  Code2,
  Route,
  TrendingUp,
  Settings,
  LogOut
} from "lucide-react";

import {
  BrowserRouter,
  Routes,
  Route as PageRoute,
  Link,
  useNavigate
} from "react-router-dom";

import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon"><BrainCircuit size={25} /></span>
        SkillRoute <span>AI</span>
      </Link>

      <div className="nav-links">
        <a href="/SkillRoute-AI/#features">Features</a>
        <a href="/SkillRoute-AI/#how-it-works">How it works</a>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="primary-btn small-btn">
          Get Started <ArrowRight size={16} />
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={15} />
              YOUR PERSONAL AI CAREER COMPANION
            </div>

            <h1>
              Your skills.<br />
              Your future.<br />
              <span>Your career route.</span>
            </h1>

            <p className="hero-description">
              Stop guessing what employers want. Upload your resume,
              paste your dream job description, and let AI build your
              personalized path to success.
            </p>

            <div className="hero-buttons">
              <Link to="/signup" className="primary-btn">
                Build My Roadmap <ArrowRight size={18} />
              </Link>
              <a href="/SkillRoute-AI/#how-it-works" className="secondary-btn">
                Explore Features
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>AI Powered</strong>
                <span>Smart skill analysis</span>
              </div>
              <div>
                <strong>Personalized</strong>
                <span>Career roadmaps</span>
              </div>
              <div>
                <strong>Goal Focused</strong>
                <span>Learn what matters</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow-circle"></div>

            <div className="preview-card">
              <div className="preview-top">
                <div>
                  <span className="mini-label">YOUR CAREER OVERVIEW</span>
                  <h3>Frontend Developer</h3>
                </div>
                <div className="preview-icon">
                  <BrainCircuit size={24} />
                </div>
              </div>

              <div className="match-section">
                <div className="match-number">72%</div>
                <div>
                  <strong>Skill Match</strong>
                  <p>You're getting closer!</p>
                </div>
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <div className="preview-divider"></div>

              <div className="skill-heading">
                <strong>Skill Analysis</strong>
                <span>AI Overview</span>
              </div>

              <div className="skill-row">
                <span>React.js</span>
                <span className="skill-good">Strong</span>
              </div>
              <div className="skill-row">
                <span>JavaScript</span>
                <span className="skill-good">Strong</span>
              </div>
              <div className="skill-row">
                <span>Node.js</span>
                <span className="skill-missing">Improve</span>
              </div>
              <div className="skill-row">
                <span>System Design</span>
                <span className="skill-missing">Learn</span>
              </div>

              <div className="roadmap-preview">
                <div className="roadmap-icon">
                  <Route size={20} />
                </div>
                <div>
                  <strong>Your next step</strong>
                  <p>Start your personalized roadmap</p>
                </div>
                <ChevronRight size={20} />
              </div>
            </div>

            <div className="floating-tag tag-one">
              <CheckCircle2 size={17} />
              Resume analyzed
            </div>

            <div className="floating-tag tag-two">
              <Sparkles size={17} />
              AI Recommendations
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">WHAT SKILLROUTE OFFERS</span>
            <h2>Everything you need to get job-ready.</h2>
            <p>Turn career confusion into a clear, actionable plan.</p>
          </div>

          <div className="feature-grid">
            <FeatureCard
              icon={<FileText />}
              title="Resume Analysis"
              description="Upload your resume and let AI identify your current skills, experience and strengths."
            />
            <FeatureCard
              icon={<Target />}
              title="Skill Gap Analysis"
              description="Compare your resume with job requirements and discover the skills you're missing."
            />
            <FeatureCard
              icon={<Route />}
              title="Career Roadmap"
              description="Get a personalized learning roadmap with topics, projects and milestones."
            />
            <FeatureCard
              icon={<TrendingUp />}
              title="Career Improvement"
              description="Discover what to improve in your technical skills, projects and resume."
            />
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE. SMART. PERSONALIZED.</span>
            <h2>Your dream job is a roadmap away.</h2>
          </div>

          <div className="steps-grid">
            <Step number="01" title="Upload Resume" text="Share your existing resume with SkillRoute AI." />
            <Step number="02" title="Add Job Description" text="Paste the job description you're targeting." />
            <Step number="03" title="Discover Your Gaps" text="Understand your strengths and missing skills." />
            <Step number="04" title="Follow Your Route" text="Get a learning plan designed for your career goal." />
          </div>
        </section>

        <section className="cta-section">
          <Sparkles size={30} />
          <h2>Ready to build your career?</h2>
          <p>Your next opportunity starts with knowing what to learn.</p>
          <Link to="/signup" className="primary-btn">
            Get Started for Free <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <footer>
        <Link to="/" className="brand">
          <BrainCircuit size={22} /> SkillRoute <span>AI</span>
        </Link>
        <p>© 2026 SkillRoute AI. Your career, your journey.</p>
      </footer>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="feature-arrow"><ArrowRight size={18} /></span>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function AuthPage({ signup = false }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = signup
        ? "http://127.0.0.1:8000/auth/signup"
        : "http://127.0.0.1:8000/auth/login";

      const body = signup
        ? { name, email, password }
        : { email, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "Please check your information and try again."
        );
      }

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-layout">
      <div className="auth-left">
        <Link to="/" className="brand">
          <BrainCircuit size={26} /> SkillRoute <span>AI</span>
        </Link>

        <div className="auth-message">
          <div className="eyebrow">
            <Sparkles size={15} /> YOUR FUTURE STARTS HERE
          </div>
          <h1>Build skills.<br /><span>Build your future.</span></h1>
          <p>
            Discover your strengths, improve your skills and
            find your path to your dream career.
          </p>
          <div className="auth-benefit">
            <CheckCircle2 /> Personalized skill analysis
          </div>
          <div className="auth-benefit">
            <CheckCircle2 /> AI-powered career roadmap
          </div>
          <div className="auth-benefit">
            <CheckCircle2 /> Track your career progress
          </div>
        </div>

        <span className="auth-footer">
          Your journey to career success begins here.
        </span>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-icon">
            {signup ? <UserPlus size={27} /> : <LogIn size={27} />}
          </div>

          <h2>{signup ? "Create your account" : "Welcome back!"}</h2>

          <p>
            {signup
              ? "Start your personalized career journey today."
              : "Log in to continue your career journey."}
          </p>

          {signup && (
            <label>
              Full Name
              <div className="input-wrapper">
                <User size={18} />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                />
              </div>
            </label>
          )}

          <label>
            Email Address
            <div className="input-wrapper">
              <Mail size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label>
            Password
            <div className="input-wrapper">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
          </label>

          {!signup && (
            <div className="forgot-row">
              <a href="#forgot">Forgot password?</a>
            </div>
          )}

          {error && (
            <p style={{ color: "red", marginBottom: "12px" }} role="alert">
              {error}
            </p>
          )}

          <button
            className="primary-btn auth-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : signup
                ? "Create Account"
                : "Login"}
            <ArrowRight size={18} />
          </button>

          <div className="auth-switch">
            {signup
              ? "Already have an account?"
              : "Don't have an account?"}
            {" "}
            <Link to={signup ? "/login" : "/signup"}>
              {signup ? "Login" : "Create Account"}
            </Link>
          </div>

          <div className="auth-terms">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </div>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  function handleAnalyze(e) {
    e.preventDefault();
    alert("Your dashboard UI is ready! AI analysis will be connected in a later phase.");
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <BrainCircuit size={25} /> SkillRoute <span>AI</span>
        </Link>

        <span className="side-label">WORKSPACE</span>
        <a className="side-link active"><LayoutDashboard /> Dashboard</a>
        <a className="side-link"><FileText /> My Analysis</a>
        <a className="side-link"><Route /> My Roadmaps</a>
        <a className="side-link"><GraduationCap /> Learning Hub</a>

        <div className="sidebar-bottom">
          <a className="side-link"><Settings /> Settings</a>
          <button className="side-link logout" onClick={() => navigate("/")}>
            <LogOut /> Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="mini-label">YOUR CAREER WORKSPACE</span>
            <h2>Welcome to SkillRoute AI <span>✦</span></h2>
            <p>Let's take one step closer to your dream job.</p>
          </div>
          <div className="profile-circle"><User size={21} /></div>
        </header>

        <div className="dashboard-welcome">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> AI CAREER ANALYZER</span>
            <h2>Find your path to your dream job.</h2>
            <p>Upload your resume and add your target job description to discover your skill gaps.</p>
          </div>
          <BrainCircuit size={85} />
        </div>

        <form className="analyzer-form" onSubmit={handleAnalyze}>
          <div className="form-section-heading">
            <span className="number-circle">01</span>
            <div>
              <h3>Upload your resume</h3>
              <p>Upload your latest resume in PDF format.</p>
            </div>
          </div>

          <label className="upload-area">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0] || null)}
            />
            <div className="upload-icon"><Upload size={27} /></div>
            <strong>{resume ? resume.name : "Drop your resume here or browse"}</strong>
            <span>{resume ? "Resume selected" : "PDF files only · Maximum 5 MB"}</span>
          </label>

          <div className="form-section-heading">
            <span className="number-circle">02</span>
            <div>
              <h3>Paste your job description</h3>
              <p>Tell us about the role you're interested in.</p>
            </div>
          </div>

          <textarea
            className="job-textarea"
            placeholder="Example: We are looking for a Frontend Developer with experience in HTML, CSS, JavaScript, React.js, responsive web design, REST APIs and Git..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="primary-btn analyze-btn"
            disabled={!resume || !jobDescription.trim()}
          >
            <Sparkles size={18} /> Analyze My Career <ArrowRight size={18} />
          </button>
          <p className="form-note">Your personalized skill analysis and career roadmap will appear here once AI analysis is connected.</p>
        </form>

        <div className="dashboard-cards">
          <div className="dashboard-info-card">
            <Target size={23} />
            <h3>Skill Gap Analysis</h3>
            <p>Discover which skills you already have and which ones you need to improve.</p>
          </div>
          <div className="dashboard-info-card">
            <Route size={23} />
            <h3>Career Roadmap</h3>
            <p>Get a structured plan to move closer to your target job.</p>
          </div>
          <div className="dashboard-info-card">
            <Zap size={23} />
            <h3>AI Recommendations</h3>
            <p>Get personalized suggestions to improve your job readiness.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/SkillRoute-AI">
      <Routes>
        <PageRoute path="/" element={<Home />} />
        <PageRoute path="/login" element={<AuthPage />} />
        <PageRoute path="/signup" element={<AuthPage signup />} />
        <PageRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;