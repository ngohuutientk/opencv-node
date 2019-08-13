{
    "targets": [{
        "target_name": "addon",
    'include_dirs': [
        '.',
        '/user/local/lib',
    ],
    'cflags': [
        '-std=c++11',
    ],
    'link_settings': {
        'libraries': [
            '-L/user/local/lib', 
             '-lopencv_core', 
             '-lopencv_imgproc', 
             '-lopencv_highgui'
        ],
    },
    "sources": [ "opencv.cpp","base64.cpp" ]
    }]
}