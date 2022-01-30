pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                    docker build -t poc-ts-lambda -f Dockerfile.app .
                    docker create --name poc-ts-lambda-container poc-ts-lambda
                    docker cp poc-ts-lambda-container:/app/function.zip function.zip
                   '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
