data = [ 
    ["imgPost1", "imgAuthor", "nameAuthor1", "text1"], 
    ["imgPost2", "imgAuthor2", "nameAuthor2", "text2"], 
    ["imgPost3", "imgAuthor2", "nameAuthor3", "text3"], 
    ["imgPost4", "imgAuthor", "nameAuthor4", "text4"], 
]

class Parent{
    constructor(imgAuthor, authorName, description){
        this.imgAuthor = imgAuthor;
        this.authorName = authorName;
        this.description = description;
    }
    fillPost(){
        var origPost = document.getElementById("origPost")
        var clonePost = origPost.cloneNode(true)
        var cardBox = document.getElementsByClassName("postBox")[0]
        cardBox.appendChild(clonePost)
        var authorName = clonePost.getElementsByClassName("authorName")[0]
        authorName.innerHTML = this.authorName
        var comment = clonePost.getElementsByClassName("comment")[0]
        comment.innerHTML = this.description
    }
}
class Post extends Parent{
    constructor(imgContent, imgAuthor, authorName, description){
        super(imgAuthor, authorName, description)
        this.imgContent = imgContent
    }
}


class comment extends Parent{
    constructor(imgAuthor, authorName, description){
        super(imgAuthor, authorName, description)
    }
}
myObjects = []
for(var i = 0; i < data.length; i++){
    let myPost = new Post(data[i][0] , data[i][1], data[i][2] , data[i][3])
    myPost.fillPost()
    myObjects.push(myPost)
}
console.log(myObjects)
