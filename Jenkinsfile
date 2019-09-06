pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: setup_numBuildsToKeep()))
    }
    environment {
        // Load the correct JenkinsPipelines library based on the branch name.
        loadLibraries = setupSharedLibrary()
        branchName = "${env.BRANCH_NAME}"
    }
	
	
	
    stages {

	
        stage('Build') {
            steps {
                run_NPMInstall()
                //sh "cp -r node_modules/@ricohcc/environment/dist/ricoh-cloud src/"
                //sh "cp -r node_modules/@ricohcc/banner/dist/ricoh-banner src/"
                //sh "chmod 777 build_scripts/build_jenkins.sh && build_scripts/build_jenkins.sh"
                
				//generate dashboard-ui.zip
				//sh "rm dashboard-ui.zip || true"
                //zip zipFile: 'dashboard-ui.zip', archive: false, dir: 'dist'
                //sh "zipinfo dashboard-ui.zip"
				
				
                run_NPMPublish("1.0")
            }
        }
        
        //stage('Build dashboardWebServer') {
        //    steps {

        //        build job: "cloud.Supervisor.Backend.dashboardWebServer/${branchName}"

        //    }
        //}

    }
    post {
        failure { sendEmailNotificationsFailure() }
        changed { sendEmailNotificationsChange() }
        always  { sendEmailNotifications() }
    }
}
