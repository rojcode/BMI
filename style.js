class Styler {
    constructor(styles) {
      this.styles = styles;
    }
  
    applyStyles(element, selector) {
      const selectedStyles = this.styles[selector];
      if (selectedStyles) {
        for (let property in selectedStyles) {
          if (selectedStyles.hasOwnProperty(property)) {
            element.style[property] = selectedStyles[property];
          }
        }
      }
    }
  
    applyStylesToElements(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        this.applyStyles(element, selector);
      });
    }
  
    applyAllStyles() {
      for (let selector in this.styles) {
        if (this.styles.hasOwnProperty(selector)) {
          this.applyStylesToElements(selector);
        }
      }
    }
  }

  const cssStyle = new Styler({
    body: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      margin: "0",
      padding: "0",
      backgroundColor: "#8BC34A",
      color: "#fff",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    "#calculator-container": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
    },
    h2: { color: "#333" },
    label: { display: "block", margin: "10px 0", color: "#333" },
    input: {
      width: "100%",
      marginTop: "5px",
      padding: "8px",
      boxSizing: "border-box"
    },
    "#result": { marginTop: "20px", fontWeight: "bold", color: "#333" },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 15px",
      marginTop: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    },
    "button:hover": { backgroundColor: "#45a049" },
    "#weightValue, #heightValue": { color: "black" }
  })

  cssStyle.applyAllStyles();