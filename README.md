# cs280-term-project
Term project for Info. Assurance and Cryptography class at UHart. Fall semester 2022

Update: 1-7-23
I ended up going a different direction with my project (related to PDF based JavaScript exploitation), however none of that was put here, as I was working in a different environment. In the end I was able to demonstrate the bug which cracks Foxit PDF Reader wide open to ACE, and I wound up writing a report moreso on the threat level and nature of Arbitrary Code Execution exploits (none of which is accounted for in this repo). 

A term project for a class at UHart. This project will be done by my project partner April McBroom and I, and I plan to work on the development of a Javascript ACE (Arbitrary Code Execution) exploit (via Heap Manipulation via Buffer Overflow), while she works on the code to inject following exploitation in order to further exploit the system (in this case, Windows 10).

Update: 11-1-22
It appears I may have found a functional exploit utilizing CSS and JS!
I'm not 100% sure whether or not it is a buffer overflow, but I'm pretty sure it is a zero day,
which is a really nice thing to think about.
As of right now, there is a JS function which exploits a CSS property (position: fixed) which stores
memory of any elements with said property similar to malloc() in C, apparently.
Further research and work will be necessary to see what happens next, though.

Update 11-1-22 part 2:
It seems that, by opening a bunch of tabs and running the script, I have
been able to "crash"/freeze Windows (no blue screen, but entirely unusable, not even a frame every minute) as well as Arch Linux.
Further experimentation is necessary in order to see if this memory leak
could potentially be used for a buffer overflow or ACE exploit.
- Maybe this script/exploit could be used to produce an extremely bloated
page file on a Windows server (or something of that likeness) in order
to take up/potentially corrupt memory on the system? Just a thought
