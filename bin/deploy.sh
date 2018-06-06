#!/bin/bash
gatsby build
aws s3 sync --acl public-read --sse --delete ./public/ s3://csc.learngala.com
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E28H7N26PSNC9E --paths '/*'
