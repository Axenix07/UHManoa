#include <fstream>

int readfile(const std::string& filename, unsigned char buffer[])
{
    std::fstream file;
    int error;

    error = 0;

    file.open(filename, std::ios::binary);
    if (!file.is_open)
    {
        std::cerr << "Error: Could not open file '" << filename << "'" << std::endl;
        error = -1;
    }

    return error;
}