export function checkBox() {
  return {
    xpath: {
      sidearrow: ".rct-collapse",
      downarrow:
        "li[class='rct-node rct-node-parent rct-node-expanded'] li:nth-child(1) span:nth-child(1) button:nth-child(1) > svg",
      subdownarrow: "label[for='tree-node-notes'] span[class='rct-checkbox']",
    },
  };
}
