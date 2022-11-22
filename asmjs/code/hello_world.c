
/* testing with asm.js

asm.js converts c code into javascript, so I figure
a classic c buffer overflow may be functional with
javascript (hopefully)

*/
#include <stdio.h>

int main() {
  printf("hello world\n");
  return 0;
}
