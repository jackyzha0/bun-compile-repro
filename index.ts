import { Repository } from '@napi-rs/simple-git'

const repo = new Repository('.')
const timestamp = new Date(repo.getFileLatestModifiedDate('index.ts'))
console.log(timestamp)
