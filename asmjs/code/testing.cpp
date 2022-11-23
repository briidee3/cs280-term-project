
// testing what C code can do in a web environment

#include <stdio.h>
#include ".\test\shared\shellapi.h"


int main() {
    // test for what writing to a file can do
    /*FILE *fp;

    fp = fopen("/memwrite_test.txt", "w+");
    fputs("testing fputs from JS compiled from C code thru emcc...\n", fp);
    fclose(fp);*/

    // testing shell code execution
    int testing = ShellExecute("edit\n", "C:\\Program Files\\Google\\Chrome\\Application\\test.bat", 1);
    return testing;
}
