
stackname="modzel-connect-async-job"
region="us-east-1"
profile="vf-team7"

# Delete the stack
cmd="aws cloudformation delete-stack --stack-name $stackname --region $region --profile $profile"
echo $cmd
($cmd)