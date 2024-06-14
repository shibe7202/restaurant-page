function menu() {
    const div = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.className = "header";
    div.appendChild(header);

    const item1 = document.createElement("p");
    item1.setAttribute('style', 'white-space: pre;');
    item1.textContent = "Enchiladas #1 \r\n";
    item1.textContent += "Sed ut perspiciatis unde omnis iste natus";
    div.appendChild(item1);

    const item2 = document.createElement("p");
    item2.setAttribute('style', 'white-space: pre;');
    item2.textContent = "Enchiladas #2 \r\n"
    item2.textContent += "totam rem aperiam, eaque ipsa quae ab illo";
    div.appendChild(item2);

    const item3 = document.createElement("p");
    item3.setAttribute('style', 'white-space: pre;');
    item3.textContent = "Enchiladas #3 \r\n"
    item3.textContent += "quasi architecto beatae vitae dicta sunt explicabo.";
    div.appendChild(item3);
}

export { menu };