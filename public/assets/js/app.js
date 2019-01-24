//save article button

//delete article button

//edit note/add note button

//edit form submit

//scrape button - ajax call to hit scrape route

//add form

//clear button

$( document ).ready(function() {
    
    

//save button
console.log("loaded")

$(".saveArticle").on("click", function(event){
    event.preventDefault();

    console.log("save clicked!")

    const id = $(this).parents("li").data("article-id")
    console.log(id)

    $.ajax({
        method: "PUT",
        url: `/api/articles/${id}`,
        data: { saved: true}
    }).then(function(res){

        window.location.assign("/saved");
    });
});

});
