import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import opsCloverLogo from "@/assets/logos/opsclover-light.svg";
import snapptLogo from "@/assets/logos/snappt.png";

const OpsCloverCaseStudySection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  const containerPadding = isMobile ? "0 16px" : "0 40px";

  return (
    <section style={{
      background: "#0A1628",
      borderTop: "1px solid #1E3A5F",
      borderBottom: "1px solid #1E3A5F",
      padding: "80px 0 72px 0"
    }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: containerPadding }}>

        {/* Section label */}
        <div style={{
          color: "#00D4AA",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "12px"
        }}>
          Proven at Scale
        </div>

        {/* Section headline */}
        <h2 style={{
          color: "white",
          fontSize: "36px",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "48px",
          letterSpacing: "-0.5px",
          maxWidth: "600px"
        }}>
          We don't just talk about<br />
          operations. We've <span style={{ color: "#00D4AA" }}>built them.</span>
        </h2>

        {/* Case Study Card */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: "#162040",
            borderRadius: "12px",
            overflow: "hidden",
            border: `1px solid ${hovered ? "#1E3A5F" : "#162040"}`,
            transition: "all 0.3s ease",
            transform: hovered ? "translateY(-2px)" : "none",
            boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.3)" : "none"
          }}>
          
          <div style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap"
          }}>
            {/* Left: Story */}
            <div style={{
              flex: "1 1 55%",
              padding: "40px 44px",
              minWidth: "320px"
            }}>
              {/* Logos */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px"
              }}>
                <img src={opsCloverLogo} alt="Fraud Shift" style={{ maxHeight: "22px", width: "auto" }} />
                <span style={{ color: "#64748B", fontSize: "12px" }}>×</span>
                <img src={snapptLogo} alt="Snappt" style={{ maxHeight: "24px", width: "auto" }} />
              </div>

              {/* Headline */}
              <h3 style={{
                color: "white",
                fontSize: "26px",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "16px",
                letterSpacing: "-0.3px"
              }}>
                From 4 analysts to 92.<br />
                From &lt;$1M to a <span style={{ color: "#00D4AA" }}>$100M raise.</span>
              </h3>

              {/* Summary */}
              <p style={{
                color: "#94A3B8",
                fontSize: "15px",
                lineHeight: 1.65,
                marginBottom: "28px",
                maxWidth: "480px"
              }}>Fraud Shift built and scaled a 92-person fraud review operation for Snappt, a rental application fraud detection platform. Processing 11,000 fraud decisions per day at a &lt;0.2% false positive rate. Fully managed, 24/7, through their $100M raise from Insight Partners.




              </p>

              {/* CTA link */}
              <a
                href="/case-studies/snappt.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00D4AA",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderBottom: "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "border-color 0.2s"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.borderBottomColor = "#00D4AA"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.borderBottomColor = "transparent"}>
                
                Read the full case study →
              </a>
            </div>

            {/* Right: Stats grid */}
            <div style={{
              flex: "1 1 40%",
              padding: "40px 36px",
              minWidth: "280px",
              background: "#0F172A",
              borderLeft: "1px solid #1E3A5F",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
              }}>
                {[
                { val: "4 → 92", label: "team scaled", color: "#00D4AA" },
                { val: "11,000", label: "fraud decisions / day", color: "#00D4AA" },
                { val: "<0.2%", label: "false positive rate", color: "#00D4AA" },
                { val: "4M+", label: "total decisions", color: "#F59E0B" },
                { val: "24/7", label: "coverage", color: "#F59E0B" },
                { val: "2.5–3 yr", label: "avg analyst tenure", color: "#F59E0B" }].
                map((s, i) =>
                <div key={i} style={{
                  padding: "12px 0",
                  borderBottom: i < 4 ? "1px solid #1E3A5F" : "none"
                }}>
                    <div style={{
                    fontFamily: "'JetBrains Mono', 'DejaVu Sans Mono', monospace",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: s.color,
                    lineHeight: 1.1,
                    marginBottom: "4px"
                  }}>{s.val}</div>
                    <div style={{
                    fontSize: "11px",
                    color: "#64748B",
                    letterSpacing: "0.3px"
                  }}>{s.label}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter capture strip */}
        <div style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          padding: "24px 32px",
          background: "#162040",
          borderRadius: "8px",
          border: "1px solid #1E3A5F"
        }}>
          <div style={{ flex: "1 1 100%" }}>
            <div style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "4px"
            }}>
              Fraud & compliance operations intelligence
            </div>
            <div style={{
              color: "#64748B",
              fontSize: "13px"
            }}>
              Biweekly analysis on the ops behind fraud, KYC, and compliance at scale.
            </div>
          </div>

          {!subscribed ?
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", width: "100%", maxWidth: "400px" }}>
              <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "#0F172A",
                border: "1px solid #1E3A5F",
                borderRadius: "6px",
                padding: "10px 16px",
                color: "#CBD5E1",
                fontSize: "13px",
                width: "220px",
                minWidth: "0",
                flex: "1 1 180px",
                outline: "none",
                fontFamily: "inherit"
              }} />
            
              <button
              onClick={() => {if (email) setSubscribed(true);}}
              style={{
                background: "transparent",
                border: "1px solid #00D4AA",
                borderRadius: "6px",
                padding: "10px 20px",
                color: "#00D4AA",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#00D4AA";
                (e.target as HTMLElement).style.color = "#0F172A";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#00D4AA";
              }}>
              
                Subscribe
              </button>
            </div> :

          <div style={{
            color: "#00D4AA",
            fontSize: "13px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
              ✓ You're in. First issue coming soon.
            </div>
          }
        </div>

      </div>
    </section>);

};

export default OpsCloverCaseStudySection;