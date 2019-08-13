#include <node.h>
#include <stdio.h>
#include <iostream>
#include <vector>
#include <opencv2/highgui.hpp>
#include <opencv2/imgproc.hpp>
#include <string>
#include <cstddef>
#include "base64.h"

typedef unsigned char BYTE;

namespace demo {

using namespace cv;
using namespace std; 
using v8::Context;
using v8::ArrayBuffer;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Array;

void Method(const FunctionCallbackInfo<Value>& args) {

    Isolate* isolate = args.GetIsolate();

    Mat image;
    image = imread("./img/out.jpg" , CV_LOAD_IMAGE_COLOR);
    //Local<Object> arrayBuffer = ArrayBuffer::New( isolate, image.data, image.rows*image.cols );
    string encoded = base64_encode(image.data, image.rows * image.cols);

    waitKey(0);

    args.GetReturnValue().Set(String::NewFromUtf8(
         isolate,encoded.c_str(), NewStringType::kNormal).ToLocalChecked());
    //args.GetReturnValue().Set(arrayBuffer);
}
void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "opencv", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}