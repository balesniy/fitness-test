const {ElementHandle} = require("puppeteer");
const indexSections = [
  {section: 'price', misMatchThreshold: 0.3},
  {section: 'juri', misMatchThreshold: 0.3},
  {section: 'faq', misMatchThreshold: 0.3},
  {section: 'reviews', misMatchThreshold: 0.3},
  {section: 'form', misMatchThreshold: 0.3},
];


module.exports = {
  "id": "supergym test-pp",
  "viewports": [
    {
      "label": "desktop",
      "width": 1366,
      "height": 800,
    },
  ],
  "onReadyScript": "onReady.cjs",
  "onBeforeScript": "onBefore.cjs",
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "errorType": "movementDifferenceIntensity",
    "transparency": 0.3,
    scaleToSameSize: false
  },
  "scenarios": [
    {
      "label": "price-6",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="price"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "price-6-click.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "juri-prev",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="juri"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "juri-prev-click.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "juri-next",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="juri"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "juri-next-click.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "faq-tab-2",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="faq"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "faq-tab-2.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "reviews-prev",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="reviews"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "reviews-prev-click.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "reviews-next",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="reviews"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "reviews-next-click.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "empty-form",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="form"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "empty-form-submit.cjs",
      requireSameDimensions: true,
      delay: 500
    },
    {
      "label": "fill-form",
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="form"]`],
      misMatchThreshold: 0.3,
      "onReadyScript": "fill-form-submit.cjs",
      requireSameDimensions: true,
      delay: 500
    },
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
