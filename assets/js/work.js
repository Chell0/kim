function fixMlink() {
    let item1 = '@';
    let item2 = '.';
    let mClearText = `cwaczynski${item1}online${item2}de`

    document.getElementById("m__link").innerHTML = `<a href="mailto:${mClearText}">${mClearText}</a>`
}

fixMlink();
