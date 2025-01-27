package patches.templates

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.PullRequests
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.pullRequests
import jetbrains.buildServer.configs.kotlin.v2019_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the template with id = 'ReactUI_GitHubFeatures'
accordingly, and delete the patch script.
*/
changeTemplate(RelativeId("ReactUI_GitHubFeatures")) {
    features {
        val feature1 = find<PullRequests> {
            pullRequests {
                id = "PULL_REQUESTS"
                provider = github {
                    serverUrl = ""
                    authType = token {
                        token = "credentialsJSON:7fd959b6-0b07-4bf1-87d0-1ce9c443528e"
                    }
                    filterSourceBranch = ""
                    filterAuthorRole = PullRequests.GitHubRoleFilter.MEMBER_OR_COLLABORATOR
                }
            }
        }
        feature1.apply {
            provider = github {
                serverUrl = ""
                authType = token {
                    token = "credentialsJSON:7fd959b6-0b07-4bf1-87d0-1ce9c443528e"
                }
                filterSourceBranch = ""
                filterTargetBranch = ""
                filterAuthorRole = PullRequests.GitHubRoleFilter.EVERYBODY
            }
        }
    }
}
