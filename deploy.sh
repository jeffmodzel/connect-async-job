#!/bin/bash

deployBucketName="modzel-cloudformation"
stackname="modzel-connect-async-job"
region="us-east-1"
profile="vf-team7"
buildOutputPath=".aws-sam/build"

connectInstanceId="df247932-05d7-449f-9774-9575b95c047f"
tags="Application=Connect Owner=Modzel DoNotDelete=True"
parameterOverrides="ConnectInstanceId=$connectInstanceId"

# Package the SAM application
cmd="sam package --s3-bucket $deployBucketName --profile $profile --region $region --template-file $buildOutputPath/template.yaml --output-template-file $buildOutputPath/template.packaged.yaml"
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
