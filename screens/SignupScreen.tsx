import { useState } from "react";
import AuthContent from "../components/Auth/AutchContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);

    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"Authenticating"} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;