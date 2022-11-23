
// seeing if I can write to a txt file from PDF based JS
// compiled with emcc from C code

#include <stdio.h>

int main() {
    FILE *fp;

    fp = fopen("/memwrite_test.txt", "w+");
    fputs("testing fputs from JS compiled from C code thru emcc...\n", fp);
    fclose(fp);
}
