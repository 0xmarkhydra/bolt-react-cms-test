module.exports = {
  apps: [{
    name: "cms.hsabook.vn",
    script: "npm",
    args: "run start",
    env: {
      NODE_ENV: "production",
      PORT: 4173,
      VITE_API_ENDPOINT: "https://api.hsabook.vn"
    }
  }]
}