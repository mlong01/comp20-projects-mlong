*******				Matt Long's MBTA Tracker "Application"			*******

INCORRECT IMPLEMENTATIONS:

	* There currently isn't functionality in the code that tracks the incoming
	  and outgoing trains. It was attempted, and the attempt currently sits
	  commented out in the code, but it didn't work.

	* Occasionally, the code misses the XML request. It doesn't recognize it
	  as 'red,' 'blue,' and 'orange,' nor is it an internal server error.
	  I put a patch on that just treats it as a server error (giving an 
	  error message saying to refresh the page). It seems functional,
	  but throws the server error catch a few more times than normal

	Everything else is implemented correctly.


THANK YOU'S

	* Walton Lee attempted to last-minute help me with the creating
	  of each station's table, but it was during crunch time and I
	  couldn't get it to work. He also showed me where to get the
	  'T' icon for the subway station markers


TOTAL NUMBER OF HOURS SPENT ON THIS PROGRAM: 20
	(Many of which were spent in the wee hours of the morning, resulting
	in incredibly inefficient working, as well as the necessary use of
	a token)