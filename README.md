# cs280-term-project
Term project for Info. Assurance and Cryptography class at UHart. Fall semester 2022

A term project for a class at UHart. This project will be done by my project partner April McBroom and I, and I plan to work on the development of a Javascript ACE (Arbitrary Code Execution) exploit (via Heap Manipulation via Buffer Overflow), while she works on the code to inject following exploitation in order to further exploit the system (in this case, Windows 10).

Update: 11-1-22
It appears I may have found a functional exploit utilizing CSS and JS!
I'm not 100% sure whether or not it is a buffer overflow, but I'm pretty sure it is a zero day,
which is a really nice thing to think about.
As of right now, there is a JS function which exploits a CSS property (position: fixed) which stores
memory of any elements with said property similar to malloc() in C, apparently.
Further research and work will be necessary to see what happens next, though.
