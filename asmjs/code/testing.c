
// testing what C code can do in a web environment

#include <stdio.h>

int main() {
    FILE *fp;

    fp = fopen("/memwrite_test.txt", "w+");
    fputs("testing fputs from JS compiled from C code thru emcc...\n", fp);
    fclose(fp);
}
