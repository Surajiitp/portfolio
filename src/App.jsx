import profile from "./assets/Profile.jpeg";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div style={{ textAlign: "center" }}>
        <img
          src={profile}
          alt="Profile"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #38bdf8",
          }}
        />

        <h1
          style={{
            fontSize: "2.7rem",
            color: "white",
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Suraj Kumar
        </h1>

        <h2
  style={{
    color: "#38bdf8",
    marginTop: "-10px",
    marginBottom: "20px",
    fontSize: "1.5rem",
  }}
>
  IIT Patna • CSE 2nd Year
</h2>

        <p style={{ fontSize: "1.3rem", marginTop: "15px" }}>
          MERN Stack Developer • Competitive Programmer
        </p>

        <p style={{ fontSize: "1.2rem" }}>
          LeetCode Rating: 2144+
        </p>

        <div style={{ marginTop: "20px" }}>
          <a
            href="https://github.com/Surajiitp"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38bdf8",
              marginRight: "5px",
              fontSize: "1.1rem",
              justifyContent: "center",
            }}
          >
            GitHub
          </a>
          {" | "}

          <a
            href="https://www.linkedin.com/in/suraj-kumar-42b5a1355/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38bdf8",
              fontSize: "1.1rem",
            }}
          >
            LinkedIn
          </a>
          {" | "}

          <a
         href="https://leetcode.com/u/Surajiitp/"
         target="_blank"
         rel="noreferrer"
         style={{
         color: "#38bdf8",
         marginRight: "20px",
         fontSize: "1.1rem",
  }}
>
  LeetCode
</a>
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
  <a
    href="#"
    style={{
      background: "#38bdf8",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Download Resume
  </a>
</div>

      {/* About */}
      <section
        style={{
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>About Me</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          I am a Computer Science student at IIT Patna passionate about
          Full Stack Development, Data Structures & Algorithms and
          building scalable web applications.
        </p>
      </section>

      {/* Skills */}
      <section
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Skills</h2>

        <p>
          C++ • JavaScript • React.js • Node.js • Express.js • MongoDB • Git • GitHub
        </p>
      </section>

      {/* Projects */}
      <section
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Projects</h2>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ color: "white" }}>Zerodha Clone</h3>

          <p>
            Full Stack MERN trading platform with authentication,
            holdings dashboard and MongoDB integration.
          </p>
          <a
  href="https://github.com/Surajiitp/zerodha-clone"
  target="_blank"
  rel="noreferrer"
  style={{
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  View Project →
</a>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ color: "white" }}>
            Video Conferencing App
          </h3>

          <p>
            Real-time video conferencing platform built using
            React, WebRTC and Socket.IO with screen sharing and chat.
          </p>

          <a
  href="#"
  style={{
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Coming Soon →
</a>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Contact</h2>

        <p>Email: kumar349118@gmail.com</p>
        <p>📍 Location: Patna, Bihar, India</p>
      </section>
    </div>
  );
}

export default App;