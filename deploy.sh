npm run compile 
cd dist && npm i && zip -r function.zip .
aws lambda update-function-code --function-name poc-ts-node --zip-file fileb://function.zip