pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    docker container prune -f
                    docker build -t poc-ts-lambda -f Dockerfile.app .
                    docker create --name poc-ts-lambda-container poc-ts-lambda
                    docker cp poc-ts-lambda-container:/app/dist/function.zip function.zip
                    docker build -t lambda-deploy -f Dockerfile.deploy .
                   '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''                  
                    docker run -e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY -e AWS_DEFAULT_REGION lambda-deploy
                   '''
            }
        }
    }
}
