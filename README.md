**Ionic Project**

This is an Ionic project setup that uses features like camera integration, image display on a canvas, and page navigation. It is built using Ionic Framework and Capacitor for mobile native features.

**Assumptions**

1. You have Node.js and npm installed on your system.
2. You have Ionic CLI installed globally.
3. You have Android Studio set up for mobile app development.


**Setup Process**

Follow these steps to set up the project on your local machine.

**Prerequisites**

Make sure you have the following tools installed:

-- Node.js

-- Ionic CLI

-- Android Studio


**Clone the Repository**

Clone this repository to your local machine

-- git clone https://github.com/HarshaNandanwar31/imageCapture.git (clone link)

-- cd imageCapture (project name)


**Install Dependencies**

After cloning the project, navigate to the project folder and install the required dependencies:

-- npm install

**Run the App**

To run the app in the browser:

-- ionic serve

To run the app on an Android device (make sure your connected device is ready):

-- ionic capacitor run android

**Build the App**

To build the app, use the following command:

-- ionic build 

**Assumptions**

The app uses Font Awesome icons for buttons. You need an internet connection to fetch the icons if they are not preloaded.
The Capacitor Camera plugin is used to capture images, which requires a real device to test.

**Dependencies**

1. @ionic/angular: The core library for Ionic.
2. @capacitor/camera: The Capacitor Camera plugin for capturing images.
3. @capacitor/core: Core Capacitor library for accessing native device features.
