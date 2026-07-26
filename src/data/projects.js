export const projects = [
  {
    slug: "betting-edge",
    num: "01",
    name: "Ethics-Aware Sports Betting ML System",
    role: "ML · Reinforcement Learning",
    period: "Aug to Dec 2025",
    tech: "XGBoost · DQN · DeBERTa · LangChain",
    accent: "#f8d66d",
    repo: "https://github.com/BettingApp-hcai/betting_edge",
    detail:
      "A ranking-to-decision system for sports betting that doesn't just predict outcomes, it decides responsibly. Calibrated probability models and a reinforcement-learning agent run in parallel, their signals converge into a value estimate, and a language-based ethics layer catches risky moves before they ever reach the user. A LangChain assistant sits on top so anyone can interrogate the whole pipeline in plain English.",
    highlights: [
      "2.7M+ events processed through a live Odds API across 14+ match variables",
      "XGBoost calibration lifted probability alignment by 22%",
      "A DQN agent trained on 25K transitions improved behavioral stability by 31%",
      "A DeBERTa ethics classifier cut unsafe actions from 7% to 0.3%",
      "A LangChain assistant answers natural-language questions over the pipeline",
      "Delivered through a Streamlit dashboard for live predictions and recommendations",
    ],
    arch: "betting",
  },
  {
    slug: "smart-grocery",
    num: "02",
    name: "Smart Grocery Detection & Recommendation",
    role: "Computer Vision",
    period: "Jan to May 2025",
    tech: "YOLOv5 · PyTorch · ONNX",
    accent: "#78dcca",
    repo: "https://github.com/gautambalgi/SmartGrocerySystem",
    detail:
      "A real-time grocery detection and recommendation system. A lightweight object detector spots products on the shelf, and a recommender surfaces the best matches, tuned to run fast on constrained hardware.",
    highlights: [
      "Trained on 10K+ images across 30+ product categories at 86% mAP",
      "Cut search time by 40% and inference latency by 32%",
      "Top-5 recommendation engine lifted engagement by 25%",
      "Exported to ONNX with pruning for lightweight deployment",
    ],
  },
  {
    slug: "emotion-voice",
    num: "03",
    name: "Emotion-Aware Voice Messaging System",
    role: "NLP · Speech",
    period: "Jan to May 2025",
    tech: "GoEmotions · TTS · NLP",
    accent: "#b9a7ff",
    repo: "https://github.com/gautambalgi/Emotion-Aware-Personalized-Voice-Messaging-System",
    detail:
      "A messaging system that speaks with feeling. A 27-class emotion classifier reads the mood of a message and drives expressive, emotion-matched speech across multiple text-to-speech engines.",
    highlights: [
      "27-class GoEmotions classifier driving expressive speech",
      "Benchmarked 3 TTS models across five emotional conditions",
      "22% lift in emotion-to-speech alignment",
      "50+ generated samples evaluated for quality",
    ],
  },
  {
    slug: "elearning-db",
    num: "04",
    name: "E-Learning Database System",
    role: "Data · BI",
    period: "Aug to Dec 2024",
    tech: "SQL · Azure · Power BI",
    accent: "#ff9d77",
    repo: "https://github.com/gautambalgi/E-Learning-Database-Management-Sysytem",
    detail:
      "A normalized relational database for an e-learning platform, with reporting queries and interactive dashboards that turn raw records into decisions on completion, scores, and active users.",
    highlights: [
      "Normalized schema across 8+ tables and 500+ records",
      "SQL reporting queries for completion, scores, and activity",
      "Interactive Power BI dashboards for stakeholders",
      "Cut manual reporting effort by 30%",
    ],
  },
  {
    slug: "sc-energy",
    num: "05",
    name: "South Carolina Energy Analysis",
    role: "Statistics · Analytics",
    period: "Aug to Dec 2024",
    tech: "R · Statistics · Shiny",
    accent: "#7cc4ff",
    repo: "https://github.com/gautambalgi/South-Carolina-Weather-Analysis",
    detail:
      "A statistical study of residential energy demand across South Carolina, narrowing a large set of variables down to the real drivers and packaging it into dashboards for peak-demand and blackout-risk scenarios.",
    highlights: [
      "Analyzed 5,000+ households",
      "Narrowed 140+ variables to 42 significant drivers",
      "Regression, correlation, and hypothesis testing",
      "Interactive Shiny dashboards for scenario exploration",
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}