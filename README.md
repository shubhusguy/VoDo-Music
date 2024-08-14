# VoDo-Music App

This is a dynamic and responsive Music App built using Bootstrap, React, JavaScript, and MongoDB. The app allows users to explore tracks, create and manage playlists, and store user preferences in a database.

## Features

- **Responsive Design**: Built with Bootstrap to ensure compatibility across various devices.
- **User Authentication**: Secure signup and login system with user data stored in MongoDB.
- **Track Search**: Search for tracks using an integrated search bar.
- **Playlists**: Create, view, and manage personal playlists.
- **Profile Management**: View and edit user profiles, including updating profile pictures.
- **Dark Mode**: Aesthetic dark theme with a black and green contrast combination.
- **Smooth Navigation**: Seamless transition between different sections such as Tracks, Playlists, and Profile.

## Technologies Used

- **Frontend**: React, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shubhusguy/VoDo-Music.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd music-app
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Set up MongoDB**:
   - Ensure MongoDB is running locally or configure the MongoDB connection string in `db.js`.

5. **Start the server**:
    ```bash
    npm start
    ```

6. **Open the app**:
    - The app will be running on `http://localhost:3000`.

## Usage

- **Sign Up / Login**: Users can sign up or log in to access personalized features.
- **Search Tracks**: Use the search bar to find tracks.
- **Create Playlists**: Organize your favorite tracks into playlists.
- **Edit Profile**: Update your profile details and upload a profile picture.

## Project Structure

```bash
music-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── server/
│   ├── db.js
│   ├── server.js
├── .env
├── package.json
├── README.md
