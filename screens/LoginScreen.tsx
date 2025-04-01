import { useState } from "react";
import AuthContent from "../components/Auth/AutchContent";
import { authenticate } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {

  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);

    try {
      await authenticate(email, password)
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"Authenticating"} />;
  }


  return <AuthContent isLogin onAuthenticate={signupHandler} />;
}

export default LoginScreen;