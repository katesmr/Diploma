MAX_CHUNK_SIZE = 32000

HEADER_PATH = "/path/to/header.wav"

MAX_WAV_LENGTH = 4294967303

BYTES_PER_SECOND = 32000

def get_audio(request, file_name):
    # get offset
    pos = int(request.GET.get("pos", 0))
    offset = pos * BYTES_PER_SECOND
    # get range
    r = request.META["HTTP_RANGE"]
    start = int(r.replace("bytes=", "").split("-")[0])
    start_o = start + offset
    # in case this is the first request, a wave header is added
    if start == 0:
        with open(HEADER_PATH, "rb") as f:
            data = f.read()
        length = 44
    else:
        data = ""
        length = 0

    start_o -= 44
    file_path = file_name
    # wait up to 10 seconds if the end of the file is reached
    # (in case it grows more)
    for _ in range(10):
        size = getsize(file_path)
        if size - start_o > 0:
            break
        else:
            # sleep(1)
            length += min(MAX_CHUNK_SIZE, size - start_o)
            # if the length is zero (if end of file is reached and there is
            # nothing more to server), set the total length to the actual
            # served length
            if length == 0:
                total = size - offset + 44
            # else, set the total length to the maximum possible wav length
            # so that the browsers know that it has to send subsequent requests
            else:
                total = MAX_WAV_LENGTH
    # get the actual data from the raw audio file

    with open(file_path, "rb") as f:
        f.seek(start_o)
    data += f.read(length)
    # send response with use of Content-Range
    resp = HttpResponse(data, content_type="audio/x-wav", status=206)
    resp["Content-Range"] = "bytes " + str(start) + "-" + str(start + length) + "/" + str(total)
    return resp
