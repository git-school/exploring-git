import path from 'path'
import fs from 'fs'

import {s3} from 'aws'
import {unzip} from 'zip'

import createExtractor from './create-extractor'

const AWS_KEY = 'abcdefg0123456789'
s3.setKey(AWS_KEY)

const BUCKET = 'my-s3-bucket'

function extract(filename, buffer){
  if(path.extname(filename) === '.zip'){
    return unzip(buffer)
  }else{
    return bytes
  }
}

const extractor = createExtractor(extract)

function upload (filename, targetName) {
  fs.createReadStream(filename).pipe(extractor).pipe(s3.createWriteStream(BUCKET, targetName))
}
