function prepCommentaire(titreProjet) {
//we could just pass ALL the variables via parameters in Sotryline, and use a for loop to go through all of them. But for now, we didn't.
var player=GetPlayer();

var noteComments = ""; //this will contain the entire String of: Module title, slide title, slide comment.

var formatedProjectTitle = "<div class = 'titreProjet'>" + titreProjet + "<img class = 'logo' src='images/logo.jpg' alt='logo'><br/></div>";

var commentaire_01 = player.GetVar("MonCommentaire_01").trim(); //Remove leading and trailing spaces in the comment.

var commentaireFormate_01  = "";


var slideTitle_01 = player.GetVar("SlideTitle_01");
var formatedSlideTitle_01 = "<div class = 'slideTitle'>" + slideTitle_01 + "</div>";


var currentTime = new Date();
var month = currentTime.getMonth()+1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();

var dateString = day + " / " + month + " / " + year;
var formatedDate = "<div class = 'dateText'><p>" + dateString + "</p></div>";



	
    if (commentaire_01 != "") { //if there is a comment, then clean the comment, and add the screen cap below the notes
            commentaire_01 = commentaire_01.replace(/\n/g,"<br />"); //replace all new lines with <br />
            commentaireFormate_01 = formatedSlideTitle_01 + "<div class = 'indent notes'><p>" + commentaire_01.trim() + "</p> <p>&nbsp;</p></div>"; //remove beginning and ending white spaces, and format for HTML presentation
    }

	
	noteComments = 
					"<div class = 'notebookFormat'>"
					+ "<div class = 'bar'></div>"
						+ formatedProjectTitle
						//+ formatedDate //remove slashes before + to add the formated date
						+ "<p class= 'line'></p>"
//section 1
						+ commentaireFormate_01 



							
                    + "</div>";                						
	
		    localStorage.setItem("TempoStorageContent",noteComments);

}// fin function prepCommentaire();