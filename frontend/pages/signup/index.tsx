import Page1 from "./formPages/Page1";
import Page2 from "./formPages/Page2";
import FormController from "./FormController";

export default function SignUp() {
  return <FormController pages={[Page1, Page2]} />;
}
