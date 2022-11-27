(() => {
    const styles = document.createElement("script");
    styles.setAttribute("src", "scriptStyle.js");
    document.body.appendChild(styles);
 })();

for (const files of [
    "./scriptStyles.js",
    "./header.js",
    "./crud/create.js",
    "./crud/get.js",
    "./crud/update.js",
    "./crud/delete.js",
    "./footer.js"
]) {
    const script = document.createElement("script");
    script.setAttribute("src", `${files}`);
    document.head.appendChild(script);
}
