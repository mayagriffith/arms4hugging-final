window.onload = function(){
  hide()
}

function stateRepresentative() {
  var state = document.getElementById("mySelection").value;
  if (state == "Alabama") {
    var str = "https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby";
    var result = str.link("https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby");
    var senator = "Richard C. Shelby (R): "
    var message = " - select 'Gun Control' for Topic"
    var str2 = "https://www.jones.senate.gov/contact/email-doug";
    var result2 = str2.link("https://www.jones.senate.gov/contact/email-doug");
    var senator2 = "Doug Jones (D): "
    var message2 = " - select 'Share Your Opinion on Legislation' and then 'Gun Control' for Message Topic"
  }
  else if (state == "Alaska") {
    var str = "https://www.murkowski.senate.gov/contact/email";
    var result = str.link("https://www.murkowski.senate.gov/contact/email");
    var senator = "Lisa Murkowski (R): ";
    var message = " - select 'Second Amendment Issues' for Topic";
    var str2 = "https://www.sullivan.senate.gov/contact/email";
    var result2 = str2.link("https://www.sullivan.senate.gov/contact/email");
    var senator2 = "Dan Sullivan (R): ";
    var message2 = " - select 'Gun Control' for Message Topic";
  }
  else if (state == "Arizona") {
    var str = "https://www.mcsally.senate.gov/contact_martha";
    var result = str.link("https://www.mcsally.senate.gov/contact_martha");
    var senator = "Martha McSally (R): ";
    var message = " - select '2nd Amendment' for Topic";
    var str2 = "https://www.sinema.senate.gov/contact-kyrsten";
    var result2 = str2.link("https://www.sinema.senate.gov/contact-kyrsten");
    var senator2 = "Kyrsten Sinema (D): ";
    var message2 = " - select 'Second Amendment' for Issue";
  }
  else if (state == "Arkansas") {
    var str = "https://www.boozman.senate.gov/public/index.cfm/e-mail-me";
    var result = str.link("https://www.boozman.senate.gov/public/index.cfm/e-mail-me");
    var senator = "John Boozman (R): ";
    var message = "";
    var str2 = "https://www.cotton.senate.gov/?p=contact";
    var result2 = str2.link("https://www.cotton.senate.gov/?p=contact");
    var senator2 = "Tom Cotton (R): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "California") {
    var str = "https://www.feinstein.senate.gov/public/index.cfm/e-mail-me";
    var result = str.link("https://www.feinstein.senate.gov/public/index.cfm/e-mail-me");
    var senator = "Dianne Feinstein (D): ";
    var message = " - select 'Gun Control' for Issue/Topic";
    var str2 = "https://www.harris.senate.gov/contact/email";
    var result2 = str2.link("https://www.harris.senate.gov/contact/email");
    var senator2 = "Kamala D. Harris (D): ";
    var message2 = " - select 'Gun Safety' for Issue";
  }
  else if (state == "Colorado") {
    var str = "https://www.gardner.senate.gov/contact-cory/email-cory";
    var result = str.link("https://www.gardner.senate.gov/contact-cory/email-cory");
    var senator = "Cory Gardner (R): ";
    var message = " - select 'Share your opinions or comment on legislation or issues' and then 'Gun Control' for Message Topic";
    var str2 = "https://www.bennet.senate.gov/public/index.cfm/index.cfm/write-to-michael";
    var result2 = str2.link("https://www.bennet.senate.gov/public/index.cfm/index.cfm/write-to-michael");
    var senator2 = "Michael F. Bennet (D): ";
    var message2 = " - select 'Second Amendment' for Topic";
  }
  else if (state == "Connecticut") {
    var str = "https://www.blumenthal.senate.gov/contact/";
    var result = str.link("https://www.blumenthal.senate.gov/contact/");
    var senator = "Richard Blumenthal (D): ";
    var message = " - select 'Gun Violence & Second Amendment Rights' for Message Topic";
    var str2 = "https://www.murphy.senate.gov/contact";
    var result2 = str2.link("https://www.murphy.senate.gov/contact");
    var senator2 = "Chris Murphy (D): ";
    var message2 = " - select 'Gun Control' for Message Topic";
  }

  else if (state == "Delaware") {
    var str = "https://www.carper.senate.gov/public/index.cfm/email-senator-carper";
    var result = str.link("https://www.carper.senate.gov/public/index.cfm/email-senator-carper");
    var senator = "Thomas R. Carper (D): ";
    var message = " - select 'Guns and Firearms' for Topic";
    var str2 = "https://www.coons.senate.gov/contact/share-your-opinion";
    var result2 = str2.link("https://www.coons.senate.gov/contact/share-your-opinion");
    var senator2 = "Christopher A. Coons (D): ";
    var message2 = " - select 'Guns' for Subject";
  }

  else if (state == "Florida") {
    var str = "https://www.rubio.senate.gov/public/index.cfm/contact";
    var result = str.link("https://www.rubio.senate.gov/public/index.cfm/contact");
    var senator = "Marco Rubio (R): ";
    var message = " - select 'Guns' for Topic";
    var str2 = "https://www.rickscott.senate.gov/contact_rick";
    var result2 = str2.link("https://www.rickscott.senate.gov/contact_rick");
    var senator2 = "Rick Scott (R): ";
    var message2 = " - select 'Public Safety' for Topic";
  }

  else if (state == "Georgia") {
    var str = "https://www.isakson.senate.gov/public/index.cfm/email-me";
    var result = str.link("https://www.isakson.senate.gov/public/index.cfm/email-me");
    var senator = "Johnny Isakson (R): ";
    var message = " - select 'Second Amendment' for Topic";
    var str2 = "https://www.perdue.senate.gov/connect/email";
    var result2 = str2.link("https://www.perdue.senate.gov/connect/email");
    var senator2 = "David Perdue (R): ";
    var message2 = " - select 'Gun Control' for Topic";
  }
  else if (state == "Hawaii") {
    var str = "https://www.rubio.senate.gov/public/index.cfm/contact";
    var result = str.link("https://www.rubio.senate.gov/public/index.cfm/contact");
    var senator = "Mazie K. Hirono (D): ";
    var message = " - select 'Civil Rights/Liberties/Minorities/Religion'";
    var str2 = "https://www.schatz.senate.gov/contact";
    var result2 = str2.link("https://www.schatz.senate.gov/contact");
    var senator2 = "Brian Schatz (D): ";
    var message2 = " - for 'Why are you contacting the Senator?', select 'Share your opinion or comments on bills or other issues' and for the Message Topic, select 'Gun Control'";
  }
  else if (state == "Idaho") {
    var str = "https://www.crapo.senate.gov/contact/email-me";
    var result = str.link("https://www.crapo.senate.gov/contact/email-me");
    var senator = "Mike Crapo (R): ";
    var message = "- select 'Not Listed/Other' for Topic";
    var str2 = "https://www.risch.senate.gov/public/index.cfm/email";
    var result2 = str2.link("https://www.risch.senate.gov/public/index.cfm/email");
    var senator2 = "James E. Risch (R): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "Illinois") {
    var str = "https://www.duckworth.senate.gov/content/contact-senator";
    var result = str.link("https://www.duckworth.senate.gov/content/contact-senator")
    var senator = "Tammy Duckworth (D): "
    var message = " - select 'Gun Control' for Topic";
    var str2 = "https://www.durbin.senate.gov/contact/";
    var result2 = str.link("https://www.durbin.senate.gov/contact/")
    var senator2 = "Richard J. Durbin (D): ";
    var message2 = " - select 'Guns' for Topic";
    }
  else if (state == "Indiana") {
      var str = "http://www.braun.senate.gov/contact-mike";
      var result = str.link("http://www.braun.senate.gov/contact-mike");
      var senator = "Mike Braun (R): ";
      var message = " - select 'Gun Control' for Topic";
      var str2 = "https://www.young.senate.gov/contact";
      var result2 = str.link("https://www.young.senate.gov/contact")
      var senator2 = "Todd Young (R): ";
      var message2 = " - select 'Gun Control' for Topic";
    }
  else if (state == "Iowa") {
    var str = "https://www.grassley.senate.gov/constituents/questions-and-comments";
    var result = str.link("https://www.grassley.senate.gov/constituents/questions-and-comments");
    var senator = "Chuck Grassley (R): ";
    var message = " - select 'Second Amendment' for Topic";
    var str2 = "https://www.ernst.senate.gov/public/index.cfm/email-joni";
    var result2 = str.link("https://www.ernst.senate.gov/public/index.cfm/email-joni");
    var senator2 = "Joni Ernst (R): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "Kansas") {
      var str = "http://www.moran.senate.gov/public/index.cfm/e-mail-jerry";
      var result = str.link("http://www.moran.senate.gov/public/index.cfm/e-mail-jerry");
      var senator = "Jerry Moran (R): ";
      var message = " - select 'Comment or Ask Questions about Specfic Issues or Legislation' for How can I help you? 'Second Amendment' for Issues";
      var str2 = "http://www.roberts.senate.gov/public/?p=EmailPat";
      var result2 = str.link("http://www.roberts.senate.gov/public/?p=EmailPat");
      var senator2 = "Pat Roberts: (R): ";
      var message2 = " - select 'Second Amendment' for Topic";
    }
  else if (state == "Kentucky") {
    var str = "http://www.mcconnell.senate.gov/public/index.cfm?p=contact";
    var result = str.link("http://www.mcconnell.senate.gov/public/index.cfm?p=contact");
    var senator = "Mitch McConnell (R): ";
    var message = " - select 'Second Amendment' for Topic";
    var str2 = "http://www.paul.senate.gov/connect/email-rand";
    var result2 = str.link("http://www.paul.senate.gov/connect/email-rand");
    var senator2 = "Rand Paul: (R): ";
    var message2 = " - select 'Guns/2nd Amendment' for Topic";
  }
  else if (state == "Louisiana") {
    var str = "http://www.cassidy.senate.gov/contact";
    var result = str.link("http://www.cassidy.senate.gov/contact");
    var senator = "Bill Cassidy (R): ";
    var message = " - select 'Gun Control' for Topic";
    var str2 = "http://www.kennedy.senate.gov/public/email-me";
    var result2 = str.link("http://www.kennedy.senate.gov/public/email-me");
    var senator2 = "John Kennedy: (R): ";
    var message2 = " - select '2nd Amendment' for Topic";
  }
  else if (state == "Maine") {
    var str = "http://www.collins.senate.gov/contact";
    var result = str.link("http://www.collins.senate.gov/contact");
    var senator = "Susan M. Collins (R): ";
    var message = " - select 'Gun Control' for Topic";
    var str2 = "https://www.king.senate.gov/contact";
    var result2 = str.link("https://www.king.senate.gov/contact");
    var senator2 = "Angus S., King Jr. (I): ";
    var message2 = " - select 'Gun Control' for Topic Area"
  }
  else if (state == "Maryland") {
    var str = "http://www.cardin.senate.gov/contact/";
    var result = str.link("http://www.cardin.senate.gov/contact/");
    var senator = "Benjamin L.Cardin (D): ";
    var message = " - select 'Gun Safety' for Topic";
    var str2 = "http://www.vanhollen.senate.gov/contact/email";
    var result2 = str.link("http://www.vanhollen.senate.gov/contact/email");
    var senator2 = " Chris Van Hollen (D): ";
    var message2 = " - select 'Share Your Opinion On Legislation' for Contact 'Gun Control' for Topic";
  }
  else if (state == "Massachusetts") {
    var str = "https://www.markey.senate.gov/contact";
    var result = str.link("https://www.markey.senate.gov/contact");
    var senator = "Edward J. Markey (D): ";
    var message = " - select 'Gun Control' for Topic";
    var str2 = "https://www.warren.senate.gov/?p=email_senator";
    var result2 = str.link("https://www.warren.senate.gov/?p=email_senator");
    var senator2 = "Elizabeth Warren: (D): ";
    var message2 = " - select 'Share Your Opinion' for Contact 'Guns' for Topic";
  }
  else if (state == "Michigan") {
    var str = "https://www.peters.senate.gov/contact/email-gary";
    var result = str.link("https://www.peters.senate.gov/contact/email-gary");
    var senator = "Gray C. Peters (D): ";
    var message = " - select 'Gun Safety' for Topic";
    var str2 = "https://www.stabenow.senate.gov/contact";
    var result2 = str.link("https://www.stabenow.senate.gov/contact");
    var senator2 = "Debbie Stabenow (D): ";
    var message2 = "";
  }
  else if (state == "Minnesota") {
    var str = "http://www.klobuchar.senate.gov/public/index.cfm/contact";
    var result = str.link("http://www.klobuchar.senate.gov/public/index.cfm/contact");
    var senator = "Amy Klobuchar (D): ";
    var message = " - select 'Civil Rights' for Issue";
    var str2 = "https://www.smith.senate.gov/share-your-opinion";
    var result2 = str.link("https://www.smith.senate.gov/share-your-opinion");
    var senator2 = "Tina Smith (D): ";
    var message2 = " - select 'Government Affairs' for Topic"
  }
  else if (state == "Mississippi") {
    var str = "https://www.hydesmith.senate.gov/content/contact-senator";
    var result = str.link("https://www.hydesmith.senate.gov/content/contact-senator");
    var senator = "Cindy Hyde-Smith (R): ";
    var message = " - select 'Gun Control' for Topic";
    var str2 = "https://www.wicker.senate.gov/public/index.cfm/contact";
    var result2 = str.link("https://www.wicker.senate.gov/public/index.cfm/contact");
    var senator2 = "Roger F. Wicker (R): ";
    var message2 = " - select 'Second Amendment' for Subject";
  }
  else if (state == "Missouri") {
    var str = "https://www.blunt.senate.gov/public/index.cfm/contact-roy";
    var result = str.link("https://www.blunt.senate.gov/public/index.cfm/contact-roy");
    var senator = "Roy Blunt (R): ";
    var message = " - select 'Second Amendment' for Topic";
    var str2 = "https://www.hawley.senate.gov/contact-senator-hawley";
    var result2 = str.link("https://www.hawley.senate.gov/contact-senator-hawley");
    var senator2 = "Josh Hawley (R): ";
    var message2 = " - select 'Second Amendment' for Topic";
  }
  else if (state == "Montana") {
    var str = "https://www.daines.senate.gov/connect/email-steve";
    var result = str.link("https://www.daines.senate.gov/connect/email-steve")
    var senator = "Steve Daines (R): "
    var message = " - select 'Share Your Opinions or Commet on Legislation or Issues' for How Can I Help You, select 'Second Amendment' for Message Topic"
    var str2 = "https://www.tester.senate.gov/?p=email_senator";
    var result2 = str.link("https://www.tester.senate.gov/?p=email_senator")
    var senator2 = "Jon Tester (D): "
    var message2 = " - select 'Guns' for Topic"
  }
  else if (state == "Nebraska") {
    var str = "http://www.fischer.senate.gov/public/index.cfm/contact";
    var result = str.link("http://www.fischer.senate.gov/public/index.cfm/contact");
    var senator = "Deb Fischer (R): ";
    var message = " - select 'Comment on an Issue' for Conatct, select 'Second Amendment Rights' for Topic";
    var str2 = "http://www.sasse.senate.gov/public/index.cfm/email-ben";
    var result2 = str.link("http://www.sasse.senate.gov/public/index.cfm/email-ben");
    var senator2 = "Ben Sasse (R): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "Nevada") {
    var str = "https://www.cortezmasto.senate.gov/contact/connect";
    var result = str.link("https://www.cortezmasto.senate.gov/contact/connect");
    var senator = "Catherine Cortez Masto (D): ";
    var message = " - select 'Share Your Opinion on Legislation' for Connect With Catherine, select 'Gun Violence Prevention' for Topic";
    var str2 = "https://www.rosen.senate.gov/contact_jacky";
    var result2 = str.link("https://www.rosen.senate.gov/contact_jacky");
    var senator2 = "Jacky Rosen (D): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "New Hampshire") {
    var str = "https://www.hassan.senate.gov/contact/email";
    var result = str.link("https://www.hassan.senate.gov/contact/email");
    var senator = "Margaret Wood Hassan (D): ";
    var message = " - select 'Gun Conrol' for Topic";
    var str2 = "https://www.shaheen.senate.gov/contact/contact-jeanne";
    var result2 = str.link("https://www.shaheen.senate.gov/contact/contact-jeanne");
    var senator2 = "Jeanne Shaheen (D): ";
    var message2 = " - select 'Crime/Drug/Guns' for Issue";
  }
  else if (state == "New Jersey") {
    var str = "https://www.booker.senate.gov/?p=contact";
    var result = str.link("https://www.booker.senate.gov/?p=contact");
    var senator = "Cory A. Booker (D): ";
    var message = " - select 'Guns and Crime' for Topic";
    var str2 = "https://www.menendez.senate.gov/contact";
    var result2 = str.link("https://www.menendez.senate.gov/contact");
    var senator2 = "Robert Menendez (D): ";
    var message2 = " - select 'Guns and Crime' for Topic";
  }
  else if (state == "New Mexico") {
    var str = "http://www.heinrich.senate.gov/contact";
    var result = str.link("http://www.heinrich.senate.gov/contact");
    var senator = "Martin Heinrich (D): ";
    var message = " - select 'Gun Violence' for Topic";
    var str2 = "https://www.tomudall.senate.gov/contact/email-tom";
    var result2 = str.link("https://www.tomudall.senate.gov/contact/email-tom");
    var senator2 = "Tom Udall (D): ";
    var message2 = " - select 'Second Amendment Rights' for Topic";
  }
  else if (state == "New York") {
    var str = "https://www.gillibrand.senate.gov/contact/email-me";
    var result = str.link("https://www.gillibrand.senate.gov/contact/email-me");
    var senator = "Kristen E. Gillibrand (D): ";
    var message = " - select 'Gun Control' for Subject";
    var str2 = "https://www.schumer.senate.gov/contact/email-chuck";
    var result2 = str.link("https://www.schumer.senate.gov/contact/email-chuck");
    var senator2 = "Charles E. Schumer (D): ";
    var message2 = " - select 'Share Your Opinion or Comments on Bills or The Other Issues' for How Can Chuck Help, select 'Civil Rights' for Message Topic";
  }
  else if (state == "North Carolina") {
    var str = "https://www.burr.senate.gov/contact/email";
    var result = str.link("https://www.burr.senate.gov/contact/email");
    var senator = "Richard Burr (R): ";
    var message = " - select 'Guns' for Topic"
    var str2 = "https://www.tillis.senate.gov/public/index.cfm/email-me";
    var result2 = str.link("https://www.tillis.senate.gov/public/index.cfm/email-me");
    var senator2 = "Thom Tillis (R): ";
    var message2 = " - select 'Second Amendment' for Topic";
  }
  else if (state == "North Dakota") {
    var str = "https://www.cramer.senate.gov/contact_kevin";
    var result = str.link("https://www.cramer.senate.gov/contact_kevin");
    var senator = "Kevin Cramer (R): ";
    var message = " - select 'Civil Rights' for Topic";
    var str2 = "http://www.hoeven.senate.gov/public/index.cfm/email-the-senator";
    var result2 = str.link("http://www.hoeven.senate.gov/public/index.cfm/email-the-senator");
    var senator2 = "John Hoeven (R): ";
    var message2 = " - select 'Guns' for Topic";
  }
  else if (state == "Ohio") {
    var str = "https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form";
    var result = str.link("https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form");
    var senator = "Rob Portman (R): ";
    var message = " - select 'Drugs/Crime,Second Amendment' for Topic";
    var str2 = "http://www.brown.senate.gov/contact/";
    var result2 = str.link("http://www.brown.senate.gov/contact/");
    var senator2 = "Sherrod Brown (D): ";
    var message2 = " - select 'Share Your Thoughts' for Contact, select 'Gun Control' for Topic";
  }
  else if (state == "Oklahoma") {
    var str = "https://www.inhofe.senate.gov/contact";
    var result = str.link("https://www.inhofe.senate.gov/contact");
    var senator = "James M. Inhofe (R): ";
    var message = " - select 'Second Amendment' for Topic";
    var str2 = "https://www.lankford.senate.gov/contact/email";
    var result2 = str.link("https://www.lankford.senate.gov/contact/email");
    var senator2 = "James M. Lankford (R): ";
    var message2 = " - select 'Gun Control' for Topic";
  }
  else if (state == "Oregon") {
    var str = "http://www.merkley.senate.gov/contact/";
    var result = str.link("http://www.merkley.senate.gov/contact/");
    var senator = "Jeff Merkley (D): ";
    var message = " - select 'Share your opinon or comments on bills or other issues' 'Guns' for Topic";
    var str2 = "https://www.wyden.senate.gov/contact/email-ron";
    var result2 = str.link("https://www.wyden.senate.gov/contact/email-ron");
    var senator2 = "Ron Wyden (D): ";
    var message2 = " - select 'Guns' for Topic";
  }

  else if (state == "Pennsylvania") {
      var str = "https://www.toomey.senate.gov/?p=contact";
      var result = str.link("www.toomey.senate.gov/?p=contact");
      var senator = "Patrick J. Toomey (R): ";
      var message = " - select '2nd Amendment' for Topic";
      var str2 = "www.casey.senate.gov/contact/";
      var result2 = str.link("www.casey.senate.gov/contact/");
      var senator2 = "Robert P. Casey, Jr. (D): ";
      var message2 = " - select 'Firearms' for Topic";
  }
  else if (state == "Rhode Island") {
    var str = "www.whitehouse.senate.gov/contact/email-sheldon";
    var result = str.link("www.whitehouse.senate.gov/contact/email-sheldon");
    var senator = "Sheldon Whitehouse (D): ";
    var message = "";
    var str2 = "https://www.reed.senate.gov/contact/email";
    var result2 = str.link("https://www.reed.senate.gov/contact/email");
    var senator2 = "Jack Reed (D): ";
    var message2 = " - select 'Share Your Thoughts', and then 'Gun Safety' for Topic";
  }
  else if (state == "South Carolina") {
     var str = "www.scott.senate.gov/contact/email-me";
     var result = str.link("www.scott.senate.gov/contact/email-me");
     var senator = "Tim Scott (R): ";
     var message = " - select 'Share Your Opinion On Legislation', and then 'Guns' for Topic";
     var str2 = "https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham";
     var result2 = str.link("https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham");
     var senator2 = "Lindsey Graham (R): ";
     var message2 = " - select 'Share Your Opinion' for Contact, and then'Gun Control' for Topic";
  }
  else if (state == "South Dakota") {
    var str = "https://www.rounds.senate.gov/contact/email-mike";
    var result = str.link("https://www.rounds.senate.gov/contact/email-mike");
    var senator = "Mike Rounds (R): ";
    var message = " - select 'Share your opinions or comment on legislation or issues' and then 'Second Amendment' for Message Topic";
    var str2 = "https://www.thune.senate.gov/public/index.cfm/contact";
    var result2 = str.link("https://www.thune.senate.gov/public/index.cfm/contact");
    var senator2 = "John Thune (R): ";
    var message2 = " - select 'Second Amendment' for What is your general topic?";
  }

  else if (state == "Tennessee") {
    var str = "www.blackburn.senate.gov/contact_marsha";
    var result = str.link("www.blackburn.senate.gov/contact_marsha");
    var senator = "Marsha Blackburn (R): ";
    var message = " - select 'Gun Violence' for Topic";
    var str2 = "www.alexander.senate.gov/public/index.cfm?p=Email";
    var result2 = str.link("www.alexander.senate.gov/public/index.cfm?p=Email");
    var senator2 = "Lamar Alexander (R): ";
    var message2 = " - select 'Share Your Opinion' for Contact and 'Gun and Firearms' for Topic";
  }
  else if (state == "Texas") {
     var str = "www.cornyn.senate.gov/contact";
     var result = str.link("www.cornyn.senate.gov/contact");
     var senator = "John Cornyn (R): ";
     var message = " - select 'Discuss an Issue' for Reason for Contacting and 'Firearms' for 'The Issue You'd Like to Discuss'";
     var str2 = "https://www.cruz.senate.gov/?p=form&id=16";
     var result2 = str.link("https://www.cruz.senate.gov/?p=form&id=16");
     var senator2 = "Ted Cruz (R): ";
     var message2 = " - select 'Second Amendment' for Topic";
   }
   else if (state == "Utah") {
        var str = " www.lee.senate.gov/public/index.cfm/contact";
        var result = str.link(" www.lee.senate.gov/public/index.cfm/contact");
        var senator = "Mike Lee (R): ";
        var message = " - select 'Gun Rights' for Topic";
        var str2 = "www.romney.senate.gov/contact-senator-romney";
        var result2 = str.link("www.romney.senate.gov/contact-senator-romney");
        var senator2 = "Mitt Romney (R): ";
        var message2 = " - select 'Second Amendment' for Topic";
    }

    else if (state == "Virginia") {
       var str = "www.kaine.senate.gov/contact";
       var result = str.link("www.kaine.senate.gov/contact");
       var senator = "Tim Kaine (D): ";
       var message = " - select 'Share Your Opinion on Policy Issues' for 'Contact', and then 'Gun Violence' for Message Topic";
       var str2 = "https://www.warner.senate.gov/public/index.cfm?p=ContactPage";
       var result2 = str.link("https://www.warner.senate.gov/public/index.cfm?p=ContactPage");
       var senator2 = "Mark R. Warner (D): ";
       var message2 = " - select 'Guns' for Topic";
    }
     else if (state == "Vermont") {
        var str = "www.leahy.senate.gov/contact/";
        var result = str.link("www.leahy.senate.gov/contact/");
        var senator = "Patrick J. Leahy (D): ";
        var message = " - select 'Gun Control & Second Amendment Rights' for Topic";
        var str2 = " www.sanders.senate.gov/contact/comment";
        var result2 = str.link("https://www.sanders.senate.gov/contact/comment");
        var senator2 = "Bernard Sanders (I): ";
        var message2 = " - select 'Guns' for TMessage Topic";
    }

    else if (state == "Washington") {
      var str = "https://www.cantwell.senate.gov/contact/email/form";
      var result = str.link("https://www.cantwell.senate.gov/contact/email/form");
      var senator = "Maria Cantwell (D): ";
      var message = "'Gun Violence' for Topic";
      var str2 = "www.murray.senate.gov/public/index.cfm/contactme";
      var result2 = str.link("www.murray.senate.gov/public/index.cfm/contactme");
      var senator2 = "Patty Murray (D): ";
      var message2 = " - select 'Firearms' for Topic";
    }
    else if (state == "Wisconsin") {
      var str = "www.baldwin.senate.gov/feedback";
      var result = str.link("www.baldwin.senate.gov/feedback");
      var senator = "Tammy Baldwin (D): ";
      var message = " - select 'Share your opinion on legislation', and then 'Second Amendment' for Message Topic";
      var str2 = "https://www.ronjohnson.senate.gov/public/index.cfm/email-the-senator";
      var result2 = str.link("https://www.ronjohnson.senate.gov/public/index.cfm/email-the-senator");
      var senator2 = "Ron Johnson (R): ";
      var message2 = " - select 'Social Issues' for Topic";
    }
    else if (state == "West Virginia") {
      var str = " www.capito.senate.gov/contact/contact-shelley";
      var result = str.link("www.capito.senate.gov/contact/contact-shelley");
      var senator = "Shelley Moore Capito (R): ";
      var message = " - select 'Send an email to comment on Legislation' and then 'Gun Control'";
      var str2 = "https://www.manchin.senate.gov/contact-joe/email-joe";
      var result2 = str.link("https://www.manchin.senate.gov/contact-joe/email-joe");
      var senator2 = "Joe Manchin III (D): ";
      var message2 = " - select 'Share Your Opinion On Legislation' for 'What Would You Like to Do?', and then 'Gun Ownership' for Message Topic";
    }
   else if (state == "Wyoming") {
     var str = "www.barrasso.senate.gov/public/index.cfm/contact-form";
     var result = str.link("www.barrasso.senate.gov/public/index.cfm/contact-form");
     var senator = "John Barrasso (R): ";
     var message = " - select 'Second Amendent and Gun Rights' for Topic";
     var str2 = "https://www.enzi.senate.gov/public/index.cfm/e-mail-senator-enzi";
     var result2 = str.link("https://www.enzi.senate.gov/public/index.cfm/e-mail-senator-enzi");
     var senator2 = "Michael B. Enzi (R): ";
     var message2 = " - type 'Second Amendment and Gun Rights' for Topic";
      }

  else {
    var result = "";
    var senator = "";
    var message = "";
    var result2 = "";
    var senator2 = "";
    var message2 = "";
  }
    document.getElementById('senatorinfo').innerHTML = senator + result + message;
    document.getElementById('senator2info').innerHTML = senator2 + result2 + message2;
}

function updatePrewrittenMsg() {
  var state = document.getElementById("mySelection").value;
	var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById('lastname').value;
  var name = firstName + " " + lastName;
  // if(firstName == "" && state=="default"){
  //   window.alert("Please fill out the first name AND select a state.");
  // }
  if(firstName=="" || lastName==""){
    window.alert("Please fill out both the first name and the last name.");
  }
  else if (state == "default") {
    window.alert("Please select a state");
  }
  else {
    document.getElementById("pwmessage").value = "My name is " + name +
      ", and I am writing to you to urge you to close the loopholes in our gun control laws that continue " +
      "to make guns easily attainable for dangerous people. " +
      "There were 340 mass shootings in 2018, and the number in 2019 is already surpassing that rate. " +
      "A statistic like that is absolutely unacceptable, and change in our gun control laws needs to " +
      "take place immediately, before any further lives are taken. \nA very large majority of Americans believe that thorough background checks are necessary, " +
      "and it seems like a commonsense tool to keep weapons out of criminals, terrorists, and " +
      "the dangerously mentally ill. It is time to end this loophole in gun control laws with fatal consequences. " +
      "Thank you for doing what is right for " + state + " and the United States. \n \nRegards, \n" + name;
  }
}

function copyToClipboard() {
  var pwmessage1 = document.getElementById("pwmessage");
  var pwmessage2 = document.getElementById("pwmessage2");
  pwmessage1.select();
  document.execCommand("copy");
  window.alert("You've copied your prewritten message! This is it:\n" + pwmessage1.value);
}

function capitalizeFirstLetter() {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showThings() {
  var state = document.getElementById("mySelection").value;
	var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById('lastname').value;
  if(firstName=="" || lastName=="" || state == "default"){
    document.getElementById('pwmessage').style.display="none";
    document.getElementById("button").style.display="none";
    document.getElementById("justalinebreak").style.display="none";
    document.getElementById("direction1").style.display="none";
    document.getElementById("direction2").style.display="none";
  }
  else {
    document.getElementById('pwmessage').style.display="block";
    document.getElementById("button").style.display="block";
    document.getElementById("justalinebreak").style.display="block";
    document.getElementById("direction1").style.display="block";
    document.getElementById("direction2").style.display="block";
  }
}