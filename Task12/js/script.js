var courses = ["html", "css", "js"]

var course = prompt("Enter course name")

var index = courses.findIndex((item) => item == course)

if (index != -1) {
    console.log("Course index = " + index)
}
else {
    courses.push(course)
    console.log("Course added")
}

courses.forEach((item) => {
    console.log(item)
})
