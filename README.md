# vertical_timelines

grids: https://www.w3schools.com/css/css_grid.asp
vert lines: https://www.w3schools.com/howto/howto_css_vertical_line.asp
            https://www.delftstack.com/howto/html/html-vertical-line/
            https://freefrontend.com/css-timelines/

# Design Goals

There are two main goals that this project tries to aim for:

1. Self-contained and portable
   
   I wanted to create a single HTML file that contained everything it needed, with no external dependencies. The point to this is that someone may copy what you have written up and later have it be shown in the same way regardless of the new user's environment, without need to worry about collecting extra formatting files, scripting files, or scripting library files (like jQuery). Internet access is NOT assumed to be gauranteed.

    I'm allowing for an exception in that if a user refers to external URIs, for example embedding <img>s and etc., then that's that person's choice.
   
3. Proprtionality between entries

    I also wanted this to stand out in one unique way. The different time-based entires inside should stand near or apart from each other depending on the temporal distances between them. If two events happened relatively close to each other, say in terms of days rather than years, so should they appear on a timeline. If there's a relatively long period of time between two events, they should appear spread out from each other.

   This can create interesting consequences for the event data being added.



   
