report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -232,
            "height": 96
          },
          "misMatchPercentage": "29.34",
          "analysisTime": 155
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Entire_document_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -144,
            "height": 96
          },
          "misMatchPercentage": "29.43",
          "analysisTime": 263
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Entire_document_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "engineErrorMsg": "Execution context was destroyed, most likely because of a navigation.",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -69,
            "height": -120
          },
          "misMatchPercentage": "23.36",
          "analysisTime": 134
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Link_with_data-qa_hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "engineErrorMsg": "Execution context was destroyed, most likely because of a navigation.",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -69,
            "height": -120
          },
          "misMatchPercentage": "23.36",
          "analysisTime": 178
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Link_with_data-qa_hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "engineErrorMsg": "Execution context was destroyed, most likely because of a navigation.",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -196,
            "height": -120
          },
          "misMatchPercentage": "5.17",
          "analysisTime": 97
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Link_with_class_is-active_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "engineErrorMsg": "Execution context was destroyed, most likely because of a navigation.",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -196,
            "height": -120
          },
          "misMatchPercentage": "5.17",
          "analysisTime": 51
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Link_with_class_is-active_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "engineErrorMsg": "Execution context was destroyed, most likely because of a navigation.",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -726
          },
          "misMatchPercentage": "4.49",
          "analysisTime": 81
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Main_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -208,
            "height": -96
          },
          "misMatchPercentage": "31.93",
          "analysisTime": 134
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Main_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "misMatchPercentage": "19.60",
          "analysisTime": 57
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "misMatchPercentage": "19.60",
          "analysisTime": 168
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card-hover_1024px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "engineErrorMsg": "Evaluation failed: DOMException: Failed to execute 'querySelector' on 'Document': '[]' is not a valid selector.\n    at predicate (eval at waitForPredicatePageFunction (:2:21), <anonymous>:6:20)\n    at eval (eval at waitForPredicatePageFunction (:2:21), <anonymous>:25:7)\n    at pollMutation (__puppeteer_evaluation_script__:17:31)\n    at waitForPredicatePageFunction (__puppeteer_evaluation_script__:9:18)",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 32,
            "height": -223
          },
          "misMatchPercentage": "44.51",
          "analysisTime": 64
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card-hover_1200px.png",
        "test": "..\\bitmaps_test\\20200302-171209\\Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "engineErrorMsg": "Evaluation failed: DOMException: Failed to execute 'querySelector' on 'Document': '[]' is not a valid selector.\n    at predicate (eval at waitForPredicatePageFunction (:2:21), <anonymous>:6:20)\n    at eval (eval at waitForPredicatePageFunction (:2:21), <anonymous>:25:7)\n    at pollMutation (__puppeteer_evaluation_script__:17:31)\n    at waitForPredicatePageFunction (__puppeteer_evaluation_script__:9:18)",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 32,
            "height": -223
          },
          "misMatchPercentage": "44.51",
          "analysisTime": 315
        },
        "diffImage": "..\\bitmaps_test\\20200302-171209\\failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    }
  ]
});