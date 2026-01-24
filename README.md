


#  vsFRAME -- VIRTUAL HTML FRAMES MACHINERY
## (c) 2018-2026 Vladi Belperchinov-Shabanski "Cade" <cade@noxrun.com>

#  INTRODUCTION

vsFRAME is compact JavaScript HTML frames virtualization library.

#  SYNOPSIS

    <html>
    <body>

    <h1>vsFrame</h1>

    This is a html text for testing frames!

    <div class=vsframe>
        This is first <a href=go1.html>test</a>
    </div>

    This is out-of-frame link, which points 
    to <a href=go1.html data-vsframe-target=testvsframe1>target vsframe</a>

    And another frame:
    
    <div class=vsframe>
        <form action=form.pl method=post>
        <p><input name=text>
        <p><input type=file name=fff>
        <p><input type=submit value="GO!">
        </form>
    </div>

    <div class=vsframe id=testvsframe1>
      *** target vsframe here ***
    </div>


    Here is footer text
    <script src="vsframe.js"></script> 
    </body>
    </html>


#  DESCRIPTION

It uses 'DIV' blocks as virtual frames. All links and forms inside virtual
'DIV' frame will replace only the enclosing 'DIV' frame content instead of
reloading the whole page. 

To enable 'DIV' to act as virtual frame, "**vsframe**" class must be added (as
shown in the SYNOPSIS above).

If any link has "**data-vsframe-target**" attribute, the result data will be
replaced not in the current vsFrame (or document) but inside a vsFrame with
an ID, pointed by "**data-vsframe-target**".

Here is an example:

    This is out-of-frame link, which points 
    to <a href=go1.html data-vsframe-target=testvsframe1>target vsframe</a>

    text....
    text....
    text....

    <div class=vsframe id=testvsframe1>
      *** target vsframe here, result of link above will be replaced here ***
    </div>

#  NOTES

vsFRAME is similar to 'iframe' but very different than 'frame'.

vsFRAME replaces only the enclosing 'DIV' and the result is homogeneous HTML text.

vsFRAME is written in native JavaScript and does not have further dependencies.

vsFRAME is tested with latest Firefox, Safari, Opera and Chrome 
(as of the latest vsframe.js commit time. :))

vsFRAME is intentionally plain JS code without modern JS dev nonsense. It has no
minified version, if you need one, you are free to make one. If you do not
like this, there are countless other JS "frameworks" and "revolutionary" libs.

vsFRAME is licensed under GPLv2, for full text see file "COPYING".

#  AUTHOR

    Vladi Belperchinov-Shabanski "Cade"
    <cade@noxrun.com>
    https://github.com/cade-vs
    https://github.com/cade-vs/vsframe
    github repo: git@github.com:cade-vs/vsframe.git
