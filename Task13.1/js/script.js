var items = document.getElementsByTagName("li")

for (var i = 0; i < items.length; i++) {

    items[i].onclick = function () {

        for (var j = 0; j < items.length; j++) {
            items[j].style.color = ""
        }

        this.style.color = "red"
    }
}
