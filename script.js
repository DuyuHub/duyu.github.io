function searchScripts() {

    const search =
        document.getElementById("search").value
        .toLowerCase()
        .trim();

    if (!search) {
        window.location.href = "scripts.html";
        return;
    }

    window.location.href =
        "scripts.html?search=" +
        encodeURIComponent(search);
}
