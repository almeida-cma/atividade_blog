document.getElementById("searchInput").addEventListener("keyup", function() {
    var searchValue = this.value.toLowerCase();
    var posts = document.getElementsByClassName("post");

    for (var i = 0; i < posts.length; i++) {
        var postTitle = posts[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (postTitle.indexOf(searchValue) > -1) {
            posts[i].style.display = "";
        } else {
            posts[i].style.display = "none";
        }
    }
});
