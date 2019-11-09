document.getElementById('information').clicked = "no";
	document.getElementById('information2').clicked = "no";
  	function showOrHide(id) {
	    if (document.getElementById(id).clicked == "no"){
	    	
	      document.getElementById(id).clicked = "yes";
	      
	      if (id == 'information'){
		      html = "<p> Titulaire d'un diplome d'ingénieur IMT Atlantique avec une spécialisation en Data Science, j'ai également des connaissances en développement web. J'effectue actuellement mon stage de fin d'étude à Bureau Veritas en tant qu'apprenti data scientist.</p><a href="+'"docs/CV.pdf"'+"download> Voir mon CV</a>"
		      $( html ).appendTo($(document.getElementById(id)))
		      document.getElementById('prez').title = "Cacher cette section";

	  		}
	      if (id == 'information2'){
		      	html2='<p><b>Nom</b> : Vincent AGNES<br><b>Adresse</b> :XX XX XX 01120 La Boisse<br><b>Téléphone</b> :+33 6 01 45 XX XX<br><b>Mail </b>: vincentagnes01@gmail.com<br><b>Permis</b> :B véhiculé</p>'
		      	$( html2 ).appendTo($(document.getElementById(id)))
		      	document.getElementById('contact').title = "Cacher cette section";
	      }

	      else{}
	    }
	    else {
	      $(document.getElementById(id)).empty();
	      document.getElementById(id).clicked = "no";
	      if (id == 'information'){document.getElementById('prez').title = "Afficher ces informations";}
	      else{document.getElementById('contact').title = "Afficher ces informations";}
	      
	      
	      
		}
		
  	}

  	var item = document.getElementById("header");
	item.addEventListener("mouseover", changeHeadingOpacityOver, false);
	item.addEventListener("mouseout", changeHeadingOpacityOut, false);

	function changeHeadingOpacityOver()
	{  // not needed since item is already global, 
	   // I am assuming this is here just because it's sample code?
	   // var item = document.getElementById("button"); 
	   item.setAttribute("style", "filter: grayscale(20%);")
	   
	}

	function changeHeadingOpacityOut()
	{  
	   item.setAttribute("style", "filter: grayscale(80%);")
	}