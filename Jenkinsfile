pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS = credentials('github-private-repo-key') // Ensure this matches your Jenkins credential ID
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Jawad159-creator/HelloDevOps.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t jawadawan/hello-frontend:latest ./frontend'
                sh 'docker build -t jawadawan/hello-backend:latest ./backend'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-password', variable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u jawadawan --password-stdin'
                    sh 'docker push jawadawan/hello-frontend:latest'
                    sh 'docker push jawadawan/hello-backend:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/app-deployment.yml --kubeconfig=/var/jenkins_home/.kube/config'
            }
        }
    }
}