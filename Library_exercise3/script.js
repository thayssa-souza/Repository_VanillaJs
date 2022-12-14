(() => {
    const styles = document.createElement("script");
    styles.setAttribute("src", "scriptStyle.js");
    document.body.appendChild(styles);
 })();

for (const files of [
    "./commonFunctions.js",
    "./api.js",
    "./header.js",
    "./home.js",
    "./crud/create.js",
    "./crud/get.js",
    "./crud/updateAndDelete.js",
    "./crud/delete.js",
    "./footer.js"
    ]){
    const script = document.createElement("script");
    script.setAttribute("src", `${files}`);
    document.head.appendChild(script);
}


