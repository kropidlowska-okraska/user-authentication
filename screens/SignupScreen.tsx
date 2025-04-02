import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AutchContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth.context";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { authenticate } = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const token = await createUser(email, password);
      authenticate(token);
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