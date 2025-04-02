import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AutchContent";
import { authenticate } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth.context";

function LoginScreen() {

  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext)

  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const token = await authenticate(email, password)
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    }
    setIsLoading(false);
    
  }

  if (isLoading) {
    return <LoadingOverlay message={"Authenticating"} />;
  }


  return <AuthContent isLogin onAuthenticate={signupHandler} />;
}

export default LoginScreen;