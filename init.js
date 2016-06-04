import path from 'path'
import fs from 'fs'

import {s3} from 'aws'
import {unzip} from 'zip'


const AWS_KEY = 'abcdefg0123456789'
s3.setKey(AWS_KEY)

const BUCKET = 'my-s3-bucket'


function extract (filename, buffer) {
    if (path.extname(filename) === 'zip') {
        return unzip(buffer)
    } else {
        return bytes
    }
}

function upload (filename, targetName) {
    const bytes = extract(filenane, fs.readFileSync(filename))
    s3.putObject(BUCKET, filename, targetName)
}
