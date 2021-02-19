# process1

School Reports Company
- find how students got on in tests
- string of comma seperated values
- build a report on top of that

Input
=> 'Green'
-> 'Amber'
=> 'Red'
=> 'Green, Green'
=>'Green, Green, Red, Amber, Red"


Output
=> 'Green: 1'
=> 'Amber: 1'
=> 'Red: 1'
=> 'Green: 2'
=> "Green: 2\nAmber: 1\nRed: 2"'


Edge Case
"Green,Dave,Whimsy,Red"
=> "Green: 1\nRed: 1\nUncounted: 2"
