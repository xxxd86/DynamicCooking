D:\andriodsource\whfiles\newDynamic\dynamic_sdk_flutter>flutter build aar

Running Gradle task 'assembleAarDebug'...                         442.9s
√ Built build\host\outputs\repo
Running Gradle task 'assembleAarProfile'...                        41.6s
√ Built build\host\outputs\repo
Running Gradle task 'assembleAarRelease'...                        35.8s
√ Built build\host\outputs\repo

Consuming the Module
  1. Open <host>\app\build.gradle
  2. Ensure you have the repositories configured, otherwise add them:

      String storageUrl = System.env.FLUTTER_STORAGE_BASE_URL ?: "https://storage.googleapis.com"
      repositories {
        maven {
            url 'D:\andriodsource\whfiles\newDynamic\dynamic_sdk_flutter\build\host\outputs\repo'
        }
        maven {
            url "$storageUrl/download.flutter.io"
        }
      }

  3. Make the host app depend on the Flutter module:

    dependencies {
      debugImplementation 'com.example.dynamic_sdk_flutter:flutter_debug:1.0'
      profileImplementation 'com.example.dynamic_sdk_flutter:flutter_profile:1.0'
      releaseImplementation 'com.example.dynamic_sdk_flutter:flutter_release:1.0'
    }


  4. Add the `profile` build type:

    android {
      buildTypes {
        profile {
          initWith debug
        }
      }
    }

To learn more, visit https://flutter.dev/go/build-aar
