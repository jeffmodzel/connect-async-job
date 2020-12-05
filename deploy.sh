#!/bin/bash

deployBucketName="ENTER YOUR BUCKET NAME HERE"
stackname="sam-lambdas-boilerplate"
region="us-west-2"
profile="vf-team2"
buildOutputPath=".aws-sam/build"

connectInstanceId="de64c87a-d57a-4910-b32e-32b5907abe6b"
tags="Application=Connect Owner=$profile"
parameterOverrides="ConnectInstanceId=$connectInstanceId"

# Package the SAM application
cmd="sam package --s3-bucket $deployBucketName --profile $profile --template-file $buildOutputPath/template.yaml --output-template-file $buildOutputPath/template.packaged.yaml"
echo $cmd
($cmd)

# Deploy the SAM application
cmd="sam deploy --region $region --profile $profile --template-file $buildOutputPath/template.packaged.yaml --stack-name $stackname --parameter-overrides $parameterOverrides --tags $tags --capabilities CAPABILITY_NAMED_IAM --no-fail-on-empty-changeset"
echo $cmd
($cmd)

# Delete the stack
# cmd="aws cloudformation delete-stack --stack-name $stackname --region $region --profile $profile"
# echo $cmd
# ($cmd)
