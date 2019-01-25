//save article button

//delete article button

//edit note/add note button

//edit form submit

//scrape button - ajax call to hit scrape route

//add form

//clear button

$(document).ready(function () {



    //save button
    // console.log("loaded")

    $(".saveArticle").on("click", function (event) {
        event.preventDefault();

        console.log("save clicked!")

        const id = $(this).parents("li").data("article-id")
        console.log(id)

        $.ajax({
            method: "PUT",
            url: `/api/articles/${id}`,
            data: { saved: true }
        }).then(function (res) {

            window.location.assign("/saved");
        });
    });

    $(".note").on("submit", function (event) {
        event.preventDefault();

        console.log("note submitted")

        // $("#post_comment").submit(function(event){
        //     var inputValue = $("input[name='type']",this).val(); 
        // });
        //  var inputValue = $("input[name='type']",this).val(); 

        var noteBody =    $("input[name='noteInput']",this).val(); 
        var articleID = $(".noteBody").attr("data-article-id")

        console.log(noteBody)

        $.ajax({
            method: "POST", //because we are creating
            url: `/api/notes/`,
            data: { noteBody: noteBody, articleID: articleID }
        }).then(function (res) {

            window.location.assign("/saved");
        });
    })

    $(".deleteArticle").on("click", function (event) {
        event.preventDefault();

        console.log("save clicked!")

        const id = $(this).parents("li").data("article-id")
        console.log(id)

        $.ajax({
            method: "PUT",
            url: `/api/articles/${id}`,
            data: { saved: false }
        }).then(function (res) {

            window.location.assign("/saved");
        });
    });

});
