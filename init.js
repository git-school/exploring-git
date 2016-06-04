import fs from 'fs'

import {s3} from 'aws'

const AWS_KEY = 'abcdefg0123456789'
s3.setKey(AWS_KEY)

const BUCKET = 'my-s3-bucket'

function upload (filename) {
  const bytes = fs.readFileSync(filename)
  s3.putObject(BUCKET, filename)
}
