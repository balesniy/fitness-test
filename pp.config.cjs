const indexSections = [
  {section: 'hero', misMatchThreshold: 2.85},
  {section: 'about', misMatchThreshold: 0.7},
  {section: 'price', misMatchThreshold: 0.5},
  {section: 'games', misMatchThreshold: 0.5},
  {section: 'juri', misMatchThreshold: 0.3},
  {section: 'features', misMatchThreshold: 1.35},
  {section: 'offers', misMatchThreshold: 0.5},
  {section: 'faq', misMatchThreshold: 1.7},
  {section: 'reviews', misMatchThreshold: 1.0},
  {section: 'form', misMatchThreshold: 0.5},
  {section: 'footer', misMatchThreshold: 1.3}
];


module.exports = {
  "id": "supergym test-pp",
  "onReadyScript": "onReady.cjs",
  "onBeforeScript": "onBefore.cjs",
  "viewports": [
    {
      "label": "mobile",
      "width": 320,
      "height": 480,
    },
    {
      "label": "tablet",
      "width": 768,
      "height": 1024,
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 800,
    }
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "errorType": "movementDifferenceIntensity",
    "transparency": 0.3,
    scaleToSameSize: false
  },
  "scenarios": [
    ...indexSections.map(({section, misMatchThreshold}) => ({
      "label": `${section}`,
      "url": "http://localhost:3000/phone.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="${section}"]`],
      misMatchThreshold: misMatchThreshold || 5,
      requireSameDimensions: true,
      delay: 500,
    })),
  ],
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "bitmaps_reference/test-pp",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
    "json_report": "backstop_data/json_report",
  },
  "report": ["browser", "json"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": {"waitUntil": ["load", "networkidle0"], timeout: 10000},
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
