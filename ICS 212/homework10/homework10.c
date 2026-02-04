#include <jni.h>
#include "homework10.h"

JNIEXPORT jint JNICALL Java_homework10_is_1multiple3
  (JNIEnv *env, jobject obj, jint num)
{
    if (num % 3 == 0)
        return 1;
    else
        return 0;
}
