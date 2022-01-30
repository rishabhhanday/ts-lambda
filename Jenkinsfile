pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker run hello-world'
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
