var main = function() {
    "use strict";

    //declare a method for adding comments from input box, to avoid code duplication
    var addCommentFromInputBox = function () {

        //declare the variable to store the new comment
        var $new_comment; 
        

        //if the input field is not empty
        if($(".comment-input input").val() !== "") {

            //then get the entered value from the input field
            $new_comment = $("<p>").text($(".comment-input input").val());

            //hide the comment so it doesn't appear immediately
            $new_comment.hide();

            //append this comment to the other comments
            $(".comments").append($new_comment);

            //make the comment appear
            $new_comment.fadeIn();

            //clear the input field
            $(".comment-input input").val("");
        }
    };

    //event handler for clicking on the + button
    //listens on the button
    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox();
    });

    //other listener, this listens for the keypress event, 
    //and it's listening on the input box
    $(".comment-input input").on("keypress", function(event) {

        //if enter is pressed
        if (event.keyCode == 13) {
            addCommentFromInputBox();
        }
        
    });
};


$(document).ready(main);