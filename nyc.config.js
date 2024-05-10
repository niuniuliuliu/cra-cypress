module.exports = {
  all: true,
  exclude: [
    "src/__tests__/",
    "**/*.d.ts",
    "**/reportWebVitals.ts",
    "**/*.css",
    "**/*.svg",
  ],
  include: ["src"],
  reporter: ["html", "lcov"],
  "report-dir": "coverage",
  "check-coverage": true,
};
