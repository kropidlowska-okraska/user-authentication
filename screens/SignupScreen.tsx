import { useState } from "react";
import AuthContent from "../components/Auth/AutchContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async ({email, password}) => {
    setIsLoading(true);
    await createUser(email, password)
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message={"Authenticating"} />;
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;