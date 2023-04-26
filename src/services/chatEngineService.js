import axios from 'axios';

const CHAT_ENGINE_API_BASE_URL = 'https://api.chatengine.io';
const PROJECT_ID = '9a49e386-12b3-4e5c-8f2f-63c741ba08a5';
const PROJECT_SECRET = '5b8e1c78-518e-44e3-abc8-e32580dc88ab';

const createOrUpdateChatEngineUser = async (username, email) => {
  try {
    // Get the user from ChatEngine
    const getUserResponse = await axios.get(
      `${CHAT_ENGINE_API_BASE_URL}/users/${username}/`,
      {
        headers: {
          'Private-Key': PROJECT_SECRET,
        },
      }
    );

    // If the user exists, return
    if (getUserResponse.status === 200) {
      return;
    }
  } catch (error) {
    if (error.response.status === 404) {
      // If the user doesn't exist, create a new user
      try {
        await axios.post(
          `${CHAT_ENGINE_API_BASE_URL}/users/`,
          {
            username: username,
            secret: email,
          },
          {
            headers: {
              'Private-Key': PROJECT_SECRET,
            },
          }
        );
      } catch (createError) {
        console.error('Error creating user in ChatEngine:', createError);
      }
    } else {
      console.error('Error getting user from ChatEngine:', error);
    }
  }
};

export default createOrUpdateChatEngineUser;