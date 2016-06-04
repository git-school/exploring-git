import fs from 'fs'

import {s3} from 'aws'

const BUCKET = 'my-s3-bucket'

function upload (filename) {
  const bytes = fs.readFileSync(filename)
  s3.putObject(BUCKET, filename)
}
