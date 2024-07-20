## Getting Started

These instructions will help you set up the project on your device.

### Prerequisites

Ensure that Python is installed. The version used for this project is 3.12.0.

### Installation

1. Install all the packages listed in the `requirements.txt` file using the following command:
    ```sh
    pip install -r requirements.txt
    ```



### Configuration

1. **Setting up Google OAuth Credentials:**
    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project or select an existing project.
    - Navigate to the **APIs & Services > Credentials** page.
    - Click on **Create Credentials** and select **OAuth 2.0 Client ID**.
    - Configure the consent screen and add the necessary scopes.
    - Set the application type to **Web application**.
    - In the **Authorized redirect URIs** section, add the following URIs:
      
      - For your deployed project (replace `your-deployed-project.com` with your actual domain):
        ```
        https://your-deployed-project.com/google_sign_in
        ```
    - Save the changes and note down the `client_id` and `client_secret`.

2. **Setting up Environment Variables:**
    - Rename the `.env_sample` file to `.env`.
    - Open the `.env` file and fill in the following values:
      ```env
      CLIENT_ID=your-client-id
      CLIENT_SECRET=your-client-secret
      SECRET_KEY=your-secret-key
      ```
    - Ensure that `SECRET_KEY` is a strong, random value. You can generate one using Python:
      ```python
      import os
      secret_key = os.urandom(24)
      print(secret_key)
      ```
3. **Adding Redirect URI in `app.py`:**
    - Open the `app.py` file.
    - Locate line 55 
    - Replace the placeholder(Your_redirect_uri) with your actual redirect URI. For example:
      ```
      redirect_uri = 'https://your-deployed-project.com/google_sign_in'
      ```
    - Make sure this URI matches the one set in your Google Cloud Console.      
### Usage

1. During the sign-up process, you will be redirected to a registration page where you need to select a role [Admin, User, Interviewer].
2. As an Admin, you will have access to the `config.py` file, where you can change the contents of dropdown filters.

## contact

Project Link:[https://github.com/whitedevil1233rrffrfrrferf/intern_final]
